import { Form } from '../ui';

const FormCovid = ({ dataProvinsi, setDataProvinsi }) => {
  return (
    <div className="flex tablet:items-center tablet:pt-28 tablet:pb-32 tablet:px-20 hp:flex-col hp:pt-20 hp:pb-24 ">
      <div className="tablet:flex-1">
        <img src="/undraw_conceptual_idea_xw7k.svg" alt="image.svg" className='mx-auto tablet:mb-[-6rem] hp:w-10/12 hp:pb-12 dekstop:hover:scale-95 dekstop:hover:rotate-2 dekstop:transition-all' />
      </div>
      <div className="tablet:flex-1">
        <div className='w-8/12 mx-auto'>
          <h1 className="tablet:text-display text-center text-primary hp:text-[2.7rem] dekstop:hover:-translate-y-5 dekstop:transition-all cursor-pointer">Form Covid</h1>
        </div>
        <div className='w-8/12 mx-auto'>
          <Form dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi} />
        </div>
      </div>
    </div>
  )
}

export default FormCovid;