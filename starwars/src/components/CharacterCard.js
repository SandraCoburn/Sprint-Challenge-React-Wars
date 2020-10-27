import React from "react";
import { MyCardColors, MyCardTitle } from "./StarWarsStyles.js";
import {
  Card,
  CardBody,
  Col,
  CardHeader,
  CardText,
  CardTitle
} from "reactstrap";

const CharacterCard = props => {
  console.log("this", props);
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardHeader> Name: </CardHeader>
        <MyCardTitle>{props.character.name} </MyCardTitle>
        <CardBody>
          <MyCardColors>Birth Year: {props.character.birth_year}</MyCardColors>
          <MyCardColors>Height: {props.character.height}cm</MyCardColors>
          <MyCardColors>Weight: {props.character.mass}Kilograms</MyCardColors>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;
