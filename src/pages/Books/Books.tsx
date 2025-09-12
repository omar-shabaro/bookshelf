import CategoryBrowse from "../../components/CategoryBrowse";
import BooksCarousel from "../../components/BooksCarousel";

const Books = () => {
    return (
        <>
            <title>Books | BooksReviews</title>
            <meta name="description" content="Find books by category and read reviews." />
            <CategoryBrowse max={8} />
            <BooksCarousel slug="nonfiction" title="Nonfiction" />
            <BooksCarousel slug="fiction" title="Fiction" dark />
            <BooksCarousel slug="children" title="Children's" />
            <BooksCarousel slug="self_improvement" title="Self Improvement" dark />
        </>
    );
}
export default Books;