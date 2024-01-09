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

      return this.loginUser({ email, password });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // LOGIN: CREATE A SESSION FOR USER
  async loginUser(data) {
    const { email, password } = data;

    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // GET CURRENT USER
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
  }

  // DELETE SESSION OF AN USER
  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const appwriteAuth = new AuthService();

export default appwriteAuth;
