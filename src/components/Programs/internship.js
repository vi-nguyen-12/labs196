import styles from '../../../styles/Programs.module.scss'
import { Row, Col } from 'react-bootstrap';

export default function internship() {
    return (
        <section className={styles.internshipInfo}>
            <h4 className={styles.sectionTitle}>Internship Program</h4>
            <hr />
            <Row className={styles.hero}>
                <Col md={4}>
                    <h2 className="pb-4">LABS196 Internship Program</h2>
                    <h4 className={styles.styledText}>We’re looking for you!</h4>
                </Col>
                <Col md={8}>
                    <p>
                        We connect companies with bright and motivated interns from top-tier institutions and colleges in the United States. Interns get the opportunity to learn from seasoned entrepreneurs and enhance their IT, marketing, and business operations knowledge. Exceptional interns may be awarded full-time positions after completing their internship. Interns are invited to work in LABS196’s innovative facility located in the center of Sugar Land Town Square.
                    </p>
                </Col>
            </Row>

            <Row className="py-4">
                <Col md={4} >
                    <h1>Eligibility Criteria</h1>
                    <h4 className={styles.styledText}>To qualify, a candidate must be or have:</h4>
                </Col>
                <Col md={4}>
                    <ul>
                        <li>
                            Currently a college junior or senior studying marketing, communication, finance, journalism, or a related discipline.
                        </li>
                        <li>
                            Strong overall academic record.
                        </li>
                        <li>
                            Desire to work in a fast-paced technology-focused business.
                        </li>
                        <li>
                            Excellent interpersonal, written and verbal communication skills.
                        </li>
                        <li>
                            Flexible hours to work.
                        </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul>
                        <li>
                            Fluent reading, speaking, and writing in English. Knowledge of an additional language is a plus.
                        </li>
                        <li>
                            Demonstrated examples of achieving goals, teamwork, and problem-solving.
                        </li>
                        <li>
                            Effective organization and time management skills with the ability to work under pressure and adhere to project deadlines.
                        </li>
                        <li>
                            Integrity within a professional environment.
                        </li>
                        <li>
                            Work authorization in the US. Currently, we do not sponsor any work visas.
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <h1 id="internship-form">Apply to join</h1>
                <iframe frameBorder="0" style={{ height: "1150px", width: "100%", border: "none" }} src='https://forms.zohopublic.com/outreach4/form/InternshipprogramforLABS196/formperma/TZQAXEDaivab0jmTTCXKqakjoRpjSuATNq9FRfzt6Qc'></iframe>
            </Row>
        </section>
    )
}