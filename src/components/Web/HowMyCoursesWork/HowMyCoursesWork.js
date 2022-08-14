import React from "react";
import { Row, Col, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>Como funcionan mis cursos?</h2>
        <h3>
          Cada curso cuenta con contenido bajo la web de Udemy, activa las 24
          horas al dia de los 365 dias del año.
        </h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="clock-circle"
              title="Cursos y Clases"
              description="Cursos de entre 10 y 30 horas y cada clase delcurso con una duracion de maximo 15 minutos."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Acceso 24/7"
              description="Accede a los cursos en cualquier momento. desde cualquier lugar sin importar dia y hora."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Aprendizaje Colaborativo"
              description="Aprende de los demas dejando tus dudas para que profesores y compañeros te ayuden."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Mejora tu perfil"
              description="Aprende y mejora tu perfil para mantenerte informado."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dolar"
              title="Precios bajos"
              description="Obten el curso que necesitas por solo 9.99"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Certificado de finalizacion"
              description="Al completar tu curso recibiras una certificacion."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Meta title={title} description={description} />
    </Card>
  );
}
