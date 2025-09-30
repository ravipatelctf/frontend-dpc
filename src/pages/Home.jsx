import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Home() {
    return (
        <>
            <Header />
            <main className="container py-4">
                <h2 className="text-center">Home Page</h2>
            </main>
            <Footer />
        </>
    );
}