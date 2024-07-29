import React from 'react';
import { TextField, Typography } from '@mui/material';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <Typography variant="h4" className="contact-heading">
            Get in Touch
          </Typography>
          <Typography variant="body1" className="contact-description">
            If you have any questions or need support, feel free to reach out to us using the contact form below. We look forward to hearing from you!
          </Typography>
          <br/>
          <div className='cform'>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <label htmlFor="email">Email:</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <label htmlFor="message">Message:</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              multiline

            />
            <button
              type='submit' className='button1'
            ><b>
              Send Message
              </b>
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
