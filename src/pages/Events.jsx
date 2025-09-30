
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFetchGet } from "../useFetchGet";
import { baseUrl } from "../api";

export default function Events() {
    const {data, error, fetchData} = useFetchGet(`${baseUrl}/events`);
    console.log(data);
    return (
        <>
            <Header />
            <main className="container py-4">
                <h2 className="text-center">Events Page</h2>
                <div className="row py-4">
                    {
                        data?.map((event) => (
                            <div key={event._id} className="col-md-4">
                            <div className="card mb-2 bg-light">
                                <div className="card-body">
                                    <h3 className="">{event.name}</h3>
                                    <p className="card-text">{event.description}</p>
                                    <p className=""><strong>Time: </strong>{new Date(event.dateTime).toTimeString()}</p>
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