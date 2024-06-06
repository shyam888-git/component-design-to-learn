import Image from "next/image";
import ButtonComponents from "./components/ButtonComponent";
import ButtonGroup from "./components/ButtonGroup";
import ButtonGroupLinks from "./components/ButtonGroupLinks";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <ButtonComponents /> */}
      {/* <ButtonGroup/> */}
      <ButtonGroupLinks />
    </div>
  );
}
