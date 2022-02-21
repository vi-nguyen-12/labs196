import styles from "../../../styles/Rewards.module.scss";
import btnStyles from "../../../styles/Buttons.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { mentors } from "../../data";

export default function Mentors() {
  return (
    <>
      <Container className={styles.mentorSection}>
        {/* <hr /> */}

        {/* <Row>
          <Col className={styles.mentorSubBanner} md={6}>
            <Image
              src="/images/LabsFloor8.png"
              width="100%"
              alt="blue people"
            />
          </Col>
          <Col className={styles.mentorSubHeader}>
            <h1>Learn from the right people when you need them</h1>
            <h2>
              Consult our mentors if you find yourself in a tricky situation.
            </h2>
            <p>
              Mentors are available for consultations to guide entrepreneurs.
              Need help with choosing software? Consult our technology mentor.
              Need help with choosing the right marketing agency? You’ll have an
              expert to get a second opinion.
            </p>
          </Col>
        </Row> */}
        <Row className={styles.aboutMentors} id="about-mentors">
          <Col xs={12} md={6} className={styles.meetMentors}>
            <h1>About our mentors</h1>
            <h2>Meet our mentors</h2>
            <p>
              When you become a LABS196 startup, you have access to our network
              of mentors and consultations. Many of our mentors are from our
              extensive network of partners and have years of experience in
              various industries, including technology, marketing, human
              resources, compliance, leadership development, and more.
            </p>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
        {mentors.map((mentor) => (
          <Row key={mentor.id}>
            <Col
              xs={7}
              md={4}
              lg={3}
              className="align-self-top justify-content-center text-center p-4"
            >
              <Image
                roundedCircle
                rounded
                // src="/images/team/andy_chopra-white.png"
                src={mentor.img}
                width="100%"
                className={styles.team}
                alt={mentor.name}
              />
              <h3 className="pt-3">
                {mentor.name}{" "}
                <a
                  href={mentor.linkedln}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </h3>
              <h4>{mentor.department}</h4>
            </Col>
            <Col xs={12} md={8} className={styles.detailSection}>
              <h3> {mentor.position} </h3>
              <p>{mentor.about}</p>
              <Row>
                <Col xs={12} md={3} className={styles.detail_title}>
                  <p>Qualifications</p>
                </Col>
                <Col xs={12} md={9} className={styles.content}>
                  {mentor.qualifications.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3} className={styles.detail_title}>
                  <p>Experience</p>
                </Col>
                <Col xs={12} md={9} className={styles.content}>
                  {mentor.experience.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3} className={styles.detail_title}>
                  <p>Area of expertise</p>
                </Col>
                <Col xs={12} md={9} className={styles.content}>
                  {mentor.areas_of_expertise.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        ))}

        <Row className={styles.doubleSubheader}>
          <Col xs={12} md={6}>
            <h1>Become a LABS196 mentor</h1>
            <p>
              Great people often point to others who helped them along the way.
              If you would like to become a mentor and support LABS196 startups
              with your experience and knowledge, please reach out to us at
              contact@labs196.com.
            </p>

            <Link href="mailto:andy@labs196.com" scroll={false}>
              <a className={btnStyles.moreInfoBtn}>Email Us</a>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <h1>Access the LABS196 mentor network</h1>
            <p>
              Become a LABS196 startup by applying to our accelerator program
              here to access the mentor network we’ve created.
            </p>
            <Link href="/programs#accelerator-form" scroll={false}>
              <a className={btnStyles.moreInfoBtn}>Learn More</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
