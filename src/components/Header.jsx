
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        sessionStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <>
            <header className="py-4 bg-light">
                <div className="container nav justify-content-between align-items-center">
                    <h1 className="navbar-brand p-0 m-0 fw-bold">Mini Event Tracker</h1>
                    <ul className="navbar nav p-0 m-0 gap-2">
                        {
                            isLoggedIn ? (
                                <li className="nav-item">
                                    <button onClick={(event) => handleLogout(event)} className="nav-link fw-bold border rounded text-light py-1 bg-dark">Logout</button>
                                </li>
                            ) : (
                                <>
                                <li className="nav-item fw-bold">
                                    <Link to="/signup" className="nav-link text-dark">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link fw-bold border rounded text-light py-1 bg-dark">Login</Link>
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