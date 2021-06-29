import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Person extends Component {
  Profile = {
    FullName: "nejah neji",
    Bio: "i love coding",
    Profession: "developpeur",
    imgSrc: "/devel.jpg",
  };
  render() {
    return (
      <div className="Cardi">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.Profile.imgSrc} alt="" style={{borderBottom :"solid 2px black"}} />
          <Card.Body style={{backgroundColor : "aqua"}} >
            <h1>{this.Profile.FullName}</h1>
            <Card.Text>{this.Profile.Bio}.</Card.Text>
            <h3>{this.Profile.Profession}</h3>
          </Card.Body>
        </Card>
      </div>
    );
  }
}



