import Image from "next/image";
import Navber from "./Component/Navber";
import Announcement from "./Component/Announcement";
import Hiro from "./Component/Hiro";
import Collection from "./Component/Collection";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navber />
      <Hiro />
      <Collection />
    </div>
  );
}
