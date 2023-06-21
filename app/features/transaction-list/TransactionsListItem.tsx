const TransacrionListItem: React.FC = () => {
  return (
    <li className="transoction-list__item">
      <div className="item-container">
        <img src="/path/to/image.jpg" alt="image" className="list-icon" />
        <div className="description-container">
          <div className="head-container">
            <h5 className="description-container__head">Company Name</h5>
            <h5 className="description-container__price">$14.60</h5>
          </div>

          <span className="description-container__description">
            Pending - card Number Used 3%
          </span>
          <br />
          <span className="description-container__description">
            diana -pisda
          </span>
        </div>
        <div className="item-arrow">{">"}</div>
      </div>
    </li>
  );
};

export default TransacrionListItem;
