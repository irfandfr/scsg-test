"use client";

import { useEffect, useRef, useState } from "react";
import AdminCard from "../AdminCard/AdminCard";

import styles from './modal.module.scss'

interface ModalProp {
  show: boolean;
  children: React.ReactNode
  closeModal: () => void
}

export default function Modal({ show, children, closeModal }: ModalProp) {
  const cardRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', listener)
  }, [show]);

  function listener(ev:MouseEvent){
    if(ev.target === cardRef.current){
      window.removeEventListener('click', listener)
      cleanModal()
    }
  }

  function cleanModal(){
    closeModal()
  }
  if(show){
    return (
      <dialog className={styles.modalContainer} ref={cardRef}>
        <AdminCard className={styles.modalCard}>
          <button className={styles.closeBtn} onClick={cleanModal}>❌</button>
          {children}
        </AdminCard>
      </dialog>
    );
  }else{
    return(
      <></>
    )
  }
}
