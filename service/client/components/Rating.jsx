import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key = {i}>
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffd700" : "#E0E0E0"}
              size={20}
              onClick={() => setRating(ratingValue)}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;