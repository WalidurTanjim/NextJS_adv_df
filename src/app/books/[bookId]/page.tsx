import React, {Suspense} from 'react';
import {Book} from "@/app/types/book";

interface BookIdParams {
    params: Promise<{
        bookId: string;
    }>
}

// fetchDynamicDataById
const fetchDynamicDataById = async(id: string): Promise<Book> => {
    try{
        const res = await fetch(`http://localhost:5000/books/${id}`);

        if(!res.ok) {
            throw new Error("Book not found");
        }

        return res.json();
    }catch(err) {
        console.error(err);
        throw err;
    }
}

// sub component
const DynamicBookDetails = async({ params }: BookIdParams) => {
    const { bookId } = await params;
    const dynamicBook = await fetchDynamicDataById(bookId);

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{dynamicBook?.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

// main component
const DynamicBookById = async({ params }: BookIdParams) => {
    return (
        <div className={`dynamic-book p-5`}>
            <h1 className={`py-5 text-center text-2xl font-medium`}>Dynamic book by id</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Dynamic book is loading...</p>}>
                <DynamicBookDetails params={params} />
            </Suspense>
        </div>
    );
};

export default DynamicBookById;