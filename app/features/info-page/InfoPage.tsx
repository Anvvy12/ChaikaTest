import InfoContainer from "../info-container/InfoContainer";
import ListContainer from "../list-container/ListContainer";
import "./info-page.scss";

const InfoPage: React.FC = () => {
  return (
    <main className="main">
      <InfoContainer />
      <ListContainer />
    </main>
  );
};

export default InfoPage;
