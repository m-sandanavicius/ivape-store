import Image from 'next/image';
import loaderGif from '@/assets/loader.gif';

export default function LoadingPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image src={loaderGif} height={150} width={150} alt="Loading..." />
    </div>
  );
}
