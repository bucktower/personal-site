import { Button } from "react-bootstrap";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import {
  SiDribbble,
  SiGithub,
  SiSnapchat,
  SiSoundcloud,
  SiSpotify,
  SiStrava,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";
import { GiBirdHouse, GiGiantSquid } from "react-icons/gi";
import { BiMessage, BiWorld } from "react-icons/bi";
import { MdWork } from "react-icons/md";

function MenuButton({ title, link, icon }: any) {
  return (
    <Button href={link} style={{ margin: 10 }} variant="light">
      {icon} {title}
    </Button>
  );
}

export function Menu({ menuVisible }: any) {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        backgroundColor: "#000000",
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#FFFFFF",
      }}
    >
      <h1>Buck Tower</h1>
      <h5>Mad lad</h5>
      <div style={{ display: "flex" }}>
        <MenuButton
          title="Swashbuckle Studios"
          link="https://swashbucklestudios.com/"
          icon={<GiGiantSquid />}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: 700,
          maxWidth: "90%",
        }}
      >
        <MenuButton
          title="Instagram"
          link="https://www.instagram.com/bucktower/"
          icon={<FaInstagram />}
        />
        <MenuButton
          title="Twitter"
          link="https://twitter.com/bucktower"
          icon={<FaTwitter />}
        />
        <MenuButton
          title="Tiktok"
          link="https://www.tiktok.com/@bucktower"
          icon={<SiTiktok />}
        />
        <MenuButton
          title="Github"
          link="https://github.com/bucktower"
          icon={<SiGithub />}
        />
        <MenuButton
          title="Youtube"
          link="https://www.youtube.com/channel/UCH3zvJ_DqFoNCBJoqQ9Hq5w"
          icon={<SiYoutube />}
        />
        <MenuButton
          title="Resume"
          link="https://bucktower.net/resume"
          icon={<MdWork />}
        />
        <MenuButton
          title="Buck Tower in an Hour Playlist"
          link="https://open.spotify.com/playlist/7GCHvOJnQTFiVNLVWMBIGt?si=EnfbVXnwQVaUGd3qGQ_TFw"
          icon={<SiSpotify />}
        />
        <MenuButton
          title="Places I've Been"
          link="https://www.google.com/maps/d/viewer?mid=1vFW6RTZZd-bxhY638mS1IZlwzgI&usp=sharing"
          icon={<BiWorld />}
        />
        <MenuButton
          title="Soundcloud"
          link="https://soundcloud.com/bucktower"
          icon={<SiSoundcloud />}
        />
        <MenuButton
          title="Snapchat"
          link="https://www.snapchat.com/add/bucktower"
          icon={<SiSnapchat />}
        />
        <MenuButton
          title="Dribbble"
          link="https://dribbble.com/bucktower"
          icon={<SiDribbble />}
        />
        <MenuButton
          title="Clubhouse"
          link="https://www.joinclubhouse.com/@bucktower"
          icon={<GiBirdHouse />}
        />
        <MenuButton
          title="Strava"
          link="https://strava.app.link/UJljUeHHNeb"
          icon={<SiStrava />}
        />
      </div>
    </div>
  );
}
