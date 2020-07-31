import { readDatabase } from "./index";

const getAllAccounts = () => {
  try {
    readDatabase();
  } catch (error) {
    console.log(error);
  }
};

getAllAccounts();
