import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="py-20">
        <h1 className="text-center text-4xl mx-auto py-20  ">About</h1>
        <div className="md:grid md:grid-cols-7 md:px-40 px-10 md:gap-20  items-center">
          <div className="md:col-span-3">
            <img src="about.webp" alt="about" />
          </div>
          <div className="md:col-span-4">
            <ul className="list-disc pt-8 item md:text-2xl text-justify">
              <li>
                Welcome to the sonic realm of Hardik Mali, where beats meet
                passion and music becomes an unforgettable experience.
              </li>
              <li>
                Hardik is not just a DJ; he's a curator of moments, a maestro of
                melodies, and a sonic storyteller.
              </li>
              <li>
                With an innate ability to read the room and a keen sense of
                musical intuition, Hardik has been setting dance floors ablaze
                across INDIA.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
