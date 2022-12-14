import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import Loader from "./loader"

const Button = ({
  button,
  appearance,
  compact = false,
  handleClick,
  loading = false,
  type,
  showArrow
}) => {
  return (
    <button link={button} onClick={handleClick} type={type}>
      <div
        className={classNames(
          // Common classes
          "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md",
          // Full-size button
          {
            "px-8 py-4": compact === false,
          },
          // Compact button
          {
            "px-6 py-2": compact === true,
          },
          // Specific to when the button is fully dark
          {
            "bg-green-primary text-white border-green-primary":
              appearance === "dark",
          },
          // Specific to when the button is dark outlines
          {
            "text-green-primary border-green-primary":
              appearance === "dark-outline",
          },
          // Specific to when the button is fully white
          {
            "bg-white text-green-primary border-white": appearance === "white",
          },
          // Specific to when the button is white outlines
          {
            "text-white border-white": appearance === "white-outline",
          }
        )}
      >
        {loading && <Loader />}
        {button.text}
      </div>
    </button>
  )
}

Button.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
}

export default Button
