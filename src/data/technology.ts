
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";

export interface TechnologyType {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export const technology: TechnologyType[] = [
  {
    id: 1,
    name: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!",
    image: vehicle,
  },
  {
    id: 2,
    name: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching or receiving spacecraft. Our spaceport is state-of-the-art, with facilities designed to handle modern space launches and ensure safety and efficiency for every mission.",
    image: spaceport,
  },
  {
    id: 3,
    name: "Space Capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere. Our capsule is where crew members will live and work while in space, designed with comfort and safety in mind.",
    image: capsule,
  },
];
