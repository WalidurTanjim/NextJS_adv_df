import React from 'react';
import {Book} from "@/app/types/book";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book } : { book: Book }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" width={300} height={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book?.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/books/${book?.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;