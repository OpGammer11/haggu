"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const LOGO_WIDTH = 432;
const LOGO_HEIGHT = 122;
const k_SCALE = 3.1;

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <Image
                priority
                src="/eyelogo.svg"
                alt="logo"
                width={LOGO_WIDTH / k_SCALE}
                height={LOGO_HEIGHT / k_SCALE}
              />
            </div>
            <div className={styles.links}>
              <div className={styles.link}>
                <Link href="/">Docs</Link>
              </div>
              <div className={styles.link}>
                <Link href="/threed">Github</Link>
              </div>
            </div>
          </div>
          <div className={styles.hero}>
            <div className={styles.threed}>
              <Spline scene="https://prod.spline.design/LgYxjBYA3hz0em38/scene.splinecode" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
