import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerResponse } from '../models/CustomerResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { Meta } from '../models/Meta';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class CustomersService {
    /**
     * List all customers
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param email The email to filter by
     * @param phone The phone to filter by
     * @param accountId
     * @returns any A list of customers
     * @throws ApiError
     */
    static listCustomers(xApiVersion: string, page?: number, perPage?: number, email?: string, phone?: string, accountId?: string): CancelablePromise<{
        data?: Array<CustomerResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new customer
     * @param xApiVersion
     * @param requestBody
     * @returns CustomerResponse Customer created successfully
     * @throws ApiError
     */
    static createCustomer(xApiVersion: string, requestBody: CustomerCreateRequest): CancelablePromise<CustomerResponse>;
    /**
     * Retrieve a customer by ID
     * @param xApiVersion
     * @param id
     * @returns CustomerResponse A single customer
     * @throws ApiError
     */
    static getCustomer(xApiVersion: string, id: string): CancelablePromise<CustomerResponse>;
    /**
     * Update a customer by ID
     * @param xApiVersion
     * @param id
     * @param requestBody
     * @returns CustomerResponse Customer updated successfully
     * @throws ApiError
     */
    static updateCustomer(xApiVersion: string, id: string, requestBody: CustomerUpdateRequest): CancelablePromise<CustomerResponse>;
}
