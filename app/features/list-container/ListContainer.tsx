import TransactionList from "../transaction-list/TransactionList";

const ListContainer: React.FC = () => {
  return (
    <article className="list-container">
      <label htmlFor="transactionList" className="listLabel">
        Latest Transactions
      </label>
      <TransactionList />
    </article>
  );
};

export default ListContainer;
