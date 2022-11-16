import classNames from "classnames"
import { getStrapiMedia } from "utils/media"

const ActionCTA = ({ data }) => {
    const isBackground = data.imageLayout === "background"
    let imageUrl
    if (isBackground) {
        imageUrl = getStrapiMedia(data.picture.data.attributes.url)
    }
    return (
        <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="container">
                <div className="md:flex">
                    <div className={classNames("md:w-1/2", { "text-white": data.textColor === "light", "text-green-primary": data.textColor === "dark" })}>
                        <h2 className="title">
                            {data.title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionCTA