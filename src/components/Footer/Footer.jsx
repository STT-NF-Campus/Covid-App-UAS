const Footer = () => {
    return (
        <div className="flex items-center justify-between px-20 py-[1.9rem] hp:flex-col-reverse hp:text-center hp:pb-7 hp:px-7 hp:pt-[0.8rem]">
            <div className="pb-[0.15rem]">
                <h4 className="text-h2 hp:text-h3 text-white">Covid ID</h4>
                <h4 className="text-h4 hp:text-p text-white pt-[0.1rem] hp:pt-1">Developed by z.dacoder</h4>
            </div>
            <div className="hp:mb-5">
                <ul className="flex gap-8 text-h4 hp:text-p text-white hp:gap-[1.7rem]">
                    <li className="">Global</li>
                    <li className="">Indonesia</li>
                    <li className="">Provinsi</li>
                    <li className="">About</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
