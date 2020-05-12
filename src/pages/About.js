import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Employee Directory!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          This app will generate the table of random users from ramdomuserapi, when the user loads the Employees page, a table of employees should render. </p>
          The user should be able to:


          <p>User is able to Sort the table by clicking on the Name column one category</p>


          <p>User can also flter and narrow the search by entring into the search box</p>
         
          
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
