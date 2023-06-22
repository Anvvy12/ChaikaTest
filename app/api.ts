import data from "./data.json";
import TransactionType from "./types";

const handler = (): TransactionType[] => {
  return data.transactions;
};

export default handler;
