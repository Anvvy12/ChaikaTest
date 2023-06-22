interface TransactionType {
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser: string | null;
}

export default TransactionType;
