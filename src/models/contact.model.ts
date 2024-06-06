export interface Contact {
    id: string;
    name: string;
    email: string | null;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    favorite: boolean;
}