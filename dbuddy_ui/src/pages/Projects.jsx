import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Image } from "react-bootstrap";
import { fetcher } from "../helpers/axios";
import useSWR from 'swr'
import { getUser } from "../hooks/user.actions";
import CreateProject from "../components/projects/CreateProject";
import Project from "../components/projects/Project";
import ProfileCard from "../components/profile/ProfileCard";
import studentImage from '../images/student.png'
import instructorImage from '../images/instructor.png'
import coordinatorImage from '../images/coordinator.jpg'
import SearchBar from "../components/SearchBar";


function Projects() {
    const projects = useSWR("/project/", fetcher, {
        refreshInterval: 10000,
    });
    const profiles = useSWR("/user/?limit=5", fetcher)
    const user = getUser();
    if (!user) {
        return <div>Loading!</div>
    }
    return (
        <Layout>
            <Row className="justify-content-evenly">

                <Col sm={10}>
                    <Row className="my-4">
                        <SearchBar />
                        <br/><br/><br/><br/>
                    </Row>
                    <Row className="border rounded align-items-center">
                        {user.status === "0" && (
                    <Col className="flex-shrink-1">
                        <Image src={coordinatorImage} roundedCircle width={52} height={52} className="my-2"/>
                    </Col>
                )}

                {user.status === "1" && (
                <Col className="flex-shrink-1">
                        <Image src={instructorImage} roundedCircle width={52} height={52} className="my-2"/>
                    </Col>
                )}

                {user.status === "2" && (
                    <Col className="flex-shrink-1">
                        <Image src={studentImage} roundedCircle width={52} height={52} className="my-2"/>
                    </Col>
                )}
                        
                    <Col sm={10} className="flex-grow-1">
                            <CreateProject refresh={projects.mutate } />
                    </Col>
                    </Row>
                    <Row className='my-4'>
                        {projects.data?.results.map((project, index) => (
                            <Project key={ index } project={project} refresh={projects.mutate} />
                        ))}
                    </Row>
                </Col>

            </Row>
        </Layout>
    );
}

export default Projects;