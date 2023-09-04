"use client";
import React, { useMemo, useState } from "react";
import useTranslation from "../Hooks/useTranslation";
import InputText from "./Common/InputText";
import Spacer from "./Common/Spacer";
import Button from "./Common/Button";

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ subject: "", email: "", body: "" });

  const handleInputs = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const formValidator = useMemo(() => {
    if (form.subject.length && form.email.length && form.body.length > 0) {
      if (!form.email.includes("@")) {
        return false;
      } else if (!form.email.endsWith("gmail.com")) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }, [form]);

  return (
    <form>
      <div className="bg-secondary w-[420px] p-8">
        <h4 className="text-white font-poppins font-medium text-medium_big">
          {t("contact_page.form.form_title")}
        </h4>
        <Spacer paddingY={20} />
        <InputText
          placeholder={t("contact_page.form.input_placeholder_1")}
          inputType={"text"}
          value={form.subject}
          onChange={(e) => handleInputs("subject", e.target.value)}
        />
        <Spacer paddingY={15} />
        <InputText
          placeholder={t("contact_page.form.input_placeholder_2")}
          inputType={"email"}
          value={form.email}
          onChange={(e) => handleInputs("email", e.target.value)}
        />
        <Spacer paddingY={15} />
        <InputText
          placeholder={t("contact_page.form.input_placeholder_3")}
          isTextArea
          value={form.body}
          onChange={(e) => handleInputs("body", e.target.value)}
        />
        <Spacer paddingY={10} />
        <Button
          label={t("contact_page.form.button_text")}
          isValid={formValidator}
          values={form}
        />
      </div>
    </form>
  );
}

export default ContactForm;
