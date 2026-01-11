import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Synex</h1>
      <p>One secure view of all your finances</p>
      <button onClick={() => navigate("/connect")}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;

