import { Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import Project from "../components/projects/Project";
import CreateJoin from "../components/joins/CreateJoin";
import Layout from "../components/Layout";

function SingleProject() {
  let { projectId } = useParams();
  const project = useSWR(`/project/${projectId}/`, fetcher);
  const joins = useSWR(`/project/${projectId}/join/`, fetcher);

  if (!project.data) {
    return (
      <Layout hasNavigationBack>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Layout>
    );
  }

  return (
    <Layout hasNavigationBack>
      <Row className="justify-content-center">
        <Col sm={8}>
          <Project project={project.data} refresh={project.mutate} isSingleProject />
          <CreateJoin projectId={project.data.id} refresh={joins.mutate} />
        </Col>
      </Row>
    </Layout>
  );
}

export default SingleProject;