import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="list-none m-0 p-8 flex gap-8 items-center text-xl text-white bg-midnightBlue">
          <li>
            <a href="#">
              <Image
                src={"/logo-horizontal.png"}
                alt="FWDP logo"
                width={250}
                height={250}
              />
            </a>
          </li>
          <li className="ml-auto">
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Projects</a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
