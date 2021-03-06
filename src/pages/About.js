import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import employee from "../image/employee.png";

const About = () =>
  <div>
    <Container style={{ marginTop: 1 }}>
      <Row>
        <Col size="md-12">
        <img className='profile-image' alt='icon' src={employee}/>
          <h1>Welcome To Employee Directory!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          This app will generate the table of random users from ramdomuserapi, when the user loads the Employees page, a table of employees should render. </p>
          <p>Sort the Employee List by First Name or by Employee Age</p>
          <p>Filter the List by typing First Name into the search Box</p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
