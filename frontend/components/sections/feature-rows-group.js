import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start md:justify-between md:items-center gap-10",
            {
              "md:flex-row": index % 2 === 0,
              "md:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full md:w-7/12 md:pr-6 text-lg">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            {feature.link && (<CustomLink link={feature.link}>
              <div className="text-blue-600 with-arrow hover:underline">
                {feature.link.text}
              </div>
            </CustomLink>)}
          </div>
          {/* Media section */}
          <div className="w-full sm:9/12 md:w-3/12 max-h-full">
            {/* Images */}
            {feature.media.data.attributes.mime.startsWith("image") && (
              <div className="w-1/2 md:w-full h-auto m-auto">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
            {feature.media.data.attributes.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup
