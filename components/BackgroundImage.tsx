import Image from "next/image";

export function BackgroundImage({ image, movedUp }: any) {
  console.log(image.fields.file.url);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // backgroundImage: `url(${image.fields.file.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all .2s ease-in-out",
        transform: movedUp && "translateY(-75%) scale(0.8)",
        zIndex: -10000,
        position: "relative",
      }}
    >
      <Image
        layout="fill"
        className="object-center object-cover"
        src={`https:${image.fields.file.url}`}
        // alt={title}
      />
    </div>
  );
}
