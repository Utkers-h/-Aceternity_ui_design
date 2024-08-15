import Image from "next/image";
import Navbar from "./components/Navbar";
import { OrbitingCirclesDemo } from "./components/ui/orbiting_circles";
import { StickyScrollReveal } from "./components/ui/Sticky_roll";
export default function Home() {
  return (
    <>
      
      <Navbar className="w-full "/>
      <div className="flex justify-center items-center h-screen">
        <OrbitingCirclesDemo/>
        
      </div>
      <StickyScrollReveal/>
      
    </>
  );
}
