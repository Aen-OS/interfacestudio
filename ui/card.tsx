export default function Card({ src, company, link }) {
  return (
    <div className="block border-black border-2 p-4 rounded-xl">
      {/* <img
        alt={company}
        src={src}
        className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72 "
      /> */}

      <p className="text-center w-full h-56">Front Page Coming Soon!</p>

      <div className="mt-4 flex items-center justify-center gap-4">
        <strong className="font-medium capitalize">{company}</strong>

        <span className="block h-px w-8 bg-blue-500"></span>

        <a
          // href={`https://${link}`}
          href={null}
          target="_blank"
          className="mt-0.5 opacity-75 sm:mt-0 line-through"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
