"use client";
import React from "react";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      className={styles.whatsappButton}
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
        className={styles.icon}
        aria-hidden="true" // oculta el SVG del lector
      >
        <path d="..." />
      </svg>
    </button>
  );
}
