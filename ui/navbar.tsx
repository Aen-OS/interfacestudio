import Image from "next/image";
import Logo from "../public/penpaperlogo.webp";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent fixed mt-5 text-primary-content w-fit p-0 border-0 z-50">
        <div className="flex-1">
          <a href="/" className="text-xl font-bold text-center">
            AN/Design
          </a>
        </div>
        <div className="flex-none pl-6">
          <ul className="menu menu-horizontal font-dm text-lg font-bold">
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
