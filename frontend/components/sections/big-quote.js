const BigQuote = ({ data }) => {

    return (
        <div className="bg-green-primary text-white">
            <div className="container my-16">
                <div className="pt-16 w-48 font-bold text-xl after:content-[' '] after:block after:w-24 after:h-[5px] after:bg-yellow-400">
                    {data.citation}
                </div>
                <div className="font-bold text-5xl text-center py-16 max-w-[30ch]">
                    {data.quote}
                </div>
            </div>
        </div>
    )
}

export default BigQuote