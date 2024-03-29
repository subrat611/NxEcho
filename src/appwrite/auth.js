import { ID } from "appwrite";

const { account, appwriteConfig } = require("@/config");

class AuthService {
  // SIGN UP: CREATE NEW ACCOUNT FOR USER
  async createAccount(data) {
    const { email, password, name } = data;
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (!newAccount) return newAccount;

      this.loginUser({ email, password });
    } catch (error) {
      console.log("Appwrite serive(SIGN UP): ERROR", error);
    }
  }

  // LOGIN: CREATE A SESSION FOR USER
  async loginUser(data) {
    const { email, password } = data;

    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite serive(LOG IN): ERROR", error);
    }
  }

  // GET CURRENT USER
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("Appwrite serive(GET CURRENT USER): ERROR", error);
    }
  }

  async getCurrentSession() {
    try {
      return await account.getSession("current");
    } catch (error) {
      console.log("Appwrite serive(GET CURRENT SESSION): ERROR", error);
    }
  }

  // DELETE SESSION OF AN USER
  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("Appwrite serive(LOG OUT): ERROR", error);
    }
  }
}

const appwriteAuth = new AuthService();

export default appwriteAuth;
