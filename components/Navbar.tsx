import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="list-none m-0 p-12 flex gap-8 items-center bg-primaryColor">
          <li>
            <a href="#">
              <Image
                src={"/fwdpIcon.png"}
                alt="FWDP logo"
                width={50}
                height={50}
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
            <a href="#">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
