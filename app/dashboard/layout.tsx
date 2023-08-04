"use client";
import styles from "./dashboard.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.nav}>
          <Link href="/dashboard">Dash</Link>
          <Link href="/dashboard/profile">Profile</Link>
          <Link href="/dashboard/payments">Payments</Link>
        </div>

        <section className={styles.content}>{children}</section>
      </main>
    </>
  );
}
