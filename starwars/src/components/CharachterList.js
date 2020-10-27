import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log("this", response.data);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Data didn't load", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character} />;
        })}
      </Row>
    </Container>
  );
}
