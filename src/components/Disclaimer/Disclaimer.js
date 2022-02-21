import styles from "../../../styles/Policy.module.scss";
import { Row, Container } from "react-bootstrap";

export default function Disclaimer() {
  return (
    <>
      <Container>
        <h2 className={styles.h2}>LAB196 LLC</h2>
        <h1 className={styles.h1}>DISCLAIMER</h1>
        <h4 className={styles.subtitle}>LAST UPDATED: December 16, 2021 </h4>
        <Row>
          <p className={styles.p}>
            The data or information provided herein by LABS196 LLC (“we”, “us”,
            or “our”) on this site (the “Site”) is for general use for any user.
            All data on the Site is given in confidence and shall be considered
            confidential, be that as it may, we make no representation or
            guarantee of any kind, express, implied, or inferred, with respect
            to the precision, availability, ampleness, legitimacy, validity,
            dependability, completeness, quality, accessibility, or completeness
            of any data on the Site. Nothing herein shall be considered a legal
            contract or legally binding instrument. We shall not have any
            liability under any circumstances for the information provided
            herein. Use the information herein at your own risk.
          </p>
        </Row>
      </Container>
    </>
  );
}
