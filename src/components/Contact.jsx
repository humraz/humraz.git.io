import React, { useState } from 'react';
import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import instagram from "../assets/instagram.png"

function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Send email here
        const { name, email, message } = formData;
        const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        window.location.href = `mailto:your_email@example.com?subject=New Inquiry&body=${encodeURIComponent(emailBody)}`;
      };


    return(
        <div>
      <section id="contact" className="text-gray-700 body-font relative bg-white opacity-90 rounded-lg m-5">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col  w-full mb-5">
            <h1 className="sm:text-3xl text-2xl  text-center font-medium title-font mb-4 text-gray-900">
            Let's Connect!
            </h1>
            
            <div className="flex text-center justify-center mb-10 mt-7 space-x-8 mx-auto">
                <h1 className="w-12 h-12 object-cover flex flex-col items-center"> <img src={linkedin}></img><a href="https://www.linkedin.com/in/humrazsait"  >Linkedin</a> </h1>
                <h1 className="w-12 h-12 object-cover flex flex-col items-center">  <img src={phone}></img><a href="tel:+919633239293"  >Phone</a> </h1>
                <h1 className="w-12 h-12 object-cover flex flex-col items-center">  <img src={instagram}></img><a href="https://www.linkedin.com/in/humrazsait"  >Insta</a> </h1>
                <h1 className="w-12 h-12 object-cover flex flex-col items-center">  <img src={email}></img><a href="mailto:humrazsait@gmail.com"  >Gmail</a> </h1>
            </div>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Interested in learning more about my skills, expertise, or past projects? Feel free to send me a message! Whether you have questions, collaboration ideas, or just want to say hello, I'm always eager to connect and share insights. Looking forward to hearing from you!
            </p>

          </div>
          
          
          
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form  onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">humrazsait@gmail.com</a>
                <p className="leading-normal my-5">
                  Hyderabad
                  <br />
                  India
                </p>
                
              </div>
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Contact;