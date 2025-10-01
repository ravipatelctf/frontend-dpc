
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFetchGet } from "../useFetchGet";
import { useFetchPost } from "../useFetchPost";
import { baseUrl } from "../api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function CreateNewEvent({setRefresh}) {
    const [name, setName] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const userEmailId = sessionStorage.getItem("email");

    const {data, error, fetchData} = useFetchPost(`${baseUrl}/events/${userEmailId}`);

    async function handleCreateNewTask(event) {
        event.preventDefault();
        const payload = {
            "name": name,
            "dateTime": new Date(dateTime).toISOString(),
            "location": location,
            "description": description
        }
        console.log(payload);
        try {
            const response = await fetchData(payload);
            setRefresh(pv => pv + 1);
            toast.info("Event created successfully.");
        } catch (error) {
            console.error(error);
        } finally {
            setName("");
            setDescription("");
            setDateTime("");
            setLocation("");
        }
    }

    return (
        <div>
            <form onSubmit={(event) => handleCreateNewTask(event)}>
            <input type="text" placeholder="Title" required value={name} onChange={(event) => setName(event.target.value)} className="form-control mb-2"/>
            <input type="datetime-local" placeholder="Date and Title" required value={dateTime} onChange={(event) => setDateTime(event.target.value)} className="form-control mb-2"/>
            <input type="text" placeholder="Location" required value={location} onChange={(event) => setLocation(event.target.value)} className="form-control mb-2"/>
            <textarea type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} className="form-control mb-2"></textarea>
            <div className="text-center">
                <button type="submit" className="btn btn-dark fw-bold">Create Event</button>
            </div>
            </form>
        </div>
    );
}


export default function Events() {
    const [refresh, setRefresh] = useState(0);
    const navigate = useNavigate();

    const userEmailId = sessionStorage.getItem("email");
    const {data, error, fetchData} = useFetchGet(`${baseUrl}/events/${userEmailId}`);

    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            toast.warn("Please login...");
            navigate("/login")
            return;
        }
    }, [token]);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    return (
        <>
            <Header />
            <main className="container py-4">
                <h2 className="text-center fw-bold">Events</h2>
                <CreateNewEvent setRefresh={setRefresh} />
                <div className="row py-4">
                    {
                        data?.events?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt) ).map((event) => (
                            <div key={event._id} className="col-md-4">
                            <div className="card mb-2 bg-light">
                                <div className="card-body">
                                    <h3 className="">{event?.name}</h3>
                                    <p><strong>Location: </strong>{event?.location}</p>
                                    <p className=""><strong>Time: </strong>{new Date(event?.dateTime).toTimeString()}</p>
                                    <p className="card-text">{event?.description}</p>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}