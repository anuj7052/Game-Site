import {
  BlobServiceClient,
  ContainerClient,
} from '@azure/storage-blob';

let containerClient: ContainerClient | null = null;

function getContainerClient(): ContainerClient {
  if (containerClient) return containerClient;

  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error('AZURE_STORAGE_CONNECTION_STRING is not configured');
  }

  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'game-assets';
  const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  containerClient = blobServiceClient.getContainerClient(containerName);

  return containerClient;
}

export async function uploadImage(
  fileName: string,
  buffer: Buffer,
  contentType: string = 'image/jpeg'
): Promise<string> {
  const client = getContainerClient();

  await client.createIfNotExists({ access: 'blob' });

  const blockBlobClient = client.getBlockBlobClient(fileName);
  await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: { blobContentType: contentType },
  });

  return blockBlobClient.url;
}

export async function deleteImage(fileName: string): Promise<void> {
  const client = getContainerClient();
  const blockBlobClient = client.getBlockBlobClient(fileName);
  await blockBlobClient.deleteIfExists();
}

export function getImageUrl(fileName: string): string {
  const cdnEndpoint = process.env.AZURE_CDN_ENDPOINT;
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'game-assets';

  if (cdnEndpoint) {
    return `${cdnEndpoint}/${containerName}/${fileName}`;
  }

  const client = getContainerClient();
  return client.getBlockBlobClient(fileName).url;
}

export async function listImages(prefix?: string): Promise<string[]> {
  const client = getContainerClient();
  const urls: string[] = [];

  for await (const blob of client.listBlobsFlat({ prefix })) {
    urls.push(getImageUrl(blob.name));
  }

  return urls;
}
