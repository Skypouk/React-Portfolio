import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiLeetcode } from 'react-icons/si';


const Home = () => {
  return (
    <div className="p-10 py-10 text-center ">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Achraf Bentaher
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Python Programmer & Backend Developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Python developper of automation API's at Société Générale.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/Skypouk/"
          target="_blank"
          rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abentaher/"
          target="_blank"
          rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a
          href="https://leetcode.com/skypouk/"
          target="_blank"
          rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
      <div className="flex justify-center">
        <div className=" h-30 p-3 mt-10 mb-96 overflow-hidden w-1/2 shadow-2xl shadow-teal-600 bg-white rounded-xl  border-white text-black text-xl text-center font-medium">
          <p>Learning never exhausts the mind.</p>
          <p className="py-5 text-xl font-bold text-teal-600">
            " Leonardo da Vinci "
          </p>
        </div>
      </div>


    </div>
  );
};

export default Home;