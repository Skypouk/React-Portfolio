const Experience = () => {
  return (
    <section id="experiences" className="flex flex-col max-w-[1240px] mx-auto px-20 pt-24">
      <div className="flex flex-col">
        <h3 className="flex justify-center text-5xl lg:text-6xl font-bold py-4 text-white">6 Months Internship</h3>
        <p className="text-3xl lg:text-2xl py-4 leading-8 text-gray-200">
          After finishing my computer science cursus with a specialisation in <span className="text-teal-500"> Data Science</span>.
          I led an<span className="text-teal-500"> Anonymization </span> project on sensitive personal data following
          <span className="text-teal-500"> RGPD</span> European regulation as an intern at Crédit Agricole Bank.
        </p>
        <p className="text-3xl lg:text-2xl py-4 leading-8 text-gray-200">
          I had the opportunity to handle Data cleaning and preparation, Data visualisation, Model design, implementation, training, deployment and performance measuring.
        </p>
      </div>
      <div className="flex flex-col ">
        <h3 className="flex justify-center text-5xl lg:text-6xl font-bold py-4 text-white ">Junior Engineer as Back-end Developer</h3>
        <p className="text-3xl lg:text-2xl py-4 leading-8 text-gray-200">
          My current adventure consists of creating <span className="text-teal-500">API</span>'s and developing new features to automate operations on network infrastructure,
          it includes <span className="text-teal-500"> Flow Openings</span>, <span className="text-teal-500"> Firewall </span> and
          <span className="text-teal-500"> Load Balancing </span>
          management.
        </p>
        <p className="text-3xl lg:text-2xl py-4 leading-8 text-gray-200">
          My team and I use <span className="text-teal-500"> Flask</span> python with <span className="text-teal-500"> Swagger</span> user interface to implement the clients demands.
        </p>
      </div>        
      <div className="flex flex-col">
        <h3 className="flex justify-center text-5xl lg:text-6xl font-bold py-4 text-white">Personal Technologies and Interests</h3>
        <p className="text-3xl lg:text-2xl py-4 leading-8 justify-start text-gray-200">
          On my free time and as personal Interests : I learn Front-end development using
          <span className="text-teal-500"> React</span>,
          <span className="text-teal-500"> JavaScript </span>
          Expressions and <span className="text-teal-500"> Tailwind</span> for css. This project comes as a first application
          to the learned concepts.
        </p>
        <p className="text-3xl lg:text-2xl py-4 leading-8 text-gray-200">
          I am also interested in <span className="text-teal-500"> Algorithms </span>
          and <span className="text-teal-500">Leetcode </span> challenges, you will find below a dynamic chart that fetch live data from
          my LeetCode profile.
        </p>
      </div>
    </section>
  );
};

export default Experience;