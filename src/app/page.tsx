import Image from "next/image";
import ButtonComponents from "./components/ButtonComponent";
import ButtonGroup from "./components/ButtonGroup";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <ButtonComponents /> */}
      <ButtonGroup/>
    </div>
  );
}
