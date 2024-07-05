import { GlobalSituation, Hero, SituationRegion } from "../components";
import { useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import URL from "../constants/endpoints";
import axios from "axios";
import provinces from '../constants/provinces';

const Home = () => {
  const [data, setData] = useState(provinces);

  const fetchGlobalCovid = async () => {
    const response = await axios(URL.GLOBAL)
    setData(response.data)
  }

  useEffect(() => fetchGlobalCovid);

  const contextValue = {
    data,
    setData
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      <Hero/>
      <GlobalSituation/>
      <SituationRegion />
    </GlobalContext.Provider>
  );
}

export default Home;
