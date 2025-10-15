import { CheckoutTemplateCreateRequest } from '../models/CheckoutTemplateCreateRequest';
import { CheckoutTemplateResponse } from '../models/CheckoutTemplateResponse';
import { Meta } from '../models/Meta';
import { TokenResponse } from '../models/TokenResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class CheckoutTemplatesService {
    /**
     * List all checkout templates
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param accountId
     * @returns any A list of checkout templates
     * @throws ApiError
     */
    static listCheckoutTemplates(xApiVersion: string, page?: number, perPage?: number, accountId?: string): CancelablePromise<{
        data?: Array<CheckoutTemplateResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new checkout template
     * @param xApiVersion
     * @param requestBody
     * @returns CheckoutTemplateResponse Checkout template created successfully
     * @throws ApiError
     */
    static createCheckoutTemplate(xApiVersion: string, requestBody: CheckoutTemplateCreateRequest): CancelablePromise<CheckoutTemplateResponse>;
    /**
     * Retrieve a checkout template by ID
     * @param xApiVersion
     * @param id
     * @returns CheckoutTemplateResponse A single checkout template
     * @throws ApiError
     */
    static getCheckoutTemplate(xApiVersion: string, id: string): CancelablePromise<CheckoutTemplateResponse>;
    /**
     * Create a render token for checkout template
     * @param xApiVersion
     * @param id
     * @returns TokenResponse A render token for the checkout template
     * @throws ApiError
     */
    static createRenderToken(xApiVersion: string, id: string): CancelablePromise<TokenResponse>;
}
