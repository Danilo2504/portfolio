"use client";
import React from "react";
import PageLayout from "../Components/Layouts/PageLayout";
import PageContainer from "../Components/Layouts/PageContainer";
import SectionBar from "../Components/Common/SectionBar";
import CodeTitle from "../Components/Common/CodeTitle";
import SocialCard from "../Components/Common/SocialCard";
import Phone from "../Icons/Phone";
import ContactForm from "../Components/ContactForm";
import Spacer from "../Components/Common/Spacer";
import Email from "../Icons/Email";
import LinkedIn from "../Icons/LinkedIn";
import Git from "../Icons/Git";
import { copyToClipboard } from "../Utils/copyToClipboard";

function ContactPage() {
  return (
    <PageLayout>
      <a id="contact-page" />
      <PageContainer>
        <SectionBar title={"Contact"} />
        <div className="pt-24 px-10 flex flex-col">
          <CodeTitle title={"Mi Contacto"} />
        </div>
        <Spacer paddingY={40} />
        <div className="px-[140px] flex justify-between items-center">
          <div className="flex flex-col justify-start gap-8 ">
            <SocialCard
              svg={Phone}
              content={"+39 351 015 6166"}
              onClick={() => copyToClipboard("+39 351 015 6166")}
            />
            <SocialCard
              svg={Email}
              content={"danilobautista2004@gmail.com"}
              onClick={() => copyToClipboard("danilobautista2004@gmail.com")}
            />
            <SocialCard
              svg={LinkedIn}
              content={"Danilo Bautista"}
              path={"https://www.linkedin.com/in/bdani20"}
            />
            <SocialCard
              svg={Git}
              content={"Danilo2504"}
              path={"https://github.com/Danilo2504"}
            />
          </div>
          <ContactForm />
        </div>
      </PageContainer>
    </PageLayout>
  );
}

export default ContactPage;
