import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import studentImage from '../../images/student.png'
import instructorImage from '../../images/instructor.png'
import coordinatorImage from '../../images/coordinator.jpg'


export default function ProfileCard(props) {
    const navigate = useNavigate();
    const { user } = props;

    const handleNavigateToProfile = () => {
        navigate(`/profile/${user.id}/`)
    }

    return (
        
        <Card className="border-0 p-2">
            <div className="d-flex ">
            {user.status === "0" && (
                <Image
                    src={coordinatorImage}
                    roundedCircle
                    width={48}
                    height={48}
                    className="my-3 border border-primary border-2"
                />
                )}

                {user.status === "1" && (
                <Image
                    src={instructorImage}
                    roundedCircle
                    width={48}
                    height={48}
                    className="my-3 border border-primary border-2"
                />
                )}

                {user.status === "2" && (
                <Image
                    src={studentImage}
                    roundedCircle
                    width={48}
                    height={48}
                    className="my-3 border border-primary border-2"
                />
                )}

                <Card.Body>
                    <Card.Title className="fs-6">{user.username}</Card.Title>
                    <Button variant="primary"
                        onClick={handleNavigateToProfile}>
                        See profile
                    </Button>
                </Card.Body>
            </div>
        </Card>
        
    );
}