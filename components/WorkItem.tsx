import { useState } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { WorkDetails } from "./WorkDetails";

export function WorkItem({ workplace, items }: any) {
  const [expanded, setExpanded] = useState(false);

  const onLogoClicked = () => {
    setExpanded(!expanded);
  };

  const title = workplace.fields.title;
  const excerpt = workplace.fields.excerpt;
  const backgroundImage = workplace.fields.featuredImage;
  const color = workplace.fields.color;
  const logo = workplace.fields.logo;
  const logoWidth = workplace.fields.logoWidth;
  const link = workplace.fields.link;
  const position = workplace.fields.position;

  return (
    <article
      style={{
        backgroundColor: `#${color}`,
        zIndex: 45 - parseInt(workplace.fields.order),
        position: "relative",
      }}
    >
      <WorkDetails
        logo={logo}
        expanded={expanded}
        title={title}
        link={link}
        onClick={() => setExpanded(!expanded)}
        position={position}
        color={color}
        items={items}
      />
      <BackgroundImage image={backgroundImage} movedUp={expanded} />
    </article>
  );
}
