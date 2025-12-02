/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SetupIntentConfirmRequest } from '../models/SetupIntentConfirmRequest';
import type { SetupIntentCreateRequest } from '../models/SetupIntentCreateRequest';
import type { SetupIntentResponse } from '../models/SetupIntentResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SetupIntentsService {
    /**
     * Retrieve a setup intent by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the setup intent to retrieve
     * @returns SetupIntentResponse Successful retrieval of setup intent
     * @throws ApiError
     */
    public static getSetupIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
    ): CancelablePromise<SetupIntentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embed/setup_intents/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
        });
    }
    /**
     * Confirm a setup intent
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the setup intent to confirm
     * @param requestBody
     * @returns SetupIntentResponse Successful confirmation of setup intent
     * @throws ApiError
     */
    public static confirmSetupIntent(
        xApiVersion: string,
        xAccountId: string,
        id: string,
        requestBody: SetupIntentConfirmRequest,
    ): CancelablePromise<SetupIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embed/setup_intents/{id}/confirm',
            path: {
                'id': id,
            },
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a new setup intent
     * @param xApiVersion
     * @param xAccountId
     * @param requestBody
     * @returns SetupIntentResponse Successful creation of setup intent
     * @throws ApiError
     */
    public static createSetupIntent(
        xApiVersion: string,
        xAccountId: string,
        requestBody: SetupIntentCreateRequest,
    ): CancelablePromise<SetupIntentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/setup_intents',
            headers: {
                'X-Api-Version': xApiVersion,
                'X-Account-Id': xAccountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
