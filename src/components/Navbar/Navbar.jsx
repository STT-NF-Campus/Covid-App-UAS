import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="tablet:flex tablet:justify-between tablet:items-center dekstop:px-20 dekstop:py-6 tablet:px-24 tablet:py-4 bg-primary">
            <div className="text-white hp:py-4 hp:px-7 hp:flex hp:items-center hp:justify-between hp:shadow-lg">
                <div className="cursor-pointer">
                    <a href="#navbar">
                        <h1 className='dekstop:text-h1 tablet:text-h2 hp:text-h3 dekstop:hover:scale-110 dekstop:transition-all'>
                            Covid ID
                        </h1>
                    </a>
                </div>
                <div onClick={handleClick} className="dekstop:hidden tablet:hidden hp:transition-shadow hp:cursor-pointer">
                    <FontAwesomeIcon className='fa-2x' icon={click ? faXmark : faBars} />
                </div>
            </div>
            <div className={`hp:pb-6 hp:absolute dekstop:text-h4 hp:bg-dark-green hp:z-[-1] hp:w-full hp:transition-all hp:duration-500 hp:ease-in ${click ? 'hp:top-[4.9rem]' : 'hp:top-[-280px]'}`}>
                <ul className="tablet:flex dekstop:gap-x-12 tablet:gap-x-10 text-white hp:text-center">
                    <li className="hp:py-3 hp:mt-6 hp:hover:bg-primary hp:transition-colors hp:cursor-pointer hp:hover:font-medium dekstop:hover:scale-110 dekstop:transition-all">
                        <a href="#">Global</a>
                    </li>
                    <li className="hp:py-3 hp:mt-2 hp:hover:bg-primary hp:transition-colors hp:cursor-pointer hp:hover:font-medium dekstop:hover:scale-110 dekstop:transition-all">
                        <a href="#data-section">Indonesia</a>
                    </li>
                    <li className="hp:py-3 hp:mt-2 hp:hover:bg-primary hp:transition-colors hp:cursor-pointer hp:hover:font-medium dekstop:hover:scale-110 dekstop:transition-all">
                        <a href="#table-section">Provinsi</a>
                    </li>
                    <li className="hp:py-3 hp:mt-2 hp:hover:bg-primary hp:transition-colors hp:cursor-pointer hp:hover:font-medium dekstop:hover:scale-110 dekstop:transition-all">
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
