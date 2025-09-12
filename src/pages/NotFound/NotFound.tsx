import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <title>Home | BooksReviews</title>
            <meta name="description" content="The page you are looking for could not be found. Please check the URL or return to the homepage." />
            <section className="section container" aria-labelledby="notfound-heading">
                <h1 id="notfound-heading">404 - Page Not Found | BooksReviews</h1>
                <p>Sorry, the page you’re looking for doesn’t exist.</p>
                <Link to="/" className="btn">
                    Go back home
                </Link>
            </section>
        </>
    );
}

export default NotFound;