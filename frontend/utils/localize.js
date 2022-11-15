import { fetchAPI } from "./api"

export async function getLocalizedPage(targetLocale, pageContext) {
  const localization = pageContext.localizations.data.find(
    (localization) => localization.attributes.locale === targetLocale
  )
  const localePage = await fetchAPI(`/pages/${localization.id}`)
  return localePage
}

export function localizePath(page) {
  const { locale, defaultLocale, slug } = page
  console.log(typeof slug)
  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `${slug === null ? '/' : ('/' + slug)}`
  }

  // The slug should have a localePrefix
  return `/${locale}${slug === null ? '/' : ('/' + slug)}`
}

export function getLocalizedPaths(page) {
  const paths = page.locales.map((locale) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    }
  })

  return paths
}
