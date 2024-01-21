import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 0,
    name: "maia",
    animal: "dog",
    description: "awesome",
    breed: "beagle",
    images: [],
    city: "seattle",
    state: "wa",
  },
  () => {},
]);

export default AdoptedPetContext;
