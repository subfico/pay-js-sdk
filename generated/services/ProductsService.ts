/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { ProductCreateRequest } from '../models/ProductCreateRequest';
import type { ProductResponse } from '../models/ProductResponse';
import type { ProductUpdateRequest } from '../models/ProductUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * List all products
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of products
     * @throws ApiError
     */
    public static listProducts(
        xApiVersion: string,
        xAccountId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<ProductResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a new product
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns ProductResponse Product created successfully
     * @throws ApiError
     */
    public static createProduct(
        xApiVersion: string,
        xAccountId: string,
        requestBody: ProductCreateRequest,
    ): CancelablePromise<ProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Error creating product`,
            },
        });
    }
    /**
     * Update a product by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the product to update
     * @param requestBody
     * @returns ProductResponse Product updated successfully
     * @throws ApiError
     */
    public static updateProduct(
        xApiVersion: string,
        xAccountId: string,
        id: string,
        requestBody: ProductUpdateRequest,
    ): CancelablePromise<ProductResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Error updating product`,
            },
        });
    }
}
