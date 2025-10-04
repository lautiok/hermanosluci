"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./clientes.module.css";

export default function Clientes() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    { src: "/cliente-uno.jpeg", alt: "mendoza" },
    { src: "/cliente-dos.jpeg", alt: "rosario" },
    { src: "/cliente-tres.jpeg", alt: "buenos aires" },
    { src: "/cliente-cuatro.jpeg", alt: "san juan" },
    { src: "/cliente-cinco.webp", alt: "misiones" },
    { src: "/cliente-seis.jpeg", alt: "mendoza" },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    // Prevenir scroll en el body cuando el modal está abierto
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restaurar scroll en el body
    document.body.style.overflow = "auto";
  };

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  return (
    <>
      <section id="clientes" className={styles.clientes}>
        <h2>Clientes</h2>

        <div className={styles.galery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galeryImg}
              onClick={() => openModal(image.src)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

      {mounted &&
        selectedImage &&
        createPortal(
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              <img src={selectedImage} alt="Imagen ampliada" onClick={closeModal} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
