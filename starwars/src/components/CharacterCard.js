import React from "react";
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
        <CardTitle>{props.character.name} </CardTitle>
        <CardBody>
          <CardText>Birth Year: {props.character.birth_year}</CardText>
          <CardText>Height: {props.character.height}cm</CardText>
          <CardText>Weight: {props.character.mass}Kilograms</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;
