import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";

export function BackgroundImage({ image, movedUp, isFirst }: any) {
  console.log(image.fields.file.url);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // backgroundImage: `url(${image.fields.file.url})`,
        transition: "all .2s ease-in-out",
        transform: movedUp && "translateY(-75%) scale(0.8)",
        zIndex: -10000,
        position: "relative",
      }}
    >
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={`https:${image.fields.file.url}`}
        // alt={title}
      />
      {isFirst && !movedUp && (
        <div
          style={{
            position: "relative",
            top: "95vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsChevronDoubleDown size={24} color="white" />
        </div>
      )}
    </div>
  );
}
