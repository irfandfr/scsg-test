import MainContainer from "@/component/MainContainer/MainContainer";
import Invoice from "./Invoice";

import styles from './history.module.scss'
import Button from "@/component/Button/Button";
import MessageIcon from "@/component/icons/MessageIcon/MessageIcon";

export default function PreviousOrder(){
  return(
    <MainContainer className={styles.history}>
      <Invoice />
      <Button className={styles.waButton}>
        <MessageIcon className={styles.icon}/>
        whatsapp us
      </Button>
    </MainContainer>
  )
}