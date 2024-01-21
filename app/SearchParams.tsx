import { useState, useContext } from "react";
import fetchBreeds from "./fetchBreeds";
import PetsList from "./PetsList";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPets";
import AdoptedPetContext from "./AdoptedPetContext";
import { Animal } from "./APIResponsesTypes";

const ANIMALS: Animal[] = ["dog", "cat", "bird"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });

  const [animal, setAnimal] = useState("" as Animal);

  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreeds,
  });

  const breeds = results?.data?.breeds ?? [];

  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const res = useQuery({
    queryKey: ["search", requestParams],
    queryFn: fetchPets,
  });
  const pets = res?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            animal: formData.get("animal")?.toString() as Animal ?? "" as Animal,
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.currentTarget.value as Animal)}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed">
            <option value=""></option>
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <PetsList pets={pets} />
    </div>
  );
};

export default SearchParams;
