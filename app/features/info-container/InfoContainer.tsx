import "./info-container.scss";

const InfoContainer: React.FC = () => {
  return (
    <article className="info-container">
      <div className="left-col">
        <div className="info sup-block"></div>
        <div className="info sup-block"></div>
      </div>
      <div className="right-col">
        <div className="info block"></div>
      </div>
    </article>
  );
};

export default InfoContainer;
