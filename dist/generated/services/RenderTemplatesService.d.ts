import { Meta } from '../models/Meta';
import { RenderTemplateCreateRequest } from '../models/RenderTemplateCreateRequest';
import { RenderTemplateResponse } from '../models/RenderTemplateResponse';
import { TokenResponse } from '../models/TokenResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class RenderTemplatesService {
    /**
     * List all render templates
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @param accountId
     * @returns any A list of render templates
     * @throws ApiError
     */
    static listRenderTemplates(xApiVersion: string, page?: number, perPage?: number, accountId?: string): CancelablePromise<{
        data?: Array<RenderTemplateResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a new render template
     * @param xApiVersion
     * @param requestBody
     * @returns RenderTemplateResponse Render template created successfully
     * @throws ApiError
     */
    static createRenderTemplate(xApiVersion: string, requestBody: RenderTemplateCreateRequest): CancelablePromise<RenderTemplateResponse>;
    /**
     * Retrieve a render template by ID
     * @param xApiVersion
     * @param id
     * @returns RenderTemplateResponse A single render template
     * @throws ApiError
     */
    static getRenderTemplate(xApiVersion: string, id: string): CancelablePromise<RenderTemplateResponse>;
    /**
     * Create a render token for render template
     * @param xApiVersion
     * @param id
     * @returns TokenResponse A render token for the render template
     * @throws ApiError
     */
    static createRenderToken(xApiVersion: string, id: string): CancelablePromise<TokenResponse>;
}
