import Image from "next/image";
const Skills = () => {
  return (
    <section id="about" className="min-h-screen bg-slate-400 p-12 md:p-16">
      <div className="relative flex items-center justify-start">
        <h1 className="text-5xl">Skills</h1>
        <Image
          className="absolute top-2"
          src="/assets/underline.png"
          width={130}
          height={130}
          alt="Underline"
        />
      </div>
      <div className="bg-slate-300 p-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5 mt-10 md:flex-row md:justify-around ">
        <h1 className="text-xl font-medium">Web Development</h1>
        <div className="flex">
          <Image
            src="/assets/icons8-html5.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
          <Image
            src="/assets/icons8-css3.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
          <Image
            src="/assets/icons8-javascript.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
        </div>
      </div>
      <div className="bg-slate-300 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5 mt-10 md:flex-row md:justify-around p-5">
        <h1 className="text-xl font-medium">Frameworks</h1>
        <div className="flex justify-center items-center gap-10">
          <Image
            src="/assets/icons8-tailwind-css.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
          <Image
            src="/next.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
        </div>
      </div>
      <div className="bg-slate-300 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5 mt-10 md:flex-row md:justify-around p-5">
        <h1 className="text-xl font-medium">Version Control</h1>
        <div className="flex justify-center items-center gap-10">
          <Image
            src="/assets/icons8-git.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
          <Image
            src="/assets/icons8-github.svg"
            height={100}
            width={100}
            alt="Next.js Logo"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Skills;
