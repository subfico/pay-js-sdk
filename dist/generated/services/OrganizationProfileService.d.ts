import { OrganizationProfileResponse } from '../models/OrganizationProfileResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class OrganizationProfileService {
    /**
     * Retrieve the organization profile
     * @param xApiVersion
     * @returns OrganizationProfileResponse An organization profile
     * @throws ApiError
     */
    static getOrganizationProfile(xApiVersion: string): CancelablePromise<OrganizationProfileResponse>;
}
