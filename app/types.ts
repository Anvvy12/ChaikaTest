interface TransactionType {
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser: string | null;
  logo: string;
}

export default TransactionType;
