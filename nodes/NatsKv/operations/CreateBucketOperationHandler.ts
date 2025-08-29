import { IDataObject } from 'n8n-workflow';
import { Kvm } from '../../../bundled/nats-bundled';
import { KvmOperationHandler, KvmOperationParams } from '../KvmOperationHandler';

export class CreateBucketOperationHandler extends KvmOperationHandler {
	readonly operationName = 'create';

	async execute(kvManager: Kvm, params: KvmOperationParams): Promise<IDataObject> {
		const { bucket, kvConfig } = params;

		const kv = await kvManager.create(bucket, kvConfig);
		return await kv.status();
	}
}
