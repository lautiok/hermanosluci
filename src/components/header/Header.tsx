"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Notification from "../notification/Notification";
import styles from "./header.module.css";
import { CircleX, Menu } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.notification}>
        <Notification />
      </div>
      <nav className={`${styles.nav} ${isSticky ? styles.fixed : ""}`}>
        <section className={styles.navLogo}>
          <Link href="/"><h1>Hermanos Luci</h1></Link>
        </section>

        {/* Botón Hamburguesa */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ?  <CircleX /> : <Menu /> }
        </button>

        {/* Links */}
        <ul className={menuOpen ? styles.show : ""}>
          <Link href="/#servicios" onClick={() => setMenuOpen(false)}>SERVICIOS</Link>
          <Link href="/#destinos" onClick={() => setMenuOpen(false)}>DESTINOS</Link>
          <Link href="/flota" onClick={() => setMenuOpen(false)}>VEHICULOS</Link>
          <Link href="/#clientes" onClick={() => setMenuOpen(false)}>CLIENTES</Link>
        </ul>

        {/* Botón Cotización en desktop */}
        <button className={styles.ctaDesktop}>
          <Link href="/cotizaciones">Cotiza tu viaje</Link>
        </button>
      </nav>
    </header>
  );
}
