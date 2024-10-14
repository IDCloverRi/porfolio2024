import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import ItemLayout from "../sub/ItemLayout";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 z-20">
      <h5 className="text-center text-lg text-gray-400">Get In Touch</h5>
      <h2 className="text-center text-3xl text-white mb-8">Contact Me</h2>

      <ItemLayout>
        <div className="container mx-auto flex flex-col gap-8 items-center">
          <div className=" w-[400px] flex flex-col items-center rounded-lg p-3  bg-white/10 border-2 border-[rgba(var(--accent),0.8)] backdrop-blur-[0.5px] ">
            <h5 className="text-white ">nguyenhuongdiu1710@gmail.com</h5>
            <article className="text-white text-center">
              <MdOutlineEmail className="text-3xl mb-3 mx-auto" />
              <h4 className="text-xl font-semibold">Email</h4>
              <a
                href="mailto:nguyenhuongdiu1710@gmail.com"
                className="mt-2 inline-block text-sm text-white hover:text-purple-500 transition-colors duration-300 "
              >
                Send a message
              </a>
            </article>
          </div>

          {/* FORM SECTION */}
          <form className="flex flex-col gap-4 items-center w-2/3">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full p-4 rounded-md bg-transparent border-2 border-purple-500 text-white placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-md bg-transparent border-2 border-purple-500 text-white placeholder-gray-300"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-md bg-transparent border-2 border-purple-500 text-white placeholder-gray-300 resize-none"
            />
            <button
              type="submit"
              className="button-primary text-white py-3 px-20 rounded-lg transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </ItemLayout>
    </section>
  );
};

export default Contact;
