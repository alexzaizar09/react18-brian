import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            data-index={index}
            onClick={(e) => {
              setActive(+e.target.dataset.index);
            }}
            key={photo}
            src={photo}
            alt="animal thumbnail"
            className={index === active ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
