const Table = () => {
    return (
        <>
            <table className="border-[1.5px] border-gray  ">
                <thead className="border-[1.5px] border-gray">
                    <tr>
                        <th className='border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.2rem] tablet:px-7 hp:px-[0.3rem] text-primary'>No</th>
                        {/* {Object.keys(dataProvinsi[0]).map((item, index) => (
                            <th key={index} className={`border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem]  tablet:px-7 text-primary ${item === 'kota' ? 'hp:px-[4rem]' : 'hp:px-[0.7rem]'
                                } `}>{
                                    item === 'kota' ? 'Provinsi' : item === 'kasus' ? 'Positif' : item.charAt(0).toUpperCase() + item.slice(1)
                                }</th>
                        ))} */}
                    </tr>
                </thead>
                <tbody>
                    {/* {dataProvinsi.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray ">{index + 1}</td>
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray hp: ">{item.kota}</td>
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray ">{item.kasus}</td>
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray ">{item.sembuh}</td>
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray ">{item.meninggal}</td>
                            <td className="border-[1.5px] border-gray tablet:py-[0.7rem] hp:py-[0.4rem] hp:px-[0.5rem] tablet:px-7 text-gray ">{item.dirawat}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </>
    )
}

export default Table
