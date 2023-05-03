import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import Project  from "../components/projects/Project";
import CreateJoin from "../components/joins/CreateJoin";
import Join from "../components/joins/Join";
import Layout from "../components/Layout";


function SingleProject(props) {
    console.log(useParams());
    let { projectId } = useParams();
    const project = useSWR(`/project/${projectId}/`, fetcher)
    const joins = useSWR(`/project/${projectId}/join/`, fetcher)

    return (
        <Layout hasNavigationBack>
            {project.data ? (
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <Project project={project.data} refresh={project.mutate} isSingleProject />
                        <CreateJoin projectId={project.data.id} refresh={joins.mutate} />
                        {joins.data && console.log(joins.data.results)}
                        {joins.data && joins.data.results && joins.data.results.map((join, index) => (
                            <Join
                                key={index}
                                projectId={project.data.id}
                                join={join}
                                refresh={joins.mutate}
                            />))}
                    </Col>
                </Row>
            ) : (
            <div>Loading...</div>
            )}
        </Layout>
    );
}

export default SingleProject;