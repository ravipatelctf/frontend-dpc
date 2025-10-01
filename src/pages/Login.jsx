
import { useState } from "react";
import { loginUser } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        if (!email || !password) {
            return;
        }

        toast.info("Logging in...");

        const payload = {
            "email": email,
            "password": password
        }

        try {
            const response = await loginUser(payload);
            navigate("/events");
        } catch (error) {
            toast.error("User not found!");
        }
    }

    return (
        <>
        <Header />
        <div className="container py-4">
            <form onSubmit={(event) => handleLogin(event)}>
                <h2 className="text-center">Login Form</h2>
                <input type="text" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} className="form-control"/><br />
                <input type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} className="form-control"/><br />
                <div className="d-flex justify-content-center"><button type="submit" className="btn btn-dark fw-bold">Login</button></div>
            </form>
        </div>
        <Footer />
        </>    
    );
}