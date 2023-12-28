'use client';

import styles from '@/app/__auth/page.module.css';
import React, {useState} from "react";
import Button from "@/components/global/button"
import { validateEmail } from "@/utilities/regEx";

type Props = {
  setStage: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Email = (props: Props) => {
  const { setStage, email, setEmail } = props;

  const [ error, setError ] = useState<string | null>(null);

  const submitEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

  }

  return (
    <div className={styles.pageContainer}>
      <p>Enter your email to log in or sign up</p>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.buttonContainer}>
        <Button onClick={() => setStage('start')} text={"Back"} customButtonStyle={'shortButton'}/>
        <Button onClick={() => submitEmail(email)} text={"Continue"} customButtonStyle={'fullButton'}/>
      </div>
    </div>
  );
}

export default Email;