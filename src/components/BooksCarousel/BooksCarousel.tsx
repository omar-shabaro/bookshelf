import { useEffect, useRef, useState } from "react";
import styles from "./BooksCarousel.module.css";
import type { Book, BookCarousel } from "../../types";
import { fetchBooksByCategory } from "../../services/api";
import BookCard from "../BookCard";
import LoadingSpinner from "../LoadingSpinner";


const BooksCarousel = ({ slug, title, dark }: BookCarousel) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [err, setErr] = useState<string | null>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooksByCategory(slug)
            .then(setBooks)
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false));
    }, [slug]);

    const scrollByCards = (dir: 1 | -1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const item = el.querySelector<HTMLElement>("[data-card]");
        const cardWidth = item ? item.offsetWidth : el.clientWidth;
        el.scrollBy({ left: dir * (cardWidth + 32) * 1.0, behavior: "smooth" });
    };

    if (loading) return <LoadingSpinner />;
    if (err) return <p role="alert">Failed to load {title}: {err}</p>;
    if (!books.length) return null;

    return (
        <section className={`${styles.wrap} ${dark ? styles.dark : styles.light}`} aria-labelledby={`${slug}-heading`}>
            <div className="container section relative">
                <button className={`${styles.ctrl} ${styles.ctrlLeft}`} onClick={() => scrollByCards(-1)} aria-label="Scroll left">  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                ><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button className={`${styles.ctrl} ${styles.ctrlRight}`} onClick={() => scrollByCards(1)} aria-label="Scroll right">  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg></button>
                <div className="sectionHeader">
                    <h2 id={`${slug}-heading`}>{title}</h2>
                </div>

                <div className={styles.scroller} ref={scrollerRef} role="list" tabIndex={0} aria-label={`${title} books`}>
                    {books.map(b => (
                        <div key={b.id} role="listitem" data-card className={styles.item}>
                            <BookCard book={b} dark={dark} />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default BooksCarousel;