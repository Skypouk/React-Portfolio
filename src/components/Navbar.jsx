import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { toggleNav } from '../store/slices/navbarSlice';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const nav = useSelector((state) => state.navbar.navOpen);
    const dispatch = useDispatch();

    const handleNav = () => {
        dispatch(toggleNav());
        console.log("handle nav")
    };

    return (
        <div>
            <div className="fixed lg:hidden top-0 h-24 w-full bg-black">
                {nav ?
                <div className="text-white h-screen bg-black p-4">
                    <ul>
                        <li className="pb-4">
                            <div className="flex">
                            <h1 className="w-full text-white text-5xl font-bold">Achraf's portfolio</h1>
                            <AiOutlineClose size={50} onClick={handleNav}/>
                            </div>
                        </li>
                        <li className="text-3xl text-gray-300 border-b border-gray-600 py-4" onClick={handleNav}><a href="#home">Home</a></li>
                        <li className="text-3xl text-gray-300 border-b border-gray-600 py-4" onClick={handleNav}><a href="#skills">Skill</a></li>
                        <li className="text-3xl text-gray-300 border-b border-gray-600 py-4" onClick={handleNav}><a href="#experiences">Experience</a></li>
                    </ul>
                </div> 
                :
                <div className="flex max-w-[1240px] mx-auto pt-8 px-8 text-white">
                <h1 className="w-full text-3xl font-bold">Achraf's portfolio</h1>
                <AiOutlineMenu size={40} onClick={handleNav}/>
                </div>
                }
            </div>
            <div className="hidden lg:block fixed top-0 h-24 w-full bg-black">
            <div className="flex max-w-[1240px] mx-auto pt-4 px-6 text-gray-300">
                <h1 className="w-full text-2xl font-bold text-white select-none">Achraf's portfolio</h1>
                <ul className="flex justify-between">
                    <li className="px-4 pt-2 hover:text-white hover:font-bold cursor-pointer"><a href='#home'>Home</a></li>
                    <li className="px-4 pt-2 hover:text-white hover:font-bold cursor-pointer"><a href='#skills'>Skill</a></li>
                    <li className="px-4 pt-2 hover:text-white hover:font-bold cursor-pointer"><a href='#experiences'>Experience</a></li>
                </ul>
            </div>
            </div>
        </div>    
    );
};

export default Navbar;