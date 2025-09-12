import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <title>Home | BooksReviews</title>
            <meta name="description" content="Discover your next favorite book." />
            <section className="section container">
                <h1>Welcome to BooksReviews</h1>
                <p>
                    <Link to="/books">Go to Books page →</Link>
                </p>
            </section>
        </>

    );
}
export default Home;