import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.svg" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
