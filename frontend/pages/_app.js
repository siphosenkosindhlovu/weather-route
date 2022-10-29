import App from "next/app"
import Head from "next/head"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import { getStrapiMedia } from "utils/media"
import { getGlobalData } from "utils/api"
import "@/styles/index.css"
import "swiper/css"

const MyApp = ({ Component, pageProps }) => {
  // Extract the data we need
  const { global } = pageProps
  // console.log({ attributes: global.attributes })
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  const { favicon, metaTitleSuffix } = global.attributes
  let metadata = global?.attributes?.metadata
  return (
    <>
      {/* Favicon */}
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(favicon.data.attributes.url)}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
      // openGraph={{
      //   images: Object.values(
      //     metadata?.shareImage?.data?.attributes?.formats
      //   ).map((image) => {
      //     return {
      //       url: getStrapiMedia(image.url),
      //       width: image.width,
      //       height: image.height,
      //     }
      //   }),
      // }}
      // twitter={{
      //   cardType: metadata?.twitterCardType,
      //   handle: metadata?.twitterUsername,
      // }}
      />
      {/* Display the content */}
      <Component {...pageProps} />
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const globalLocale = await getGlobalData(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  }
}

export default MyApp
