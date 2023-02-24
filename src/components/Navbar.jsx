import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ onToggleDarkMode }) => {
    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developed by Achraf</h1>
            <ul className="flex items-center">
                <li>
                    <a
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="/"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="/skills"
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="/experience"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <BsFillMoonStarsFill
                        onClick={onToggleDarkMode}
                        className="ml-8 cursor-pointer text-2xl"
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;