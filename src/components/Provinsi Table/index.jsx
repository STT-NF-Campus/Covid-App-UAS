import { Table } from '../ui';

const ProvinsiTable = ({ dataProvinsi }) => {
    return (
        <div className="flex flex-col items-center pt-[6.7rem] pb-32 hp:mt-[96rem]">
            <div>
                <div className='text-center'>
                    <h1 className='tablet:text-display text-primary hp:text-[2.7rem] dekstop:hover:-translate-y-3 dekstop:transition-all cursor-pointer'>Provinsi</h1>
                </div>
                <div className='text-center'>
                    <h4 className='tablet:text-h4 text-secondary hp:text-[18px]'>Data Covid Berdasarkan Provinsi</h4>
                </div>
            </div>
            <div className='tablet:mt-14 overflow-x-auto hp:w-[78.8%] hp:mt-8 dekstop:hover:shadow-xl dekstop:hover:shadow-primary dekstop:transition-all dekstop:duration-300'>
                <Table dataProvinsi={dataProvinsi} />
            </div>
        </div>
    )
}

export default ProvinsiTable