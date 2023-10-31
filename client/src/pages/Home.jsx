import { MainPage } from "../components/MainPage";
import { WelcomePage } from "../components/WelcomePage";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return <main>{isLoggedIn ? <MainPage /> : <WelcomePage />}</main>;
};

export default Home;
