/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { RenderTemplateCreateRequest } from '../models/RenderTemplateCreateRequest';
import type { RenderTemplateResponse } from '../models/RenderTemplateResponse';
import type { TokenResponse } from '../models/TokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RenderTemplatesService {
    /**
     * List all render templates
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param accountId
     * @returns any A list of render templates
     * @throws ApiError
     */
    public static listRenderTemplates(
        xApiVersion: string,
        page?: number,
        perPage?: number,
        accountId?: string,
    ): CancelablePromise<{
        data?: Array<RenderTemplateResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/render_templates',
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
     * Create a new render template
     * @param xApiVersion
     * @param requestBody
     * @returns RenderTemplateResponse Render template created successfully
     * @throws ApiError
     */
    public static createRenderTemplate(
        xApiVersion: string,
        requestBody: RenderTemplateCreateRequest,
    ): CancelablePromise<RenderTemplateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/render_templates',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a render template by ID
     * @param xApiVersion
     * @param id
     * @returns RenderTemplateResponse A single render template
     * @throws ApiError
     */
    public static getRenderTemplate(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<RenderTemplateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/render_templates/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
    /**
     * Create a render token for render template
     * @param xApiVersion
     * @param id
     * @returns TokenResponse A render token for the render template
     * @throws ApiError
     */
    public static createRenderToken(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/render_templates/{id}/token',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
