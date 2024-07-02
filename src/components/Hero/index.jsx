const Hero = () => {
    return (
        <div className="flex items-center tablet:pt-[3.2rem] tablet:pb-[4.5rem] tablet:px-20 hp:flex-col hp:absolute hp:z-[-2]">
            <div className="tablet:flex-1 ">
                <div className="tablet:mb-4 hp:text-center hp:relative hp:top-7">
                    <h1 className="tablet:text-display text-primary hp:text-[2.7rem]">Covid ID</h1>
                    <h4 className="tablet:text-h4 text-secondary hp:text-[18px] ">Monitoring Perkembangan Covid</h4>
                </div>
                <div className="tablet:text-h4 tablet:pr-[3rem] hp:px-8">
                    <h4 className="text-gray hp:relative hp:top-[18.7rem] text-justify">{`Lorem Ipsum is simply dummy text of the printing and typesetting industr'y. Lorem Ipsum has been the industrys standard dummy text ever since.`}</h4>
                </div>
                <div className="hp:px-8 hp:text-center">
                <button className="hp:relative hp:top-[19.9rem] hp:px-12 tablet:text-h4 tablet:mt-8 tablet:px-[3.8rem] py-[0.65rem] rounded-lg bg-primary text-white hover:bg-dark-green hover:font-medium transition-colors">Vaccine</button>
                </div>
            </div>
            <div className="tablet:flex-1 hp:py-10">
                <img src="/undraw_medical_care_movn.svg" alt="Medical Care" className="tablet:h-full tablet:mb-[-1.2rem] tablet:w-[95%] tablet:ml-auto hp:w-10/12 hp:m-auto hp:relative hp:bottom-[8.1rem] dekstop:hover:scale-95 dekstop:transition-all "  />
            </div>
        </div>
    )
}

export default Hero;
