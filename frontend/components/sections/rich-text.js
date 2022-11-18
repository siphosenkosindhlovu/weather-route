import PropTypes from "prop-types"
import Markdown from "react-markdown"

const RichText = ({ data }) => {
  return (
    <div className="container py-12">
      {
        data.title &&
        <h2 className="title mb-8">
          {data.title}
        </h2>
      }
      <div className="prose prose-lg">
        <Markdown>{data.content}</Markdown>
      </div>
    </div>
  )
}

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

export default RichText
