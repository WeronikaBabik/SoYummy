import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register", { replace: true });
  };

  const handleLoginClick = () => {
    navigate("/login", { replace: true });
  };
  return <div>Welcome Page</div>;
};
