const Card = ({ key, data }) => {
    return (
        <div key={key} className={`bg-white tablet:px-[3.11rem] cursor-pointer tablet:py-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] rounded-lg hp:mx-14 hp:py-16 hp:mb-9 ${data.status === 'Sembuh' ? "hover:drop-shadow-[0_4px_2px_#118AB2]" : data.status === 'Meninggal' ? "hover:drop-shadow-[0_4px_2px_#EF476F]" : "hover:drop-shadow-[0_4px_2px_#06D6A0]"
            }`}>
            <h2 className="tablet:text-h2 hp:text-h4 text-dark font-medium">{data.status}</h2>
            <h1 className={`tablet:text-display hp:text-[2.7rem]
            ${data.status === 'Sembuh' ? "text-secondary" : data.status === 'Meninggal' ? "text-danger" : "text-primary"}`}>{
                    data.total.toLocaleString('id-ID')
                }</h1>
        </div>
    )
}

export default Card;