import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/no-avatar.png";

import "./ReviewCourses.scss";

export default function ReviewCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los +35 mil estudiantes que estan aprendiendo con mis
            cursos.
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamente como funciona react."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="David Ramiro"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Si te gustan los cursos que profundizan en la materia, te lo recomiendo."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Valentina Rubio"
                subtitle="Alumna de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamente como funciona react."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Marc Perez"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Empece el curso sin saber nada de React Native."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Jesus Cruz"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Me ha parecido un muy buen curso, las explicaciones muy claras. "
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Francisco Garcia"
                subtitle="Alumna de Udemy"
                avatar={AvatarPersona}
                review="Aprendes todo lo que promete el video."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
