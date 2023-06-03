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
import ProfileDetails from "../components/profile/ProfileDetails";


export default function Profiles() {
    
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

                <Col sm={7}>
                    {/* <Row className="my-4">
                        <SearchBar />
                        <br /><br /><br /><br />
                    </Row> */}


                </Col>
                <Col sm={10} className="border rounded py-4 h-50">
                    
                    <div className="d-flex flex-column">
                        {profiles.data &&
                            profiles.data.results.map((profile, index) => (
                                <ProfileDetails key={index} user={profile} />
                            ))}
                    </div>
                </Col>
            </Row>
        </Layout>
    );

}