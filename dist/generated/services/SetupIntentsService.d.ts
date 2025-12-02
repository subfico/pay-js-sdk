import { SetupIntentConfirmRequest } from '../models/SetupIntentConfirmRequest';
import { SetupIntentCreateRequest } from '../models/SetupIntentCreateRequest';
import { SetupIntentResponse } from '../models/SetupIntentResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class SetupIntentsService {
    /**
     * Retrieve a setup intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the setup intent to retrieve
     * @returns SetupIntentResponse Successful retrieval of setup intent
     * @throws ApiError
     */
    static getSetupIntent(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<SetupIntentResponse>;
    /**
     * Confirm a setup intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the setup intent to confirm
     * @param requestBody
     * @returns SetupIntentResponse Successful confirmation of setup intent
     * @throws ApiError
     */
    static confirmSetupIntent(xApiVersion: string, xAccountId: string, id: string, requestBody: SetupIntentConfirmRequest): CancelablePromise<SetupIntentResponse>;
    /**
     * Create a new setup intent
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SetupIntentResponse Successful creation of setup intent
     * @throws ApiError
     */
    static createSetupIntent(xApiVersion: string, xAccountId: string, requestBody: SetupIntentCreateRequest): CancelablePromise<SetupIntentResponse>;
}
