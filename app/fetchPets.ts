import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponsesTypes";

const fetchPets: QueryFunction<PetAPIResponse, ["search", {
  animal: string;
  location: string;
  breed: string;
}]> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];

  const response = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!response.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return response.json();
}

export default fetchPets;
