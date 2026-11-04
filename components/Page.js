import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

export default function Page(props) {
  const isHome = ['/', '/art'].includes(useRouter().pathname);
  const isArt = useRouter().pathname === '/art';
  return (
    <div className={isArt ? 'art-theme' : undefined}>
      <div className="w-full flex items-center flex-col z-[200]">
  <div className={`z-10 w-full h-full ${isArt ? 'bg-white' : 'bg-black'} justify-center flex`}>
          <div
            className={`flex relative flex-col px-3 ${isHome ? 'pb-0' : 'pb-8 border-b'} w-full border-solid shadow-xl max-w-8xl z-[9] text-padding md:px-3 border-neutral-800`}
          >
            <Meta />
            <Navbar />
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
      {isArt && <style jsx global>{`
        html, body { background: #fff; }
        .art-theme { min-height: 100vh; background: #fff; color: #000; --project-heading-color: #000; }
        .art-theme .shadow-xl { box-shadow: none; }
      `}</style>}
    </div>
  );
}
