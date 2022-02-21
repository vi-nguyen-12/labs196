import styles from "../../../styles/HomePage.module.scss";
import btnStyles from "../../../styles/Buttons.module.scss";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";


export default function BottomSection() {
  return (
    <section className={styles.bottom}>
      <Container>
        <Row>
          <Col md={4} className={styles.headingTitle}>
            <h1>Enroll now to accelerate your startup</h1>
            <h5>
              Participating startups will access $25,000 to $1 million in
              funding based on specific milestones. 
            </h5>
          </Col>
          <Col xs={12} md={8} className={styles.headingText}>
            <p>
              Additionally, there is the possibility of more funding from our
              global investor network, as well as mentorship from international
              leaders and service providers within key industries, including
              legal, IT, accounting, human resources, public relations, and
              more.
            </p>
            <p>
              Each startup will send between 1-3 leadership team members for the
              program, who will join us in Sugar Land, Texas, USA. Up to 80
              startups are in each cohort and subsequent cohorts will begin
              every month thereafter.
            </p>
            <Link href="/programs#accelerator-form" scroll={false} >
            <a className={btnStyles.applyBtn}>Apply Now<BiRightArrowAlt size={25}/></a> 
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
