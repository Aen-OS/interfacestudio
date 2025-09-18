export default function Banner() {
  return (
    <div className="hidden md:flex sticky bg-info min-h-8 lg:min-h-10 m-0 p-0 inset-x-0 top-0 z-40 w-full items-center justify-center">
      <p className="text-xs lg:text-base mx-0 text-primary-content drop-shadow-md">
        Want a modern, well-designed website without the high cost?{" "}
        <a href="#" className="transition duration-100 hover:underline">
          Book a 30 minute intro call
        </a>
      </p>
    </div>
  );
}
