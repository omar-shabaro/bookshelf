import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBookById } from "../../services/api";
import type { Book } from "../../types";
import styles from "./BookDetails.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [id]);

    useEffect(() => {
        setLoading(true);
        if (!id) return;
        fetchBookById(id)
            .then(b => setBook(b))
            .catch(e => setError(e?.message ?? "Error loading book"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (error) return <p role="alert">{error}</p>;
    if (!book) return <></>;

    return (
        <article className={`section container`}>
            <div className={styles.grid}>
                <figure className={styles.cover}>
                    <img src={book.image} alt={`${book.title} cover`} />
                </figure>

                <div className={styles.meta}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <p className={styles.sub}>by {book.author}</p>

                    {book.description && (
                        <p className={styles.desc}>{book.description}</p>
                    )}

                    {book.reviewedBy && (
                        <p className={styles.muted}>Reviewed by {book.reviewedBy}</p>
                    )}

                    <div className={styles.actions}>
                        <Link to="/books" className="btn btn-primary">← Back</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BookDetails;
