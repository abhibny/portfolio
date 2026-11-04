import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar(props) {
  const router = useRouter();
  const [activeBack, setActiveBack] = useState(false);

  const pageName = useRouter().asPath;

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Escape') {
        setActiveBack(false);
        router.push('/');
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveBack(true);
        event.preventDefault(); // Prevents default browser behavior
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const isArt = router.pathname === '/art';

  return (
    <nav className={`body grid-layout sticky top-0 z-[100] py-4 border-solid border-b ${isArt ? 'bg-white text-black border-black/20' : 'bg-black text-white border-white/20'} ${['/', '/art'].includes(router.pathname) ? 'home-navbar' : ''}`}>
      {/* logo */}
      <Link
        className="col-span-4 col-start-1 hover:text-[#4C5BFF]"
        passHref
        href="/"
      >
        <h1 className="">अभिषेक बेन्नी</h1>
      </Link>

      {!isArt && <>
      {/* Arrow aligned to end of column 2 */}
      <p className="hidden md:block col-start-6 col-span-1 justify-self-end text-yellow-300">
        ⟶
      </p>

      <p className="whitespace-nowrap col-span-6 md:col-start-7 lg:col-start-7 md:col-span-3 lg:col-span-2">
        <Link className="hover:text-[#4C5BFF]" passHref href="/art">
          [ART] Artist / Designer
        </Link>
      </p>
      <p className="navbar-location hidden col-span-3 lg:inline md:col-start-10 lg:col-start-10">
        Bangalore / Japan
      </p>
      </>}
      {pageName !== '/' && (
        <div className="absolute right-0 flex justify-end col-start-12 top-[50%] translate-y-[-50%] ">
          <Link aria-label="Close and return home" className="" passHref href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 hover:text-[#4C5BFF] ${
                activeBack && 'text-[#4C5BFF]'
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      )}
      <style jsx>{`
        .home-navbar {
          width: 56.448412vw;
          margin-left: auto;
          margin-right: auto;
        }

        .home-navbar .navbar-location {
          text-align: right;
          justify-self: end;
        }

        @media (max-width: 767px) {
          .home-navbar {
            width: 100%;
            max-width: 440px;
          }
        }
      `}</style>
    </nav>
  );
}
