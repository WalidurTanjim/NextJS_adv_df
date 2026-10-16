import React, {Suspense} from 'react';
import BooksList from "@/app/components/Books/BooksLIst/page";

const BooksPage = () => {
    return (
        <div className={`books-page p-5`}>
            <h1 className={`text-2xl text-center font-medium py-10`}>Books</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Books is loading...</p>}>
                <BooksList />
            </Suspense>
        </div>
    );
};

export default BooksPage;