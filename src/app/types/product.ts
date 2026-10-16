export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    price: number;
    currency: string;
    stock_quantity: number;
    is_active: boolean;
    images: string[];
    created_at: string; // ISO 8601 date string (e.g., "2026-01-15T08:30:00Z")
}