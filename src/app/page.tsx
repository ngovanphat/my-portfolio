import classNames from "classnames";
import ProjectCard from "./components/ProjectCard";
import tachnenLogo from "./tachnenlogo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-16 py-4">
      <div className="flex flex-col-reverse sm:flex-row w-full">
        <div className="flex flex-col flex-grow w-full  sm:w-1/3">
          <p className="text-6xl font-regular text-black">
            My name is <b>Phat</b>
          </p>
          <p className="text-slate-400 text-sm mt-5">
            I am a fullstack developer with more than 3 years of experience
          </p>

          <button
            className={classNames({
              "rounded-full max-w-max": true,
              "text-white text-sm": true,
              "mt-5  px-14 py-3 bg-[#E8582A]": true,
            })}
          >
            Hire me
          </button>

          <div className="w-full mt-20">
            <div className="flex gap-3">
              <div className="bg-[#EBEBEB] rounded-md text-black text-lg px-6 py-2">
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
        <div
          className={classNames({
            "flex flex-col": true,
            "mt-[100px] mb-[30px] text-center": true,
            "sm:mt-0 sm:mb-0 sm:text-left": true,
            "sm:flex-grow w-full sm:w-1/3 sm:justify-center sm:items-center":
              true,
          })}
        >
          <div
            className={classNames({
              "bg-[#241F21] px-5  py-3": true,
              "rounded-[15px]": true,
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
          </div>
        </div>
        <div className="flex flex-col sm:flex-grow w-full  sm:w-1/3"></div>
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
