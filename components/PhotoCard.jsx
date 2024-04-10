import Image from "next/image";
import Link from "next/Link";
export default function PhotoCard({ photo }) {
  return (
    <Link href={`photos/${photo?.id}`} className="group">
      <Image width={500} height={500} src={photo?.url} alt="photo" />

      <div className="title-container">
        <h4 className="title">{photo?.title}</h4>
      </div>
    </Link>
  );
}
