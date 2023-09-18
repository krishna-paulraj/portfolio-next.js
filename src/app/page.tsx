import Image from "next/image";
import About from "./components/section/About";
import Experience from "./components/section/Experience";
import Footer from "./components/Footer";
export default function Home() {
  const text = "I'm";
  return (
    <div className="flex flex-col mt-20">
      <section className="h-[85vh] mx-8 md:mx-28 flex flex-col items-center justify-center text-center gap-24 ">
        <h1 className="relative hero-txt text-3xl md:text-7xl">
          Hi, {text} <span className="name">Suresh Krishna</span>,<br /> and{" "}
          {text} an Web Developer.
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

      <About />
      <Experience />
      <Footer />
    </div>
  );
}
