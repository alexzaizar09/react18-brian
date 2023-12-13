import { useState } from "react";
import fetchBreeds from "./fetchBreeds";
import PetsList from "./PetsList";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPets";

const ANIMALS = ["dog", "cat", "bird"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");

  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreeds,
  });
  const breeds = results?.data?.breeds ?? [];

  const res = useQuery({
    queryKey: ["requestSearch", requestParams],
    queryFn: fetchPets,
  });
  const pets = res?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
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
            onChange={(e) => setAnimal(e.target.value)}
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
