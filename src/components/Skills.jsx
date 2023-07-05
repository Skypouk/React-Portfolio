import api from "../assets/api.png";
import data_science from "../assets/data_science.jpg"
import python from "../assets/python.jpg"
import leetcode from "../assets/leetcode.png"
import react from "../assets/react.jpg"
import network from "../assets/network.jpg";


const Skills = () => {
    return (
        <div id="skills" className="pt-24">
            <div className="text-gray-200 text-center text-3xl lg:text-2xl px-10 pb-10 max-w-[1240px] mx-auto">
                <p>
                    At this point in my professional career, I had the opportunity to explore, learn
                    and even master different parts of the following
                    <span className="text-teal-500 font-bold"> technologies</span> &
                    <span className="text-teal-500 font-bold"> concepts</span> :
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-4/6 mx-auto place-items-center justify-center text-black text-xl text-center pb-24">
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >Python</p>
                    <img src={python} alt="python" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >Network Architechtures</p>
                    <img src={network} alt="networking" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >Data science</p>
                    <img src={data_science} alt="data science" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div className="w-full h-full">
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >REST Api</p>
                    <img src={api} alt="api" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600 w-full object-fill" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >React</p>
                    <img src={react} alt="react" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl  font-medium" >Algorithmic</p>
                    <img src={leetcode} alt="leet code" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
            </div>
        </div>

    );
};

export default Skills;