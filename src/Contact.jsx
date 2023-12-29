import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1 className="text-center text-4xl mx-auto ">Contact</h1>

        <div className="md:grid md:grid-cols-7 justify-evenly  flex-row md:justify-end items-center">
          <div class="py-16 px-7 rounded-md md:col-span-3 md:flex md:justify-end">
            <form class="" action="" method="POST">
              <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Name *"
                  class="w-full border border-gray-300 bg-black rounded-md py-2 px-3 focus:outline-none focus:border-purple-900 "
                />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Phone *"
                  class="w-full border border-gray-300 bg-black rounded-md py-2 px-3 focus:outline-none focus:border-purple-900"
                />
                <div class="md:col-span-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail "
                    class="w-full border border-gray-300 bg-black rounded-md py-2 px-3 focus:outline-none focus:border-purple-900"
                  />
                </div>
                <div class="md:col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    cols=""
                    placeholder="Your Massage *"
                    class="w-full border border-gray-300 bg-black rounded-md py-2 px-3 focus:outline-none focus:border-purple-900"
                  ></textarea>
                </div>
                <div class="md:col-span-2 flex justify-center">
                  <button class="relative inline-flex  group">
                    <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#9820ee] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <div
                      class="relative font-yeseva inline-flex items-center justify-center px-8 py-4 text-lg transition-all duration-200 bg-white text-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Send
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 flex justify-center">OR</div>
          <div className="md:col-span-3 flex justify-center py-10 md:justify-start mb-10">
            <div className="absolute ">
              <button class="relative inline-flex  group">
                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#9820ee] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                href="whatsapp://send?phone=+919764934519&text=example"
                  class="relative font-yeseva inline-flex items-center justify-center px-8 py-4 text-lg transition-all duration-200 bg-white text-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
                    />
                  </svg>{" "}
                  Whatsapp
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
