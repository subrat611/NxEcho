import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  APPWRITE_ENDPOINT: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
  APPWRITE_PROJECT_ID: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  APPWRITE_DATABASE_ID: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  APPWRITE_COLLECTION_ID: String(
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID
  ),
  APPWRITE_BUCKET_ID: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
};

export const appwriteClient = new Client();

appwriteClient.setEndpoint(appwriteConfig.APPWRITE_ENDPOINT);
appwriteClient.setProject(appwriteClient.APPWRITE_PROJECT_ID);

export const account = new Account(appwriteClient);
export const databases = new Databases(appwriteClient);
export const storage = new Storage(appwriteClient);
