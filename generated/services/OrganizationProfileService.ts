/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationProfileResponse } from '../models/OrganizationProfileResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationProfileService {
    /**
     * Retrieve the organization profile
     * @param xApiVersion
     * @returns OrganizationProfileResponse An organization profile
     * @throws ApiError
     */
    public static getOrganizationProfile(
        xApiVersion: string,
    ): CancelablePromise<OrganizationProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/internal/organization_profile',
            headers: {
                'X-Api-Version': xApiVersion,
            },
        });
    }
}
