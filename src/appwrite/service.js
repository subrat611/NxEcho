import { ID } from "appwrite";

const { databases, storage, appwriteConfig } = require("@/config");

class Service {
  // CREATE NEW POST
  async createPost(data) {
    const { profile_pic, content = null, images } = data;

    try {
      return await databases.createDocument(
        appwriteConfig.APPWRITE_DATABASE_ID,
        appwriteConfig.APPWRITE_FEEDS_COLLECTION_ID,
        ID.unique(),
        {
          profile_pic,
          content,
          images,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // UPDATE EXISTING POST

  // DELETE POST
  async deletePost(id) {
    try {
      await databases.deleteDocument(
        appwriteConfig.APPWRITE_DATABASE_ID,
        appwriteConfig.APPWRITE_FEEDS_COLLECTION_ID,
        id
      );

      return true;
    } catch (error) {
      console.log("Appwrite serive(DELETE POST): ERROR", error);
      return false;
    }
  }

  // GET POSTS
  async getPosts(queries = [Query.limit(10), Query.offset(10)]) {
    try {
      return await databases.listDocuments(
        appwriteConfig.APPWRITE_DATABASE_ID,
        appwriteConfig.APPWRITE_FEEDS_COLLECTION_ID,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive(GET POSTS): ERROR", error);
      return false;
    }
  }
}

const appwriteService = new Service();

export default appwriteService;
