import Image from "next/image";
import Link from "next/link";
type ProjectCardProps = {
  projectImage: string;
  projectName: string;
  projectNumber: string;
  projectLink: string;
};
export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.projectLink} target="_blank">
      <div className="relative max-w-max">
        <div className="w-[200px] h-[200px] rounded-[15px] drop-shadow-md bg-slate-50 flex items-center justify-center">
          <Image src={props.projectImage} alt={props.projectName} width={170} />
        </div>
        <div className="absolute bottom-[15px] right-[-30px] w-[60px] h-[60px] bg-[#241F21] rounded-[10px] text-white flex items-center justify-center">
          <p className="text-white text-3xl">01</p>
        </div>
        <p className="font-semibold text-black text-md mt-4">
          {props.projectName}
        </p>
      </div>
    </Link>
  );
}
