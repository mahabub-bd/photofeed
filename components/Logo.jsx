import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../public/lws_logo.png";
export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src={LogoIcon}
        alt="Lws"
      />
    </Link>
  );
}
