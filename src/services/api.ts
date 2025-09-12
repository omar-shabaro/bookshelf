import type { Category, Book } from "../types";

const BASE = "/data";


export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch("/data/categories.json");
    if (!res.ok) throw new Error("Failed to load categories");

    const data: { categories?: Category[] } = await res.json();
    if (!Array.isArray(data.categories)) {
        throw new Error("Categories payload missing or invalid");
    }
    return data.categories;
}

export async function fetchBooksByCategory(slug: string): Promise<Book[]> {
    const res = await fetch(`${BASE}/categories/${slug}.json`);
    if (!res.ok) {
        throw new Error(`Failed to load books for ${slug}`);
    }

    const data: { books?: Book[] } = await res.json();
    if (!Array.isArray(data.books)) {
        throw new Error(`Books payload missing or invalid for ${slug}`);
    }
    return data.books;
}

export async function fetchBookById(id: string): Promise<Book> {
    const res = await fetch(`${BASE}/books/book${id}.json`);
    if (!res.ok) throw new Error("Failed to load book details");

    const data: Book = await res.json();
    if (!data || !data.id) {
        throw new Error("Book payload missing or invalid");
    }
    return data;
}