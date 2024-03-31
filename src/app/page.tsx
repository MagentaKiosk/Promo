import Image from "next/image";
import styles from "./page.module.css";
import React, { Suspense } from "react";

import { ContactMe } from "../components/chip";

export default function Home() {
  return <>
    <div>
      <TestSection />
      <TestSection />
      <TestSection />
      <TestSection />
    </div>

    <Suspense fallback={<>Loading contact info...</>}>
      <ContactMe />
    </Suspense>
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