import React from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../hooks/user.actions";


export default function ProfileDetails(props) {

    const statusMap = {
        "0": "Coordinator",
        "1": "Instructor",
        "2": "Student",
    };
    
    const facultyMap = {
        "SE": "Software engineering",
        "BDA": "Big Data Analysis", 
        "IT": "Computer Science", 
        "MT": "Media Technologies", 
        "IA": "Industrial Automation",
        "TS": "Telecommunication Systems",
        "CS": "Cybersecurity",
        "DJ": "Digital Journalism", 
        "ITM": "IT management"
    }

    const genderMap = {
        "M": "Male", 
        "F": "Female"
    }

    const navigate = useNavigate();
    const { user } = props;

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="d-flex flex-row border-bottom p-5">
                <Image
                    src={user.avatar}
                    roundedCircle
                    width={120}
                    height={120}
                    className="me-5 border border-primary border-2"
                />
                <div className="d-flex flex-column justify-content-start align-self-center mt-2">
                    <p className="fs-3 m-0"><strong>{user.first_name} { user.last_name}</strong></p>
                    <p className="fs-5">{user.bio ? user.bio : "(No bio.)"}</p>
                    <p><strong>Status: </strong>{ statusMap[user.status]}</p>
                    <p><strong>Faculty: </strong>{facultyMap[user.faculty]}</p>
                    {user.status !== "Instructor" && (<p><strong>Group: </strong>{ user.group }</p>)}
                    {user.id === getUser().id && (
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-25"
                            onClick={() =>
                            navigate(`/profile/${user.id}/edit/`)}>Edit
                        </Button>
                    )}
                   
                </div>
            </div>
        </div>
    );
}