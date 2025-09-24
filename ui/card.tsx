export default function Card({ src, company, link }) {
  return (
    <>
      <a href="#" className="block">
        <img
          alt={company}
          src={src}
          className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">{company}</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-blue-500"></span>

          <a
            href={`https://${link}`}
            target="_blank"
            className="mt-0.5 opacity-50 sm:mt-0"
          >
            Visit Website
          </a>
        </div>
      </a>
    </>
  );
}
