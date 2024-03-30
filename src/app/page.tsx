import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return <>
    <TestSection />
    <TestSection />
    <TestSection />
    <TestSection />
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