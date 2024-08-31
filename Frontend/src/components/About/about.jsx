import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const AboutPage = () => {
  const features = [
    {
      title: 'AI-Driven Scheduling',
      description: 'Optimize your bus routes and schedules with our AI-powered algorithms that ensure efficiency and reduce costs.',
      likes: 498,
      comments: 64,
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Keep track of your fleet in real-time with our advanced monitoring tools, providing insights into bus locations and statuses.',
      likes: 321,
      comments: 45,
    },
  ];

  return (
    <>
      <section className="bg-[#d1f3c9]">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to our bus operations management system! We specialize in optimizing your bus operations with AI-driven scheduling, real-time monitoring, and efficient crew management. Our platform is designed to streamline your operations, reduce costs, and enhance the overall efficiency of your transportation services.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                With our cutting-edge technology, you can easily manage routes, monitor your fleet, and generate automated reports, all in one place. Join us in transforming the future of public transportation.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img 
                src="/aboutUs.png" 
                alt="About Us Image" 
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center bg-[#f1f8e8] text-gray-600 py-8 px-4">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#95D2B3] shadow-lg rounded-lg">
              <div className="px-6 py-5">
                <div className="flex items-start">
                  {/* Icon */}
                  <svg className="fill-current flex-shrink-0 mr-5" width="30" height="30" viewBox="0 0 30 30">
                    <path className="text-[#D8EFD3]" d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z" />
                    <path className="text-[#95D2B3]" d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z" />
                    <path className="text-[#55AD9B]" d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z" />
                  </svg>
                  {/* Card content */}
                  <div className="flex-grow truncate">
                    {/* Card header */}
                    <div className="w-full sm:flex justify-between items-center mb-3">
                      {/* Title */}
                      <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                        {feature.title}
                      </h2>
                      {/* Like and comment buttons */}
                      <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                        <button className="flex items-center text-left text-sm font-medium text-[#D8EFD3] hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-[#D8EFD3]">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                          </svg>
                          <span>
                            {feature.likes} <span className="sr-only">likes</span>
                          </span>
                        </button>
                        <button className="flex items-center text-left text-sm font-medium text-[#D8EFD3] hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-[#D8EFD3]">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                          </svg>
                          <span>
                            {feature.comments} <span className="sr-only">comments</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="flex items-end justify-between whitespace-normal">
                      {/* Paragraph */}
                      <div className="max-w-md text-[#F1F8E8]">
                        <p className="mb-2">{feature.description}</p>
                      </div>
                      {/* More link */}
                      <a
                        className="flex-shrink-0 flex items-center justify-center text-[#55AD9B] w-10 h-10 rounded-full bg-gradient-to-b from-[#D8EFD3] to-[#95D2B3] hover:from-white hover:to-[#D8EFD3] focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                        href="#0"
                      >
                        <span className="block font-bold">
                          <span className="sr-only">Read more</span> &rarr;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
