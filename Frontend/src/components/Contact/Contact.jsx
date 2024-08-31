import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Contact() {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      // Handle form submission logic here
      console.log('Form submitted:', { email });
    }
  }

  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.2489250249!2d76.81306421711205!3d28.613895444286203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e3d0b982c7%3A0x6be0baad7fd8f7cf!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1693471870070!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full md:px-3 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    />
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      placeholder="Message"
                      className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-6 flex items-center">
                    <input
                      className="mr-2 h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none checked:border-primary checked:bg-primary checked:before:opacity-[0.16] hover:cursor-pointer"
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label className="inline-block hover:cursor-pointer">
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-sky-500 text-white px-6 py-2.5 text-xs font-medium uppercase leading-normal lg:mb-0 hover:bg-sky-800 transition ease-in-out duration-150"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full lg:w-7/12">
                <div className="flex flex-wrap">
                  {[
                    {
                      title: "Technical support",
                      email: "example@gmail.com",
                      phone: "1-600-890-4567",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Billing",
                      email: "billing@example.com",
                      phone: "1-700-890-4567",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Inquiry",
                      email: "inquiry@example.com",
                      phone: "1-800-890-4567",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9zm-9-4.5V12l2.25 2.25"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Support",
                      email: "support@example.com",
                      phone: "1-900-890-4567",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 15v4a2 2 0 01-2 2h-4m6-6V9a2 2 0 00-2-2h-3l-2-3H8L6 7H5a2 2 0 00-2 2v3m0 6v-6m4 10h10M5 21h14"
                          />
                        </svg>
                      ),
                    },
                  ].map((contact, index) => (
                    <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-6/12 lg:px-6" key={index}>
                      <div className="flex items-start">
                        <div className="shrink-0">{contact.icon}</div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold">{contact.title}</p>
                          <p className="text-neutral-500">{contact.email}</p>
                          <p className="text-neutral-500">{contact.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Contact;
