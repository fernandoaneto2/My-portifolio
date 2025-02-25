import React from "react";
import Form from "@/app/Components/form/form";
import styles from "./page.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center p-14">
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
