import bank from "./bank.png";
import "./pages.css";

export function Home() {
  return (
    <div>
      <div className="bank">
        <img src={bank} alt="Bank" />
      </div>
      <div className="h1">
        <br />
        <h1>Welcome To Your Bad Bank</h1>
      </div>
    </div>
  );
}
