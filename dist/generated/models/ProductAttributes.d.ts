import { Metadata } from './Metadata';
export type ProductAttributes = {
    name: string;
    description: string;
    active?: boolean;
    metadata?: Metadata;
};
