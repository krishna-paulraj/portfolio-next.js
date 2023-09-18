import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mt-20 ">
      <div className="bg-slate-300 flex flex-col-reverse justify-center items-center gap-10 md:flex-row-reverse md:p-10">
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
          <div className=" md:flex md:gap-10 ">
            <Image
              src="/assets/photo.jpeg"
              width={550}
              height={400}
              alt="Picture of the author"
              className=" rounded-2xl object-contain shadow-2xl"
            ></Image>
            <div className="md:flex md:flex-col md:justify-center">
              <div className="text-2xl mt-10 text-start flex gap-5 ">
                <div>&#10503;</div>I am currently pursuing a Bachelor of
                Engineering in Computer Science at Suman Ramesh Tulsiani
                Technical Campus.
              </div>
              <div className="text-2xl mt-10 text-start flex gap-5 ">
                <div>&#10503;</div>During my studies, I have gained experience
                in various programming languages, including Python, which I
                learned in my first year of college.
              </div>
              <div className="text-2xl mt-10 text-start flex gap-5">
                <div>&#10503;</div>I then went on to specialize in backend
                programming and became proficient in JavaScript and its
                frameworks such as React and Next.js.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
