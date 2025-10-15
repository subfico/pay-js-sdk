import { Meta } from '../models/Meta';
import { PaymentSnapshotResponse } from '../models/PaymentSnapshotResponse';
import { CancelablePromise } from '../core/CancelablePromise';
export declare class PaymentSnapshotsService {
    /**
     * List payment snapshots
     * @param xApiVersion
     * @param xAccountId
     * @param page The page of results to retrieve.
     * @param perPage Number of results per page.
     * @returns any A list of payment snapshots
     * @throws ApiError
     */
    static listPaymentSnapshots(xApiVersion: string, xAccountId: string, page?: number, perPage?: number): CancelablePromise<{
        data?: Array<PaymentSnapshotResponse>;
        meta?: Meta;
    }>;
    /**
     * Retrieve a payment by ID
     * @param xApiVersion
     * @param xAccountId
     * @param id The ID of the payment snapshot to retrieve
     * @returns PaymentSnapshotResponse Successful retrieval of payment snapshot
     * @throws ApiError
     */
    static getPaymentSnapshot(xApiVersion: string, xAccountId: string, id: string): CancelablePromise<PaymentSnapshotResponse>;
}
