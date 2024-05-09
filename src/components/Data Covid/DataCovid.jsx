import data from '../../constants/indonesia';
import Card from '../Card/Card';
const DataCovid = () => {
  const dataCovid = data.indonesia;
  return (
    <div className="text-center tablet:pt-24 tablet:pb-[7.8rem] hp:absolute hp:w-full hp:mt-[610px] hp:bg-[#F8F9FA] ">
      <div className="mb-12 hp:relative hp:top-5 hp:mt-7">
        <h1 className='tablet:text-display text-primary hp:text-[2.7rem] dekstop:hover:-translate-y-3 dekstop:transition-all cursor-pointer'>Indonesia</h1>
        <h4 className='tablet:text-h4 text-secondary hp:text-[18px] mt-[-0.3rem]'>Data Covid Berdasarkan Indonesia</h4>
      </div>
      <div className="flex tablet:items-center tablet:justify-center tablet:gap-5 hp:flex-col tablet:flex-col dekstop:flex-row hp:pt-5">
        {dataCovid.map((item, index) => <Card key={index} data={item} />)}
      </div>
    </div>
  )
}

export default DataCovid
