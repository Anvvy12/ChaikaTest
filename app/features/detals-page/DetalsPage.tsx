import { useRouter } from "next/router";

const DetalsPage: React.FC = () => {
  const router = useRouter();
  const { date } = router.query;

  // Отримання даних або виконання необхідних дій з використанням значення `date`

  return (
    <div>
      <h1>Details Page</h1>
      <p>Date: {date}</p>
      {/* Інші елементи для відображення деталей сторінки */}
    </div>
  );
};

export default DetalsPage;
