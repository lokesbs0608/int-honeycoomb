import { useEffect } from "react";
import Layout from "./Component/Layout";
import { useHistory } from "react-router-dom";

const App = () => {
  const navigate = useHistory();
  useEffect(() => {
    navigate.push("/dashboard");
  }, []);
  return <Layout></Layout>;
};

export default App;
