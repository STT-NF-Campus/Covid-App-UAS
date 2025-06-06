import axios from "axios";
import { Hero, IndonesiaSituation, SituationProvinces } from "../../components";
import { useEffect, useState } from "react";
import provinces from "../../constants/provinces";
import URL from "../../constants/endpoints";
import IndonesiaContext from "../../context/IndonesiaContext";

const Indonesia = () => {
    const [data, setData] = useState(provinces);

    const fetchIndonesiaCovid = async () => {
        const response = await axios(URL.INDONESIA);
        setData(response.data);
    }

    useEffect(() => {
        fetchIndonesiaCovid()
    }, []);

    const contextValue = {
        data,
        setData
    }

    return (
        <IndonesiaContext.Provider value={contextValue}>
            <Hero />
            <IndonesiaSituation />
            <SituationProvinces />
        </IndonesiaContext.Provider>
    )
}

export default Indonesia;
