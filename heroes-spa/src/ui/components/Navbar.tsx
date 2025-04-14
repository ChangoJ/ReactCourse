import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* Brand */}
            <Link
                to="/"
                className="text-white text-lg font-bold flex items-center space-x-2 hover:text-gray-300 transition"
            >
                
                <span>Asociaciones</span>
            </Link>

            {/* Nav Links */}
            <div className="flex space-x-6">
                <NavLink
                    to="/marvel"
                    className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'border-b-2 border-white' : ''
                        }`
                    }
                >
                    <span>Marvel</span>
                </NavLink>
                <NavLink
                    to="/dc"
                    className={({ isActive }) =>
                        `flex items-center space-x-2 text-white hover:text-gray-300 transition ${
                            isActive ? 'border-b-2 border-white' : ''
                        }`
                    }
                >
                    <span>DC</span>
                </NavLink>
            </div>

            {/* Logout */}
            <NavLink
                to="/login"
                className="text-white flex items-center space-x-2 hover:text-gray-300 transition"
            >
                
                <span>Logout</span>
            </NavLink>
        </div>
    </nav>
    )
}