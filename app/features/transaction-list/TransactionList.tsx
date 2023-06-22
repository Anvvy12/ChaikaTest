import TransacrionListItem from "./TransactionsListItem";
import TransactionType from "@/app/types";
import handler from "@/app/api";
import { useState, useEffect } from "react";

import "./transaction-list.scss";

const TransactionList: React.FC = () => {
  const [data, setData] = useState<TransactionType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setData(handler());
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="transoction-list" id="transactionList">
      {data?.map((item) => (
        <TransacrionListItem
          key={item.date}
          type={item.type}
          amount={item.amount}
          name={item.name}
          description={item.description}
          date={item.date}
          pending={item.pending}
          authorizedUser={item.authorizedUser}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
