import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header pt-4 md:pt-8 md:static absolute z-[10] w-full">
      <div className="container">
        <div className="flex justify-between items-center relative md:static">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                width={173}
                height={75}
                sizes="(max-width: 768px) 107px, 173px"
                className="nav-logo-img w-[107px] h-[46px] md:w-[173px] md:h-[75px]"
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className="md:hidden absolute right-0">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="1.03598" x2="19" y2="1.03598" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <line x1="1" y1="7.03598" x2="19" y2="7.03598" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <line x1="1" y1="13.036" x2="19" y2="13.036" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <nav className="hidden md:block">
            <ul className="nav-list flex">
              <li className="nav-list-item">
                <Link
                  href="/"
                  className="nav-list-item-link inline-block text-ternary font-medium px-10 font-figtree"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-list-item">
                <Link href="/" className="nav-list-item-link inline-block text-ternary font-medium font-figtree">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
