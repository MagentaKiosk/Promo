import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

import { ContactMe } from "../components/chip";

export default function Home() {
  return <>
    <div>
      <TestSection />
      <TestSection />
      <TestSection />
      <TestSection />
    </div>
    <ContactMe />
  </>
}


const TestSection = () => {


  return <section style={{
    background: "grey",
    minHeight: "100vh",
  }}>
    Section
  </section>
}