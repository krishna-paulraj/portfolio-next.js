import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className=" h-1/2 bg-orange-600 flex flex-col gap-12 p-10">
      <div className="relative text-3xl text-white md:text-5xl">
        <Image
          className="absolute bottom-0 left-0"
          src="/assets/circle2.png"
          width={150}
          height={150}
          alt="circle"
        />
        <h1>Reach out if you want</h1>
        <h1>to create impactful </h1>
        <h1>web apps together.</h1>
      </div>
      <div className="h-1 w-80 bg-black"></div>
      <div>
        <h1 className="font-mono">To see more of my work, visit my socials:</h1>
        <div className="flex gap-5 my-5">
          <Link href="https://twitter.com/KrishnaPaulraj4">
            <Image
              className=""
              src="/assets/twitter.png"
              width={40}
              height={40}
              alt="menu"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/suresh-krishna-paulraj-a81190238/">
            <Image
              className=""
              src="/assets/linkedin.png"
              width={40}
              height={40}
              alt="menu"
            />
          </Link>
          <Link href="https://github.com/krishna-paulraj">
            <Image
              className=""
              src="/assets/icons8-github.svg"
              width={40}
              height={40}
              alt="github"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
