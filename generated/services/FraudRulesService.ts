/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FraudRuleCreateRequest } from '../models/FraudRuleCreateRequest';
import type { FraudRuleResponse } from '../models/FraudRuleResponse';
import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FraudRulesService {
    /**
     * List all fraud rules
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of fraud rules
     * @throws ApiError
     */
    public static listFraudRules(
        xApiVersion: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<{
        data?: Array<FraudRuleResponse>;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/fraud_rules',
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
     * Create a Fraud Rule
     * @param xApiVersion
     * @param requestBody
     * @returns FraudRuleResponse Fraud Rule created successfully
     * @throws ApiError
     */
    public static createFraudRule(
        xApiVersion: string,
        requestBody: FraudRuleCreateRequest,
    ): CancelablePromise<FraudRuleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/internal/fraud_rules',
            headers: {
                'X-Api-Version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Fraud Rule by ID
     * @param xApiVersion
     * @param id
     * @returns any Fraud Rule deleted successfully
     * @throws ApiError
     */
    public static deleteFraudRule(
        xApiVersion: string,
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/internal/fraud_rules/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
