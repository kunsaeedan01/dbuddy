import React from "react";
import { Card } from "react-bootstrap";
import member1 from '../images/member1.jpg';
import member2 from '../images/member2.jpg';
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout hasNavigationBack>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className="col-lg-6">
            <Card className="mb-3">
              <div className="d-flex justify-content-center align-items-center mt-3" style={{ height: '200px' }}>
                <Card.Img variant="top" src={member1} className="rounded-circle" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              </div>
              <Card.Body>
                <Card.Title className="text-center mb-4" style={{ fontSize: '24px' }}>
                  Nursat Abdullayev
                </Card.Title>
                <Card.Text className="text-center" style={{ fontSize: '16px' }}>
                  Front-end developer
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6">
            <Card className="mb-3">
              <div className="d-flex justify-content-center align-items-center mt-3" style={{ height: '200px' }}>
                <Card.Img variant="top" src={member2} className="rounded-circle" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              </div>
              <Card.Body>
                <Card.Title className="text-center mb-4" style={{ fontSize: '24px' }}>
                  Rakhat Yerezhepov
                </Card.Title>
                <Card.Text className="text-center" style={{ fontSize: '16px' }}>
                  Back-end developer
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}