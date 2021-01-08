import React, { useState } from "react";
import './ContactForm.css';
import { db } from "./firebase";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setLoader(true);

      var name = document.forms["contactForm"]["Name"].value;
      var email = document.forms["contactForm"]["Email"].value;
      var message = document.forms["contactForm"]["Message"].value;
      if (name === "") {
        alert("Name must be filled out");
        setLoader(false);
        return false;
      }

      if (email === "") {
        alert("Email must be filled out");
        setLoader(false);
        return false;
      }

      if (!email.includes('@') || !email.includes('.')) {
        alert("Email must be filled out correctly Example: xyz@email.com");
        setLoader(false);
        return false;
      }

      if (message === "") {
        alert("Message must be filled out");
        setLoader(false);
        return false;
      }
        
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };

    return (
        <div className="bg-contact2 contact">
            <div className="container-contact2">
                <div className="wrap-contact2">
                <form name="contactForm" className="form" onSubmit={handleSubmit}>
                    <h1>Contact Me</h1>

                    <label>Name</label>
                    <input
                        name="Name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        name="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Message</label>
                    <textarea
                        name="Message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2,72,82)" }}
                    >
                        Submit
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
