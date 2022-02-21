import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/LiveEvents.module.scss";

function UpcomingEvents() {
    return (
        <Container className={styles.internshipContainer}>
            <Row style={{ display: "flex", textAlign: "center" }}>
                <h1 className={styles.title}>Upcoming Events</h1>
            </Row>

            <Row>

                <img src="./images/Webinar.png" alt="Webinar" height="auto" width="auto\9" maxWidth="100%" />

            </Row>
        </Container>
    );
}


export default UpcomingEvents