import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"
import NewsletterForm from "./newsletter-form"
import Link from "next/link"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"

const nameToIcon = name => {
  const dict = {
    "Instagram": <BsInstagram />,
    "Facebook": <FaFacebookF />,
    "Email": <MdOutlineEmail />,
    "Twitter": <BsTwitter />
  }
  return dict[name]
}

const Footer = ({ footer }) => {
  return (
    <footer className="pt-12 bg-green-primary">
      <div className="container flex flex-col lg:flex-row lg:gap-20">
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="font-semibold text-white mb-5">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-white py-1 px-1 -mx-1 hover:text-gray-100 opacity-70"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div>
          <p className="font-semibold text-white mb-5">Contact</p>
          <div>
            <NewsletterForm />
            <div className="mt-4 text-white flex items-center gap-1">
              Follow: {
                footer.socialLinks.map(link => (
                  <a href={link.url}>
                    {nameToIcon(link.platform)}
                  </a>
                ))
              }
            </div>
          </div>
        </div>

      </div>
      <div className="text-sm text-center font-normal bg-green-primary py-6 text-white">
        <div className="container">{footer.smallText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
