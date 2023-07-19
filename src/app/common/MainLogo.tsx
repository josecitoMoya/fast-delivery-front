import Image from "next/image";
import Logo from "../assets/Main-logo.png";

export default function MainLogo() {
  return (
    <>
      <Image
        alt="Fast Logo"
        width={200}
        objectFit="cover"
        className="img"
        src={Logo}
      />
    </>
  );
}
