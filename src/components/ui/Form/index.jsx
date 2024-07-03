// import { useState } from 'react';

const Form = () => {
    // const [provinsi, setProvinsi] = useState('Jakarta');
    // const [status, setStatus] = useState('kasus');
    // const [jumlah, setJumlah] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const newDataProvinsi = dataProvinsi.map((item) => {
        //     if (item.kota === provinsi) {
        //         item[status] = parseInt(item[status]) + parseInt(jumlah);
        //     }
        //     return item;
        // });
        // setDataProvinsi(newDataProvinsi);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label htmlFor="provinsi" className="text-[24px] text-gray">Provinsi</label>
                    <div className="">
                        <select name="provinsi" id="provinsi" className='rounded-md border-2 border-primary w-full py-2 px-2 appearance-none hover:border-primary'>
                            {/* {dataProvinsi.map((item, index) => (
                                <option key={index} value={item.kota}>{item.kota}</option>
                            ))} */}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="text-[24px] text-gray">Status</label>
                    <div className="">
                        <select name="status" id="status" className='rounded-md border-2 border-primary w-full py-2 px-2 appearance-none hover:border-primary'>
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="meninggal">Meninggal</option>
                            <option value="dirawat">Dirawat</option>
                        </select>
                    </div>
                </div>
                <div className="mb-7">
                    <label htmlFor="jumlah" className="text-[24px] text-gray">Jumlah</label>
                    <div className="">
                        <input type="number" name="jumlah" id="jumlah" className="rounded-md border-2 border-primary w-full py-2 px-2 hover:border-primary" placeholder='0' required min={1} />
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="bg-primary py-2 text-[24px] text-white rounded-md w-full hover:bg-dark-green">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
