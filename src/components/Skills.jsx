import api from "../assets/api.png";
import data_science from "../assets/data_science.jpg"
import python from "../assets/python.jpg"
import leetcode from "../assets/leetcode.png"
import react from "../assets/react.jpg"
import network from "../assets/network.jpg";


const Skills = () => {
    return (
        <div>
            <div className=" text-black dark:text-white text-center text-xl pb-10 w-5/6 mx-auto">
                <p>
                    At this point in my professional career, I had the opportunity to explore, learn
                </p>
                <p>
                    and even master different parts of the following
                </p>
                <p>
                    <span className="text-teal-500 font-bold">technologies</span> &
                    <span className="text-teal-500 font-bold"> concepts</span> :

                </p>
            </div>

            <div className="grid grid-cols-3 gap-8 w-3/6 mx-auto place-items-center justify-center pb-48">
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >Python</p>
                    <img src={python} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >Network Architechtures & protocols</p>
                    <img src={network} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >Data science</p>
                    <img src={data_science} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >REST Api</p>
                    <img src={api} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >React</p>
                    <img src={react} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
                <div>
                    <p className="w-full p-3 my-2 overflow-hidden shadow-2xl shadow-teal-600 bg-white rounded-xl text-black text-xl text-center font-medium" >Algirithmic</p>
                    <img src={leetcode} alt="Image 1" className="rounded-xl overflow-hidden shadow-xl shadow-teal-600" />
                </div>
            </div>
        </div>

    );
};

export default Skills;