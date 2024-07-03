const Card = () => {
    return (
        <div  className={`bg-white tablet:px-[3.11rem] cursor-pointer tablet:py-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-lg hp:mx-14 hp:py-16 hp:mb-9 "
            }`}>
            <h2 className="tablet:text-h2 hp:text-h4 text-dark font-medium"></h2>
            <h1 className={`tablet:text-display hp:text-[2.7rem]`}>
                {/* {
                    data.total.toLocaleString('id-ID')
                } */}
            </h1>
        </div>
    )
}

export default Card;