export type Category = {
    id: string;
    title: string;
    description: string;
    image: string; // icon path
    slug: string;  // to map to data/categories/<slug>.json
};

export type Book = {
    id: string;
    image: string;
    title: string;
    author: string;
    reviewedBy: string;
    description: string;
    category: string;
    // for future use
    dark?: boolean;

};

export type BooksByCategory = {
    category: string;
    books: Book[];
};

export type BookCarousel = {
    slug: string;
    title: string;
    dark?: boolean;
};

export type NavLinks = {
    variant?: "inline" | "list";
    navClass?: string;
}