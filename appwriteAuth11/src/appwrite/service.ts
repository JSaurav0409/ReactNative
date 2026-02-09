import { ID, Account, Client } from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

// Using your exact variable names
// service.ts

// Temporarily hardcode these to bypass the library error
const APPWRITE_ENDPOINT: string = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID: string = '697b5a55002e37861692';

// COMMENT THESE OUT FOR NOW
// const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
// const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
  name: string;
  email: string;
  password: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account: Account;

  constructor() {
    // Check if variables are loaded to prevent the 'startsWith' crash
    if (!APPWRITE_ENDPOINT) {
      console.error('APPWRITE_ENDPOINT is undefined. Check your .env file!');
    }

    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }

  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: createAccount() ::' + error);
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite service :: loginAccount() ::' + error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite Service :: getCurrentUserAccount() :: ' + error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.log('Appwrite Service :: logoutAccount() :: ' + error);
    }
  }
}

// IMPORTANT: Export an instance so the other files can use it immediately
const appwrite = new AppwriteService();
export default appwrite;
