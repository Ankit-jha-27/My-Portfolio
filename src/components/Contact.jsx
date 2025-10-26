import React, {useRef, useState } from 'react';
import { Mail, MapPin, Phone,Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);


  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,  // form reference
      PUBLIC_KEY
    ).then(
      (result) =>{
        console.log(result);
        setIsSent(true);
        form.current.reset(); // reset form fields
        toast.success('Message sent successfully!',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "light",
        })
        setIsSending(false);
      },
      (error) => {
        toast.error(`Failed to send message: ${error.text}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "light",
        });
        setIsSending(false);
      }
    )
   
  }

  return (
    
    <>
      <ToastContainer />
      <section id="contact" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold glow">
          <span className="glow">Reach Me</span>
        </h2>

        <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Main Container */}
        <div className="mt-12 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
          
          {/* Left Part */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6 rounded-2xl shadow-lg text-center md:text-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
                
                {/* Email */}
                <div className="flex items-center gap-3 justify-center md:justify-start mt-2">
                  <div className="w-8 flex justify-center">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <a
                    href="mailto:jhaankitjha03@gmail.com"
                    className="hover:underline text-sm md:text-base break-words"
                  >
                    jhaankitjha03@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-8 flex justify-center">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <a
                    href="tel:+917980318952"
                    className="hover:underline text-sm md:text-base"
                  >
                    +91 7980318952
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-8 flex justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-sm md:text-base">Kolkata, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h1 className="font-bold mb-2 flex justify-center md:justify-end">Connect with Me</h1>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://github.com/ankit-jha-27"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  <FaGithub className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-jha-b926a8277/"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://x.com/_Ankit_jha_09"
                  className="hover:text-blue-600 transition"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
              
              <div className="flex flex-col items-start w-full">
                <label htmlFor="name" className="text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col items-start w-full">
                <label htmlFor="email" className="text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col items-start w-full">
                <label htmlFor="message" className="text-sm font-medium mb-1">Your Message</label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 glow flex items-center justify-center gap-2"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={20}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>    
    </>
    
  );
};

export default Contact;
