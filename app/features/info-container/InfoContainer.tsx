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
          <h5 className="card-head points">Dailly Points</h5>
          <span className="card-description ">456K</span>
        </div>
      </div>
      <div className="right-col">
        <div className="block">
          <div className="block-head">
            <span className="block-head">No Payment Due</span>
            <br />
            <span className="block-description">
              You`ve paid your September balance.
            </span>
          </div>
          <div className="block-check">
            <div className="block-circle"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoContainer;
