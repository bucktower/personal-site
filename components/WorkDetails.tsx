import { useState } from "react";
import { Button } from "react-bootstrap";
import ReactCardCarousel from "react-card-carousel";

import { WorkDetailItem } from "./WorkDetailItem";

export function WorkDetails({
  logo,
  onClick,
  expanded,
  title,
  link,
  position,
  color,
  items,
}: any) {
  const [hover, setHover] = useState(false);

  // console.log(items);
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        bottom: expanded ? "65vh" : "10vh",
        height: expanded ? "10vh" : "auto",
        transition: "all .2s ease-in-out",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            maxHeight: 100,
            maxWidth: 300,
            transform: `${hover ? "scale(1.08)" : "scale(1)"}`,
            transition: "all .2s ease-in-out",
            cursor: "pointer",
          }}
          src={logo.fields.file.url}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => onClick()}
        />
      </div>
      {expanded && (
        <p className="text-light" style={{ marginTop: 10 }}>
          {position}
        </p>
      )}
      {expanded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "400px",
              width: "100",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "middle",
            }}
          >
            <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
              {items.map((entry) => {
                return <WorkDetailItem item={entry} color={color} />;
              })}
            </ReactCardCarousel>
          </div>
        </div>
      )}
      {expanded && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <Button variant="light" href={link} target="_blank">
            What is {title}?
          </Button>
        </div>
      )}
    </div>
  );
}
