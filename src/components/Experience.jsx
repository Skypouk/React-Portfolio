import Chart from "./Chart"


const Experience = () => {
  return (
    <section className="h-screen">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">6 Months Internship</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          After finishing my computer science cursus with a specialisation in <span className="text-teal-500"> Data Science</span>.
          I led an<span className="text-teal-500"> Anonymization </span> project on sensitive personal data following
          <span className="text-teal-500"> RGPD</span> European regulation as an intern at Crédit Agricole Bank.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I had the opportunity to handle Data cleaning and preparation, Data visualisation, Model design, implementation, training, deployment and performance measuring.
        </p>
      </div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Junior Engineer as Back-end Developer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          My current adventure consists of creating <span className="text-teal-500">API</span>'s and developing new features to automate operations on network infrastructure,
          it includes <span className="text-teal-500"> Flow Openings</span>, <span className="text-teal-500"> Firewall </span> and
          <span className="text-teal-500"> Load Balancing </span>
          management.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          My team and I use <span className="text-teal-500"> Flask</span> python with <span className="text-teal-500"> Swagger</span> user interface to implement the clients demands.
        </p>
      </div>        <div>
        <h3 className="text-3xl py-1 dark:text-white ">Personal Technologies and Interests</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          On my free time and as personal Interests :
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I learn Front-end development using
          <span className="text-teal-500"> React</span>,
          <span className="text-teal-500"> JavaScript </span>
          Expressions and <span className="text-teal-500"> Tailwind</span> for css. This project comes as a first application
          to the leaned concepts.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am Interested in <span className="text-teal-500"> Algorithms </span>
          and <span className="text-teal-500">Leetcode </span> challenges, you will find below a dynamic chart that fetch live data from
          my LeetCode profile.
        </p>
      </div>
      <Chart />

    </section>
  );
};

export default Experience;