'use client'

import { useState } from 'react';
import Button from '../Button/Button';
import ImageIcon from '../icons/ImageIcon/ImageIcon';
import Modal from '../Modal/Modal';
import TextForm from '../TextForm/TextForm';
import { isValidURL } from '../utils/utils';
import styles from './imageupload.module.scss'

interface ImageUploadProp{
  value?: string;
  onChange?: (link : string) => void;
}

export default function ImageUpload({value, onChange} : ImageUploadProp){
  const [activeLink, setActive] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [imageLink, setImageLink] = useState({link:'', error:''})

  function getImageLink(){
    if(!!value){
      return value
    }else{
      return activeLink
    }
  }

  function setNewImage(){
    if(isValidURL(imageLink.link)){
      onChange && onChange(imageLink.link)
      setActive(imageLink.link)
      setImageLink(p => {return{...p, error: ''}})
      setModalOpen(false)
    }else{
      setImageLink(p => {return{...p, error: 'Not a valid URL!'}})
    }
  }
  return(
    <div className={styles.imageUploadContainer}>
      <Modal show={modalOpen} closeModal={() => setModalOpen(false)}>
        <div className={styles.uploadModal}>
          <label>Upload Image Link</label>
          <TextForm value={imageLink.link} error={imageLink.error} onChange={(e) => setImageLink(p => {return{...p, link: e.target.value}})}/>
          <Button text='Upload Image' onClick={setNewImage}/> 
        </div>
      </Modal>
      <button className={styles.imagePreview} onClick={() => setModalOpen(true)}>
        {
          getImageLink() !== '' ? <div className={styles.image} style={{backgroundImage: `url(${imageLink.link})`}}></div> : <ImageIcon />
        }
        <span className={styles.text}>Upload image here</span>
      </button>
    </div>
  )
}