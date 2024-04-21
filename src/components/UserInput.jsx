const LABELS = {
  initalInvestment: "INITIAL INVESTMENT",
  annualInvestment: "ANNUAL INVESTMENT",
  expectedReturn: "EXPECTED RETURN",
  duration: "DURATION",
};

export default function UserInput({ handleInvestmentData }) {
  return (
    <div className="input-group">
      {Object.keys(LABELS).map((key) => (
        <div id="user-input" key={key}>
          <label>{LABELS[key]}</label>
          <input type="number" name={key} onChange={handleInvestmentData} />
        </div>
      ))}
    </div>
  );
}
