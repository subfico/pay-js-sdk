import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountResponse } from '../models/AccountResponse';
import { Meta } from '../models/Meta';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class AccountsService {
    /**
     * List all accounts
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of accounts
     * @throws ApiError
     */
    static listAccounts(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<AccountResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new account
     * @param xApiVersion
     * @param requestBody
     * @returns AccountResponse Account created successfully
     * @throws ApiError
     */
    static createAccount(xApiVersion: string, requestBody: AccountCreateRequest): CancelablePromise<AccountResponse>;
    /**
     * Retrieve an account by ID
     * @param xApiVersion
     * @param id
     * @returns AccountResponse A single account
     * @throws ApiError
     */
    static getAccount(xApiVersion: string, id: string): CancelablePromise<AccountResponse>;
}
