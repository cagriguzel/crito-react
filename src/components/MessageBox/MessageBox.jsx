// import React from 'react';

// const MessageBox = () => {
//   return (
//     <section className="message-box">
//       <div className="container">
//         <h3 className="title">Leave us a message<br />for any information.</h3>
//         <div className="input-box">
//           <form>
//             <input type="text" placeholder="Name*" />
//             <input type="text" placeholder="Email*" />
//             <input className="message" type=" " placeholder="   Your Message*"/>
//             <button className="btn-yellow">Send Message <i className="fa-light fa-arrow-up-right"></i></button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MessageBox;

import React, { useState } from 'react';

const MessageBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError('All fields are required.');
      return;
    }

    setFormError('');

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormError('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section className="message-box">
      <div className="container">
        {formSubmitted ? (
          <p className="success-message">Your message has been sent!</p>
        ) : (
          <>
            <h3 className="title">Leave us a message<br />for any information.</h3>
            {formError && <p className="error-message">{formError}</p>}
            <div className="input-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  className="message"
                  name="message"
                  placeholder="Your Message*"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit" className="btn-yellow">
                  Send Message <i className="fa-light fa-arrow-up-right"></i>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MessageBox;
