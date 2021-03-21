import { BsList } from "react-icons/bs";
import { useState } from "react";

export function MenuButton({ menuVisible, setMenuVisible }: any) {
  const [hover, setHover] = useState(false);

  const c = menuVisible ? 255 : 0;

  return (
    <div
      style={{
        position: "fixed",
        top: 25,
        right: 25,
        zIndex: 50,
        color: "white",
        backgroundColor: hover
          ? `rgb(${c}, ${c}, ${c}, 0.7)`
          : `rgb(${c}, ${c}, ${c}, 0.5)`,
        padding: "10px 20px",
        borderRadius: 2000,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .2s ease-in-out",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setMenuVisible(!menuVisible)}
    >
      <span style={{ marginRight: 10 }}>MENU</span>
      <BsList />
    </div>
  );
}
