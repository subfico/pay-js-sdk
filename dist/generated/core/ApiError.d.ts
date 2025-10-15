import { ApiRequestOptions } from './ApiRequestOptions';
import { ApiResult } from './ApiResult';
export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}
