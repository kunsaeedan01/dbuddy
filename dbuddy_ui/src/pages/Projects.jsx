import React, { useState } from "react";
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
import axiosService from "../helpers/axios";


function Projects() {
    const [searchResults, setSearchResults] = useState(null);
    const projects = useSWR("/project/", fetcher, {
        refreshInterval: 3000,
    });
    const user = getUser();

    const handleSearch = async (searchText) => {
      try {
        const response = await axiosService.get("/project/search/", {
          params: {
            search: searchText,
          },
        });
        setSearchResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
        return <div>Loading!</div>
    }

    return (
        <Layout>
            <Row className="justify-content-evenly">

                <Col sm={10}>
                    {/* <Row className="my-4">
                        <SearchBar onSearch={handleSearch} />
                        <br/><br/><br/><br/>
                    </Row> */}
                    <Row className="border rounded align-items-center">
                        {/* Render profile image based on user status */}
                        {/* ... */}
                    </Row>
                    <Row className='my-4'>
                        {searchResults
                          ? searchResults.map((project, index) => (
                              <Project key={index} project={project} refresh={projects.mutate} />
                            ))
                          : projects.data?.results.map((project, index) => (
                              <Project key={index} project={project} refresh={projects.mutate} />
                            ))
                        }
                    </Row>
                </Col>

            </Row>
        </Layout>
    );
}

export default Projects;