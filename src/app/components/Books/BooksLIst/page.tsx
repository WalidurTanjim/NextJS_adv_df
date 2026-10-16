import React from 'react';
import {Book} from "@/app/types/book";
import BookCard from "@/app/components/Books/BookCard/page";

const fetchBooks = async(): Promise<Book[]> => {
    try{
        const res = await fetch(`http://localhost:5000/books`, {
            next: { revalidate: 25 }
        });

        if(!res.ok) {
            throw new Error("Failed to fetch");
        }

        return res.json();
    }catch(err) {
        console.error(err);
        throw err;
    }
}

const BooksList = async() => {
    const books = await fetchBooks();

    return (
        <div className={`mt-5 grid gap-5 grid-cols-4`}>
            {
                books?.map((book: Book) => <BookCard key={book?.id} book={book} />)
            }
        </div>
    );
};

export default BooksList;