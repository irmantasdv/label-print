import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import classes from './ContactFrom.module.css';

let temporaryCoutryContactFromDb = [
  {
    id: 1,
    title: 'USA',
  },
  {
    id: 2,
    title: 'Canada',
  },
  {
    id: 3,
    title: 'Germany',
  },
  {
    id: 4,
    title: 'Poland',
  }
];

const ContactForm = () => {

  const [submitedFom, setFormSubmited] = useState(false);
  const navigate = useNavigate();
  const contactFormSubmitHandler = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    const timer = setTimeout(() => {
      setFormSubmited(false);
      navigate('/');
    }, 1500);
    return () => clearTimeout(timer);
  }

  return (
    <React.Fragment>
      {submitedFom && <div className={classes.alert}><p>Thanks for contacting us with your comments and questions. We'll respond to you very soon.</p></div>}
      <Card className={classes.card}>
        <form className={classes.form}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            {temporaryCoutryContactFromDb.map(el => {
              return (
                <option key={el.id}>{el.title}</option>
              );
            })}
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Type your message here.." style={{ height: '200px' }}></textarea>
          <input onClick={contactFormSubmitHandler} type="submit" value="Submit" />
        </form>
      </Card>
    </React.Fragment>

  )
}

export default ContactForm