import { FraudRuleCreateRequest } from '../models/FraudRuleCreateRequest';
import { FraudRuleResponse } from '../models/FraudRuleResponse';
import { Meta } from '../models/Meta';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class FraudRulesService {
    /**
     * List all fraud rules
     * @param xApiVersion
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of fraud rules
     * @throws ApiError
     */
    static listFraudRules(xApiVersion: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<FraudRuleResponse>;
        meta?: Meta;
    }>;
    /**
     * Create a Fraud Rule
     * @param xApiVersion
     * @param requestBody
     * @returns FraudRuleResponse Fraud Rule created successfully
     * @throws ApiError
     */
    static createFraudRule(xApiVersion: string, requestBody: FraudRuleCreateRequest): CancelablePromise<FraudRuleResponse>;
    /**
     * Delete a Fraud Rule by ID
     * @param xApiVersion
     * @param id
     * @returns any Fraud Rule deleted successfully
     * @throws ApiError
     */
    static deleteFraudRule(xApiVersion: string, id: string): CancelablePromise<any>;
}
