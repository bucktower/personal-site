export function BackgroundImage({ image, movedUp }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image.fields.file.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s",
        transform: movedUp && "translateY(-75%) scale(0.8)",
      }}
    />
  );
}
