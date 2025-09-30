
import { useState } from "react";
import { signupUser } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(event) {
        event.preventDefault();

        if (!name || !email || !password) {
            return;
        }

        const payload = {
            "name": name,
            "email": email,
            "password": password
        }

        try {
            const response = await signupUser(payload);
            if (response) {
                navigate("/login");
            }
        } catch (error) {
            toast.error("signup failed...");
        }
    }

    return (
        <>
        <Header />
        <div className="container py-4">
            <form onSubmit={(event) => handleSignup(event)}>
                <h2 className="text-center">Signup Form</h2>
                <input type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} className="form-control"/><br />
                <input type="text" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} className="form-control"/><br />
                <input type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} className="form-control"/><br />
                <button type="submit">Signup</button>
            </form>
        </div>
        <Footer />
        </>    
    );
}