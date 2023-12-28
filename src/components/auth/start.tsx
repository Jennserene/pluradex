'use client';

import styles from '@/app/__auth/page.module.css';
import React from "react";
import Button from "@/components/global/button"

type Props = {
  setStage: React.Dispatch<React.SetStateAction<string>>;
}

const Start = (props: Props) => {
  const setStage = props.setStage;

  return (
    <div className={styles.pageContainer}>
      <h1>Welcome to Pluradex</h1>
      <p>Here Systems can learn about themselves and present themselves to others the way that they want to be presented.</p>
      <h2>Sign up or log in:</h2>
      <Button onClick={() => setStage('email')} text={"Continue with email"} />
    </div>
  );
}

export default Start;