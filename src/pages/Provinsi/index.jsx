import { useState } from "react";
import { FormCovid, Hero, ProvinsiTable } from "../../components";
import provinces from '../../constants/provinces';
import ProvinsiContext from "../../context/ProvinsiContext";

const Provinsi = () => {
    const [data, setData] = useState(provinces);

    const contextValue = {
        data,
        setData
    }

    return (
        <ProvinsiContext.Provider value={contextValue}>
            <Hero />
            <ProvinsiTable />
            <FormCovid />
        </ProvinsiContext.Provider>
    )
}

export default Provinsi;