export interface Book {
    id: string;
    name: string;
    slug: string;
    author: string;
    category: string;
    price: number;
    currency: string;
    rating: number;
    stock_quantity: number;
    is_available: boolean;
    cover_image: string;
    published_year: number;
    created_at: string;
}