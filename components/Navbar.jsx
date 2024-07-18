import { navLinks } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full p-1 pr-8 items-center bg-white">
      <div className="flex items-center justify-between p-[9px]">
        <div className="flex items-center gap-12">
          <Image
            src="/images/logo.svg"
            alt="pollini logo"
            height={30}
            width={140}
          />
          <nav className="text-xs font-medium tracking-wide ml-6 hidden lg:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-xs uppercase font-medium">
            <Link href="/search">Search</Link>
          </span>
          <span className="text-xs font-medium">
            <Link href="/country">EN|GBP</Link>
          </span>
          <Link href="/account">
            <Image
              src="/images/account.svg"
              alt="account"
              width={16}
              height={16}
            />
          </Link>
          <Link href="/favorites">
            <Image
              src="/images/favorite.svg"
              alt="favorite"
              width={16}
              height={16}
            />
          </Link>
          <Link href="/bag">
            <Image src="/images/bag.svg" alt="bag" width={16} height={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
