import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Bio } from '../../data/constants';

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
scroll-margin-top: 88px;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  margin: 18px 0 8px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  text-underline-offset: 4px;
  &:hover, &:focus-visible { color: ${({ theme }) => theme.primary}; }
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(form.current);
    const senderEmail = formData.get("from_email");
    const senderName = formData.get("from_name");
    const subject = formData.get("subject");
    const senderMessage = formData.get("message");

    try {
      await emailjs.send(
        "service_fgs4x8m",
        "template_tfg2lse",
        {
          to_email: Bio.email,
          name: senderName,
          email: senderEmail,
          user_name: senderName,
          user_email: senderEmail,
          from_email: senderEmail,
          from_name: senderName,
          reply_to: senderEmail,
          title: subject,
          subject,
          message: `From: ${senderName} <${senderEmail}>\nSubject: ${subject}\n\n Sender's Message: ${senderMessage}`,
        },
        "IEjvaovrcuzoxWnVg"
      );
      setFeedbackMessage("Message sent successfully.");
      form.current.reset();
    }catch (error) {
  console.error("EmailJS error:", error);
  setFeedbackMessage(
    error?.text || error?.message || "Unknown EmailJS error"
  );
} finally {
      setSending(false);
      setOpen(true);
    }
  }



  return (
    <Container id="contact" aria-labelledby="contact-title">
      <Wrapper>
        <Title id="contact-title">Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactLinks aria-label="Direct contact links">
          <ContactLink href={`tel:${Bio.phone.replace(/\s/g, "")}`}>{Bio.phone}</ContactLink>
          <ContactLink href={`mailto:${Bio.email}`}>{Bio.email}</ContactLink>
          <ContactLink href={Bio.linkedin} target="_blank" rel="noreferrer">LinkedIn</ContactLink>
          <ContactLink href={Bio.github} target="_blank" rel="noreferrer">GitHub</ContactLink>
        </ContactLinks>
        <ContactForm ref={form} onSubmit={handleSubmit} aria-labelledby="contact-form-title">
          <ContactTitle id="contact-form-title">Send a message</ContactTitle>
          <ContactInput type="email" placeholder="Your email" aria-label="Your email" name="from_email" required />
          <ContactInput placeholder="Your name" aria-label="Your name" name="from_name" required />
          <ContactInput placeholder="Subject" aria-label="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" aria-label="Message" rows="4" name="message" required />
          <ContactButton type="submit" value={sending ? "Sending..." : "Send message"} disabled={sending} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message={feedbackMessage}
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact