import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";

export default function About() {
  return (
    <div className={styles.container}>
      <Header active="Projects" projActive="cryptography" />

      <main className={styles.main}>
        <p>{"\ufffd\ufffd\u001b]l\ufffd۪\ufffdI\ufffd+9\u000e/"}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/IyobedZekarias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{" "}
          <span className={styles.logo}>
            <Image src="/Iyobed.svg" alt="Vercel Logo" width={76} height={36} />
          </span>
        </a>
      </footer>
    </div>
  );
}
