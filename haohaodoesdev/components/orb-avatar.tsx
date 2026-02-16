import Image from "next/image";
import Orb from "./orb";

export default function OrbAvatar() {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      <div className="absolute inset-0 scale-110">
        <Orb
          hue={400}
          hoverIntensity={0.4}
          rotateOnHover={true}
          backgroundColor="transparent"
        />
      </div>
      <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-xl">
        <Image
          src="/rerererere.jpeg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
