import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css'

function ContactUs() {
  const [data, setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
})

const handleChange = (event) =>{
        const{name, value} = event.target;
        setData ((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

 const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data);
    }

return (
    <div>
      <div className='header-box'>
            <Header />
      </div>
      <h3>Contact Us:</h3>
       <form className='contact-us' onSubmit={handleSubmit}>

      <label htmlFor="firstname">First Name:</label>
            <input
            id = "firstname"
            name = "firstname"
            value = {data.firstname}
            onChange={handleChange}
            placeholder="Firstname"
            required
            /><br/>

      <label htmlFor="lastname">Last Name:</label>
            <input
            id = "lastname"
            name = "lastname"
            value = {data.lastname}
            onChange={handleChange}
            placeholder="Lastname"
            required
            /><br/>

      <label htmlFor="email">Email:</label>
            <input
            id = "email"
            name = "email"
            value = {data.email}
            onChange={handleChange}
            placeholder="Email"
            required
            /><br/>

      <label htmlFor="feedback">Feedback:</label>
            <textarea
            id = "feedback"
            name = "feedback"
            value = {data.feedback}
            onChange={handleChange}
            placeholder="Feedback"
            minLength={50}
            maxLength={200}
            required
            /><br/>

      <button type="submit">Submit</button>
      </form><br/><br/>
      <div className='footer-box'>
            <Footer />
        </div>
    </div>
  )

}

export default ContactUs