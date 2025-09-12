import type { Book } from "../../types";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = ({ book, dark }: { book: Book; dark?: boolean }) => {
    return (
        <article className={styles.card}>
            <Link to={`/book/${book.id}`} aria-label={`View details for ${book.title}`}>
                <img className={styles.cover} src={book.image}
                    alt={`Cover of ${book.title} by ${book.author}`} loading="lazy" />
            </Link>
            <div className={`${styles.meta} ${dark ? styles.dark : styles.light}`}>
                <h4 className={styles.title}>{book.title}</h4>
                <p className={styles.by}>by {book.author}</p>
                <p className={styles.rev}>Reviewed by {book.reviewedBy}</p>
            </div>
        </article>
    );
}

export default BookCard;