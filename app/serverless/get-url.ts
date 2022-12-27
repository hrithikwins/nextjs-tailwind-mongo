import clientPromise from "@lib/mongodb";

export async function getCollectionData(collectionName: string, limit: number) {
  const client = await clientPromise;
  const collectionData = client.db().collection(collectionName);

  const links = await collectionData.find().sort({ metacritic: -1 }).limit(limit).toArray();
  return links;
}
