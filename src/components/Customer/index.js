import CustomerPattern from "../../assets/customer_pattern.svg";
import "./styles.css";

const Customer = () => {
  return (
    <div className="customer-container">
      <img
        src={CustomerPattern}
        alt="customer pattern"
        className="customer-pattern-1"
      />
      <img
        src={CustomerPattern}
        alt="customer pattern"
        className="customer-pattern-2"
      />
      <img
        src={CustomerPattern}
        alt="customer pattern"
        className="customer-pattern-3"
      />

      <img
        src={CustomerPattern}
        alt="customer pattern"
        className="customer-pattern-4"
      />

      <img
        src={CustomerPattern}
        alt="customer pattern"
        className="customer-pattern-5"
      />

      <div className="customer-text">
        <span>We Always Put
        <br /> The Customer First
      </span>
    </div>
    </div>
  );
};

export default Customer;
