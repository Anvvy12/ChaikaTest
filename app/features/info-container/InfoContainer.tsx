import "./info-container.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { generateBalance, calculateDailyPoints, getMonth } from "@/app/healper";
import { useState, useEffect } from "react";

const InfoContainer: React.FC = () => {
  useEffect(() => {
    setBalance(generateBalance());
    setdailyPoints(calculateDailyPoints());
    setIsLoading(false);
  }, []);
  const [balance, setBalance] = useState<number>(0);
  const [dailyPoints, setdailyPoints] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <article className="info-container">
      <div className="left-col">
        <div className=" sup-block">
          <h5 className="card-head">Card Balance</h5>
          <span className="card-balance">
            {isLoading ? "Loading..." : `$ ${balance}`}
          </span>
          <br />
          <span className="card-description">{`${(1500 - balance).toFixed(
            2
          )} Available`}</span>
        </div>
        <div className=" sup-block">
          <h5 className="card-head points">Daily Points</h5>
          <span className="card-description ">
            {isLoading ? "Loading..." : dailyPoints}
          </span>
        </div>
      </div>
      <div className="right-col">
        <div className="block">
          <div className="block-head">
            <span className="block-head">No Payment Due</span>
            <br />
            <span className="block-description">
              {`You\`ve paid your ${getMonth()}  balance.`}
            </span>
          </div>
          <div className="block-check">
            <div className="block-circle">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#000000", height: " 25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoContainer;
