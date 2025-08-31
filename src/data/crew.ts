import commander from '../assets/Crew/image-douglas-hurley.png';
import specialist from '../assets/Crew/image-mark-shuttleworth.png';
import pilot from '../assets/Crew/image-victor-glover.png';
import flightEngineer from '../assets/Crew/image-anousheh-ansari.png';



export type CrewMember = {
  role: string;
  name: string;
  image: string;
  bio: string;
};

export const crew: CrewMember[] = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    image: commander,
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    image: specialist,
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist.",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    image: pilot,
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64.",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    image: flightEngineer,
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari became the first Iranian in space and the first self-funded woman to fly to the ISS.",
  },
];
