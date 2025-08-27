import Image from "next/image";
import Navber from "./Component/Navber";
import Announcement from "./Component/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navber />
    </div>
  );
}
