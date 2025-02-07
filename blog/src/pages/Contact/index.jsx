import { useEffect, useState } from 'react';
import './Contact.css';
import getData from '../../utils/fetchData';
import axios from 'axios';

function Contact() {
  const [contactData, setContactData] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetch() {
      const response = await getData('/api/contact');

      setContactData(response.data);
    }

    fetch();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    if (name && email && subject && message) {
      axios
        .post('http://localhost:1337/api/contact-forms', {data: {...formData}})
        .then(() => {
          console.log('Formulário enviado com sucesso!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        })
        .catch((error) => console.error(error));
    } else {
      console.warn('Preencha todos os campos antes de enviar!');
    }
  }

  return (
    <section className="contact-container">
      <h2 className="contact-title">{contactData.title}</h2>
      <p className="contact-description">{contactData.description}</p>

      <h3 className="contact-subtitle">{contactData.subtitle}</h3>
      <ul className="contact-information">
        <li>📍 Endereço: {contactData.address}</li>
        <li>📞 Telefone: {contactData.phone}</li>
        <li>✉️ E-mail: {contactData.email}</li>
        <li>🕒 Horário de Atendimento: {contactData.service}</li>
      </ul>

      <div className="form-container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite o assunto"
            className="input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            id="message-text"
            placeholder="Digite sua mensagem"
            className="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
