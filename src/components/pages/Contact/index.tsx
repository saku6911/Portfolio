import React, { useState } from 'react';
import * as css from "./styles.module.scss";
import { SecondaryButton } from "@/components/shared/Button";
import { Title } from "@/components/shared/Title";
import type { FC } from "react";



export const Contact: FC = () => {

	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault()  
	try{
		const response = await fetch("http://localhost:3000/api/contact-handler", {
			method: "POST",
			headers: { 
				"Accept": "application/json", 
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				email: email,
				subject:subject,
				message: message
			})
		})
		const jsonData = await response.json()
		alert("メッセージを送信しました")
	}catch(err){
		alert("メッセージの送信が失敗しました")
	}
}

	return (
		<section className={css.wrapper} id="contact">
		<Title>CONTACT</Title>
		<form onSubmit={handleSubmit} className={css.form}>
		  <label htmlFor="name" className={css.label}>お名前</label>
		  <input
			type="text"
			id="name"
			value={name}
			onChange={(e) => setName(e.target.value)}
			className={css.input}
		  />
		  
		  <label htmlFor="email" className={css.label}>メールアドレス</label>
		  <input
			type="email"
			id="email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			className={css.input}
		  />
		  
		  <label htmlFor="subject" className={css.label}>件名</label>
		  <input
			type="text"
			id="subject"
			value={subject}
			onChange={(e) => setSubject(e.target.value)}
			className={css.input}
		  />
		  
		  <label htmlFor="message" className={css.label}>内容</label>
		  <textarea
			id="message"
			value={message}
			onChange={(e) => setMessage(e.target.value)}
			className={css.textarea}
		  />
		  <div className={css.button}>
		    <SecondaryButton type="submit">送信</ SecondaryButton></div> 
		  </form>
	  </section>
	);
};
