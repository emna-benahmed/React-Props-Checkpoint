import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "@restart/ui/esm/Button";

function Profile(props) {
  
  function handleName() {
    alert("the user is : " + props.FullName);
  }
  return <div>
      <Container>
          <Row>
              <Col>{props.FullName}</Col>
              <Col md={8}>{props.Bio}</Col>
              <Col>{props.Profession}</Col>
          </Row>
          <Row>
              <Col md={8}> <img src={props.children} alt="nothing"/></Col>
          </Row>
          <Row><Button onClick={handleName}> Click me </Button></Row>
      </Container>

  </div>;
}
Profile.propTypes ={
  FullName:PropTypes.string,
  Bio:PropTypes.string,
  Profession:PropTypes.string,
}
Profile.defaultProps={
  FullName:"Emna",
  Bio:"something intersting",
  Profession:"Engineer"
}
export default Profile;