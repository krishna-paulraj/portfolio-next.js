import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="h-screen mx-8 md:mx-28 flex flex-col items-center justify-center text-center gap-24 ">
        <h1 className="relative hero-txt text-3xl md:text-7xl">
          Hi, I'm <span className="name">Suresh Krishna</span>,<br /> and I'm an
          Web Developer.
          <Image
            className="absolute right-1 top-3 md:top-24"
            src="/assets/underline.png"
            width={180}
            height={50}
            alt="Underline"
          />
        </h1>
        <p className="font-extralight">
          I make awesome Web Apps that helps solve real world problems.
        </p>
        <div className="relative h-32 w-32 flex justify-center items-center">
          <Image
            className="absolute top-0"
            src="/assets/circle.png"
            width={300}
            height={300}
            alt="Circle"
          />
          <button type="submit" className="text-xl font-medium">
            Hire Me
          </button>
        </div>
      </section>

      <section className="mt-20">
        <div className="bg-slate-300 flex flex-col-reverse justify-center items-center gap-10 md:flex-row-reverse">
          <div className="p-10">
            <div className="relative h-44">
              <Image
                className="absolute bottom-0"
                src="/assets/underline.png"
                width={200}
                height={50}
                alt="Underline"
              />
              <h1 className="hero-txt text-5xl">
                A Little <br />
                About Me
              </h1>
            </div>

            <p className="text-2xl mt-10 text-start leading-10">
              I am currently pursuing a Bachelor of Engineering in Computer
              Science at Suman Ramesh Tulsiani Technical Campus.
            </p>
            <p className="text-2xl mt-10 text-start leading-10">
              During my studies, I have gained experience in various programming
              languages, including Python, which I learned in my first year of
              college.
            </p>
            <p className="text-2xl mt-10 text-start leading-10">
              I then went on to specialize in backend programming and became
              proficient in JavaScript and its frameworks such as React and
              Next.js.
            </p>
          </div>

          <Image
            src="/assets/photo.jpeg"
            width={600}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div>
      </section>
      <p>
        I have a basic understanding of Blockchain technologies and had the
        opportunity to work with smart contracts during my participation in
        hackathons.
      </p>
    </div>
  );
}
