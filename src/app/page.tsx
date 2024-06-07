import Image from "next/image";
import ButtonComponents from "./components/ButtonComponent";
import ButtonGroup from "./components/ButtonGroup";
import ButtonGroupLinks from "./components/ButtonGroupLinks";
import ButtonGroupLink2 from "./components/ButtonGroupLink2";
import Example1 from "./components/Card/Example1";
import Example2 from "./components/Card/Example2";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <ButtonComponents /> */}
      {/* <ButtonGroup/> */}
      {/* <ButtonGroupLink2/> */}
      {/* <ButtonGroupLinks /> */}

      <Example2/>
    </div>
  );
}
