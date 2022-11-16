import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"
import { HiArrowLongRight } from "react-icons/hi2"

const ButtonContent = ({ button, appearance, compact, showArrow }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center font-medium text-base md:text-sm border-2",
        // Full-size button
        {
          "px-8 py-2": compact === false || !showArrow,
        },
        // Compact button
        {
          "px-6 py-2": compact === true || showArrow,
        },
        // Specific to when the button is fully dark
        {
          "bg-green-primary text-white border-green-primary": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "text-green-primary border-green-primary": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-white text-green-primary border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        },
        {
          "flex flex-row items-center justify-between": showArrow
        }
      )}
    >
      {button.text}
      <HiArrowLongRight className={classNames({ "ml-4": showArrow })} size={14} />
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false, showArrow }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        showArrow={showArrow}
      />
    </CustomLink>
  )
}

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
  showArrow: PropTypes.bool
}

export default ButtonLink
