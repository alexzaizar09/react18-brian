import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./Pet";

const PetsList = ({ pets }: {pets: PetType[]}) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            id={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default PetsList;
