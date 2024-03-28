import React from "react";
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";
import productImg from "../images/img-2.jpg";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src={productImg} alt="the city view" />
      </section>
    </main>
  );
}
