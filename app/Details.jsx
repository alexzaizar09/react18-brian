import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();

  const petRequest = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (petRequest.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = petRequest.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed}
        </h2>
        <p>{pet.description}</p>
        <button>Adopt {pet.name}</button>
      </div>
    </div>
  );
};

export default Details;
