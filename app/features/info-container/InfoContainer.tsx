import "./info-container.scss";

const InfoContainer: React.FC = () => {
  return (
    <article className="info-container">
      <div className="left-col">
        <div className=" sup-block">
          <h5 className="card-head">Card Balance</h5>
          <span className="card-balance">$17.30</span>
          <br />
          <span className="card-description">$1,482.70 Available</span>
        </div>
        <div className=" sup-block">
          <h5 className="card-head points">Deally Points</h5>
          <span className="card-description ">456K</span>
        </div>
      </div>
      <div className="right-col">
        <div className="block"></div>
      </div>
    </article>
  );
};

export default InfoContainer;
