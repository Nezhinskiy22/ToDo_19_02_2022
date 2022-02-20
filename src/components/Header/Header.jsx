import React from "react";
import { Col, Row } from "react-bootstrap";
import s from "./Header.module.css";

const Header = () => (
  <Row>
    <Col>
      <div className={s.root}>ToDo List</div>
    </Col>
  </Row>
);

export default Header;
