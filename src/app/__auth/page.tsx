'use client';

import styles from '@/app/__auth/page.module.css';
import {useState} from "react";
import Start from "@/components/auth/start";
import Email from "@/components/auth/email";

const Access = () => {
  const [stage, setStage] = useState('start')
  const [email, setEmail] = useState('')
  return (
    <div className={styles.root}>
      {stage === 'start' && <Start setStage={setStage} />}
      {stage === 'email' && <Email setStage={setStage} email={email} setEmail={setEmail} />}
    </div>
  )
}

export default Access