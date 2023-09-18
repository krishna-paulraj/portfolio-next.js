import Image from "next/image";
export default function Experience() {
  return (
    <section className="h-screen flex flex-col items-center justify-around gap-10">
      <div className="relative flex items-center justify-center">
        <Image
          className="absolute top-0"
          src="/assets/underline.png"
          width={200}
          height={50}
          alt="Underline"
        />
        <h1 className="hero-txt text-5xl">Background</h1>
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col justify-around items-center">
          <Image
            src="/assets/university.png"
            width={200}
            height={200}
            alt="Picture of the author"
          ></Image>
          <h1 className="font-bold text-lg">
            Savitribai Phule Pune University
          </h1>

          <p>BE COMPUTER SCIENCE, 2021-2025</p>
        </div>

        <div className="h-1 w-80 m-auto bg-black md:rotate-90"></div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/assets/college.png"
            width={200}
            height={200}
            alt="Picture of the author"
          ></Image>
          <h1 className="font-bold text-lg">
            Suman Ramesh Tulsani Technical Campus
          </h1>
          <p>Khamshet, Pune</p>
          <p>3nd Year (Expected Graduation : 2025)</p>
        </div>
      </div>
    </section>
  );
}
