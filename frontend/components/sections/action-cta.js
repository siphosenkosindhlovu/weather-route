import classNames from "classnames"
import { getStrapiMedia } from "utils/media"
import CustomLink from "../elements/custom-link"
import NextImage from "../elements/image"
import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "utils/button"

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
                    <div className={classNames("md:w-1/2 my-16", { "text-white": data.textColor === "light", "text-green-primary": data.textColor === "dark" })}>
                        <h2 className="title mb-5">
                            {data.title}
                        </h2>
                        <p>
                            {data.description}
                        </p>
                        <div className="flex flex-row flex-wrap gap-4 mt-auto mb-5">
                            {data.appStoreLinks.map((link) => (
                                <CustomLink
                                    link={link}
                                    key={link.id}
                                >
                                    <NextImage width={120} height={135} media={link.image} />
                                </CustomLink>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap gap-4">
                            {data.buttons.map((button) => (
                                <ButtonLink
                                    button={button}
                                    appearance={getButtonAppearance(button.type, "light")}
                                    key={button.id}
                                    showArrow={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classNames({ "md:w-[50vw]": data.imageLayout === "fullBleed" })}>
                        <NextImage media={data.picture} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionCTA