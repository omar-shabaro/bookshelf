import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { Outlet } from "react-router-dom";


const App = () => {

    return (
        <div className="layout">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;