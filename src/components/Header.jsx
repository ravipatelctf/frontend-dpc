
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [token]);

    function handleLogout() {
        toast.info("Logging Out...")
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        navigate("/login");
    }

    return (
        <>
            <header className="py-3 bg-light">
                <div className="container px-2 nav justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand p-0 m-0 fw-bold fs-4">Mini Event Tracker</Link>
                    <ul className="navbar nav p-0 m-0">
                        {
                            isLoggedIn ? (
                                <li className="nav-item">
                                    <button onClick={(event) => handleLogout(event)} className="nav-link fw-bold border rounded text-light py-2 bg-dark">Logout</button>
                                </li>
                            ) : (
                                <>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link text-dark">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link border rounded text-light py-1 bg-dark">Login</Link>
                                </li>
                                </>
                            )
                        }

                    </ul>
                </div>
            </header>
        </>
    );
}