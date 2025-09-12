import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/api";
import type { Category } from "../../types";
import styles from "./CategoryBrowse.module.css";
import LoadingSpinner from "../LoadingSpinner";

type Props = { max?: number };
const CategoryBrowse = ({ max = 8 }: Props) => {
    const [cats, setCats] = useState<Category[]>([]);
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setLoading(true);
        fetchCategories()
            .then(data => setCats(data.slice(0, max)))
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false));
    }, [max]);

    if (loading) return <LoadingSpinner />;
    if (err) return <p role="alert">Failed to load categories: {err}</p>;
    if (!cats.length) return null;

    return (
        <section className="section container" aria-labelledby="browse-heading">
            <div className="sectionHeader noMargin">
                <h2 id="browse-heading" className={styles.sectionHeader}><strong>Browse</strong> Our Most Popular Categories</h2>
            </div>

            <div className={styles.grid} role="list">
                {cats.map(c => (
                    <a key={c.id} role="listitem" className={styles.card} href={`/#`} aria-label={`Open ${c.title}`}>
                        <img className={styles.icon} src={c.image} alt="" />
                        <div>
                            <h3 className={styles.title}>{c.title}</h3>
                            <p className={styles.desc}>{c.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default CategoryBrowse;