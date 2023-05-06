import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProfileDetails from "../components/profile/ProfileDetails";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { Row, Col } from "react-bootstrap";
import Project from "../components/projects/Project";


export default function Profile(props) {
    const { profileId } = useParams();
    const user = useSWR(`/user/${profileId}/`, fetcher);
    const projects = useSWR(`/project/?author__public_id=${profileId}`, fetcher, {
        refreshInterval: 20000
    })

    return (
        <Layout hasNavigationBack>
            <Row className="justify-content-evenly">
                <Col sm={9}>
                    <ProfileDetails user={user.data} />
                    {/* <div>
                        <Row className="my-4">
                            {projects.data?.results.map((project, index) => (
                                <Project
                                    key={index}
                                    project={project}
                                    refresh={projects.mutate}
                                />
                            ))}
                        </Row>
                    </div> */}
                </Col>
            </Row>
        </Layout>
    );
}