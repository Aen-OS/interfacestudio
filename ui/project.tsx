import Image from "next/image";

export default function ProjectCard({ src, company, link }) {
  return (
    <div className="block border-black border-2 p-4 rounded-xl">
      <Image
        alt={company}
        src={src}
        className="h-56 w-full rounded-3xl object-cover sm:h-64 lg:h-100"
      />

      <div className="mt-4 flex items-center justify-center gap-4">
        <strong className="font-medium capitalize">{company}</strong>

        <span className="block h-px w-8 bg-blue-500"></span>

        <a href={link} target="_blank" className="mt-0.5 sm:mt-0">
          <button className="btn">Visit Website</button>
        </a>
      </div>
    </div>
  );
}
