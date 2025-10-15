import { Meta } from '../models/Meta';
import { ProductCreateRequest } from '../models/ProductCreateRequest';
import { ProductResponse } from '../models/ProductResponse';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class ProductsService {
    /**
     * List all products
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of products
     * @throws ApiError
     */
    static listProducts(xApiVersion: string, xAccountId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<ProductResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new product
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns ProductResponse Product created successfully
     * @throws ApiError
     */
    static createProduct(xApiVersion: string, xAccountId: string, requestBody: ProductCreateRequest): CancelablePromise<ProductResponse>;
    /**
     * Update a product by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the product to update
     * @param requestBody
     * @returns ProductResponse Product updated successfully
     * @throws ApiError
     */
    static updateProduct(xApiVersion: string, xAccountId: string, id: string, requestBody: ProductUpdateRequest): CancelablePromise<ProductResponse>;
}
