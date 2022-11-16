import NextImage from "../elements/image"
import { CgCheckR } from "react-icons/cg"

const ImageAndList = ({ data }) => {
    return (
        <div className="container my-16">
            <div className="flex flex-col-reverse md:flex-row gap-6">
                <div className="md:w-5/12">
                    <NextImage media={data.image} />
                </div>
                <div className="md:w-7/12">
                    <h2 className="font-bold text-4xl text-green-primary mb-14">{data.title}</h2>
                    <ul>
                        {
                            data.list.map(({ text }, i) => <li key={i} className="text-2xl mb-3 font-medium flex items-center gap-3 text-green-primary"><CgCheckR className="text-turqoise" />{text}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ImageAndList