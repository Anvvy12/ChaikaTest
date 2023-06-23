import TransactionType from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { getDayOfWeek } from "@/app/healper";

const TransacrionListItem: React.FC<TransactionType> = ({
  type,
  amount,
  name,
  description,
  date,
  pending,
  authorizedUser,
  logo,
}) => {
  return (
    <li className="transoction-list__item">
      <div className="item-container">
        <div className="logo-container">
          <Image
            src={logo}
            width={40}
            height={40}
            alt={"Company Logo"}
            decoding="async"
          />
        </div>
        <div className="description-container">
          <div className="head-container">
            <h5 className="description-container__head">{name}</h5>
            <h5 className="description-container__price">
              {type === "Payment" ? "-" : "+"}${amount}
            </h5>
          </div>

          <span className="description-container__description">
            {pending ? `Pending - ` : ""}
            {description}
          </span>
          <br />
          <span className="description-container__description">
            {authorizedUser && `${authorizedUser} - `}
            {getDayOfWeek(date)}
          </span>
        </div>

        <div className="item-arrow">
          <Link href={`/detals-page/DetalsPage`}>
            <i className="gg-chevron-right"></i>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default TransacrionListItem;
