import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../../../styles/Footer.module.scss";
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <Nav variant="custom" className={styles.footer}>
        <Container className={styles.linksContainer}>
          <Row className="">
            <Col xs={12} lg={3} className="align-self-center">
              <Link href="/" passHref={true}>
                <Navbar.Brand>
                  <Image
                    src="/images/labs.svg"
                    className={styles.brandLogo}
                    alt="Labs196 logo"
                  />{" "}
                </Navbar.Brand>
              </Link>
              {/* <Row>
                <Col xs={6} className={styles.singapore}>
                  <h5>Singapore Office</h5>
                  <span>20A Tanjong Pagar Road</span>
                  <br />
                  <span>Singapore 088443</span>
                </Col>
                <Col xs={6}>
                  <h5>USA R&D Office</h5>
                  <span>2150 Town Square Place, Suite 200</span>
                  <br />
                  <span>Sugar Land, Texas 77479</span>
                </Col>
              </Row> */}
            </Col>
            <Col xs={12} lg="auto" className={styles.section}>
              <Navbar.Text className={styles.title}>LINKS</Navbar.Text>
              <Row>
                <Col xs={5} lg="auto">
                  <Nav className="flex-column">
                    <Link href="/" passHref={true} className={styles.link}>
                      Home
                    </Link>
                    <Link
                      href="/programs/accelerator"
                      passHref={true}
                      className={styles.link}
                    >
                      Accelerator program
                    </Link>
                    <Link
                      href="/programs/internship"
                      passHref={true}
                      className={styles.link}
                    >
                      Internship program
                    </Link>
                  </Nav>
                </Col>
                <Col lg="auto">
                  <Nav className="flex-column">
                    <Link
                      href="/rewards"
                      passHref={true}
                      className={styles.link}
                    >
                      Perks
                    </Link>
                    <Link href="/about" passHref={true} className={styles.link}>
                      About Us
                    </Link>
                    <Link
                      href="/mentor"
                      passHref={true}
                      className={styles.link}
                    >
                      Mentors
                    </Link>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4} className={styles.section}>
              <Nav className="flex-column">
                <Navbar.Text className={styles.title}>CONTACT US</Navbar.Text>
                <a href="mailto:contact@labs196.com" passHref={true}>
                  {" "}
                  contact@labs196.com
                </a>
              </Nav>
            </Col>
            <Col xs={12} lg={2} className={styles.section}>
              <Navbar.Text className={styles.title}>FOLLOW US</Navbar.Text>
              <Nav className="flex-row">
                <a
                  href="https://www.twitter.com"
                  className={styles.socials}
                  passHref={true}
                >
                  <IoLogoTwitter />
                </a>
                <a
                  href="https://www.facebook.com"
                  className={styles.socials}
                  passHref={true}
                >
                  <IoLogoFacebook />
                </a>
                <a
                  href="https://www.instagram.com"
                  className={styles.socials}
                  passHref={true}
                >
                  <IoLogoInstagram />
                </a>
              </Nav>
              <Navbar.Text className={styles.license}>
                Labs196&trade; 2021
              </Navbar.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6} lg={3} className={styles.singapore}>
              <h5>Singapore Office</h5>
              <span>20A Tanjong Pagar Road</span>
              <br />
              <span>Singapore 088443</span>
            </Col>
            <Col xs={6} lg={3}>
              <h5>USA R&D Office</h5>
              <span>2150 Town Square Place, Suite 200</span>
              <br />
              <span>Sugar Land, Texas 77479</span>
            </Col>
            <Col lg="auto">
              <Row className={styles.license}>Labs196&trade; 2021</Row>
              <Nav>
                <Link href="/privacy" passHref={true}>
                  PRIVACY POLICY
                </Link>
                <Link href="/cookie" passHref={true}>
                  COOKIE POLICY
                </Link>
                <Link href="/disclaimer" passHref={true}>
                  DISCLAIMER
                </Link>
                <Link href="/terms" passHref={true}>
                  TERMS OF USE
                </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  );
}
