export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent fixed mt-5 text-primary-content w-fit p-0 border-0">
        <div className="flex-1">
          <a href="/" className="text-xl pr-8 font-bold">
            Logo
          </a>
        </div>
        <div className="flex-none pl-8">
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
