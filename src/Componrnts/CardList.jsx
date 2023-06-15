import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cardlist.css";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img src={card.image} alt="" />
          </div>

          <h1>{card.title}</h1>
          <p>{card.price}</p>
          <p>{card.discription}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
