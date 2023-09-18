import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const domain = process.env.DOMAIN;
  return (
    <header className="sticky top-0 flex justify-between items-center p-3 backdrop-blur-3xl md:justify-around">
      <div className="flex items-center gap-4">
        <h1 className="text-xl">{domain}</h1>
        <Image
          src="/assets/night-mode.png"
          width={20}
          height={20}
          alt="Underline"
        />
      </div>

      <div>
        <Image
          className="block items-end md:hidden"
          src="/assets/menu.png"
          width={20}
          height={20}
          alt="menu"
        />
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-10">
          <li>
            <Link href="#about">Skills</Link>
          </li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
