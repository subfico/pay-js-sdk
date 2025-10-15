/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutTemplateCreateRequest } from '../models/CheckoutTemplateCreateRequest';
import type { CheckoutTemplateResponse } from '../models/CheckoutTemplateResponse';
import type { Meta } from '../models/Meta';
import type { TokenResponse } from '../models/TokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckoutTemplatesService {
    /**
     * List all checkout templates
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param accountId
     * @returns any A list of checkout templates
     * @throws ApiError
     */
    public static listCheckoutTemplates(
        xApiVersion: string,
        page?: number,
        perPage?: number,
        accountId?: string,
    ): CancelablePromise<{
        data?: Array<CheckoutTemplateResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/checkout_templates',
            path: {
                'account_id': accountId,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }
    /**
     * Create a new checkout template
     * @param xApiVersion
     * @param requestBody
     * @returns CheckoutTemplateResponse Checkout template created successfully
     * @throws ApiError
     */
    public static createCheckoutTemplate(
        xApiVersion: string,
        requestBody: CheckoutTemplateCreateRequest,
    ): CancelablePromise<CheckoutTemplateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkout_templates',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a checkout template by ID
     * @param xApiVersion
     * @param id
     * @returns CheckoutTemplateResponse A single checkout template
     * @throws ApiError
     */
    public static getCheckoutTemplate(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<CheckoutTemplateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/checkout_templates/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
    /**
     * Create a render token for checkout template
     * @param xApiVersion
     * @param id
     * @returns TokenResponse A render token for the checkout template
     * @throws ApiError
     */
    public static createRenderToken(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkout_templates/{id}/token',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
