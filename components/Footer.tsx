import { Button } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

function FooterButton({ title, link, icon }: any) {
  return (
    <Button href={link} style={{ margin: 10 }} variant="light">
      {icon} {title}
    </Button>
  );
}

export function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        backgroundColor: "#000000",
      }}
    >
      <FooterButton
        title="Instagram"
        link="https://www.instagram.com/bucktower/"
        icon={<FaInstagram />}
      />
      <FooterButton
        title="Twitter"
        link="https://twitter.com/bucktower"
        icon={<FaTwitter />}
      />
      <FooterButton
        title="Tiktok"
        link="https://www.tiktok.com/@bucktower"
        icon={<SiTiktok />}
      />
    </div>
  );
}
