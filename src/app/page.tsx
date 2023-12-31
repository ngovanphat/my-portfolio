"use client";
import classNames from "classnames";
import ProjectCard from "./components/ProjectCard";
import tachnenLogo from "./tachnenlogo.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function navigateToContact() {
    router.push("/contact");
  }
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-16 py-4">
      <div className="flex flex-col-reverse sm:flex-row w-full">
        <div className="flex flex-col flex-grow w-full  sm:w-1/2">
          <p className="text-6xl font-regular text-black">
            My name is <b>Phat</b>
          </p>
          <p className="text-slate-600 text-sm mt-5">
            Allow me to introduce myself. I am a programmer with 3 years of
            experience, graduating from a prestigious university with a major in
            Natural Sciences. During my academic years, I excelled in my studies
            and gained valuable project management skills. <br />
            <br /> In my professional career, I have primarily focused on
            front-end and full-stack development. Additionally, I possess skills
            in mobile development and have knowledge of AI and machine learning.
            Apart from my professional pursuits, I have a diverse range of
            interests. I enjoy reading books, playing badminton, and maintaining
            a healthy lifestyle. Physical fitness is important to me as it helps
            me maintain focus and productivity in my work.
            <br />
            <br />
            Overall, I am a dedicated and experienced programmer with a passion
            for expanding my skills and staying updated with the latest industry
            trends. I am eager to take on new challenges and contribute my
            expertise to innovative projects.
          </p>

          <button
            className={classNames({
              "rounded-full max-w-max": true,
              "text-white text-sm": true,
              "mt-5  px-14 py-3 bg-[#E8582A]": true,
            })}
            onClick={navigateToContact}
          >
            Hire me
          </button>

          <div className="w-full mt-20">
            <div className="flex gap-3">
              <div className="bg-[#EDEDED] rounded-md text-black text-lg px-6 py-2">
                javascript
              </div>
              <div className="bg-[#4D9AD5] rounded-md text-black text-lg px-6 py-2">
                dart
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="bg-[#51A4CC] rounded-md text-black text-lg px-6 py-2">
                golang
              </div>
              <div className="bg-[#E96629] rounded-md text-black text-lg px-6 py-2">
                java
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-grow w-full  sm:w-1/3"></div> */}
        <div
          className={classNames({
            "flex flex-col": true,
            "mt-[100px] mb-[30px] text-center": true,
            "sm:mt-0 sm:mb-0 sm:text-left": true,
            "sm:flex-grow w-full sm:w-1/2 sm:justify-end ": true,
            relative: true,
          })}
        >
          {/* <div
            className={classNames({
              "bg-[#241F21] px-8  py-3 w-full": true,
              "rounded-[15px]": true,
              "sm:absolute sm:bottom-[50px] sm:left-[-50px] sm:max-w-max": true,
            })}
          >
            <p
              className={classNames({
                "text-4xl text-white font-light": true,
              })}
            >
              3+
            </p>
            <p
              className={classNames({
                "text-xs text-white font-extralight": true,
              })}
            >
              years experience
            </p>
          </div> */}
        </div>
      </div>

      <div className="w-full mt-20">
        <div
          className={classNames({
            "flex w-full flex-col": true,
            "sm:flex-row sm:justify-between sm:items-center": true,
          })}
        >
          <p className="font-semibold text-black text-3xl">Latest projects</p>
          <p className="text-black text-sm font-medium">All projects</p>
        </div>

        <div className="flex sm:flex-row flex-col items-center sm:justify-between px-5 py-3">
          <div className="mt-5">
            <ProjectCard
              projectImage={tachnenLogo}
              projectName="tachnen.org"
              projectNumber="1"
              projectLink="https://tachnen.org"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
