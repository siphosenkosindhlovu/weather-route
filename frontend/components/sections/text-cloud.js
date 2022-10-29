import classnames from "classnames"

const TextCloud = ({ data }) => {
    return (
        <div className="container py-12 text-center">
            <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
            <p className="font-medium mb-14">{data.subtitle}</p>
            <div className="lg:grid grid-cols-6">
                {data.textLines.map(line => (
                    <div className={classnames({ 'col-span-3': line.width === "half", 'col-span-4': line.width === "two thirds", 'col-span-6': line.width === "full", "opacity-80": line.isLighter }, `text-${line.align}`, 'text-turqoise', 'text-2xl', 'font-bold', 'mb-10')}>
                        {line.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TextCloud