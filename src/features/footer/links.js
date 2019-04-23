import { footer as footerText } from '../../constants/strings/footer.js'

export const wellgloSectionLinks = {
  title: footerText.wellglo.title,
  links: [
    { to: "/", text: footerText.wellglo.home },
    { to: "/about", text: footerText.wellglo.about },
    { to: "/", text: footerText.wellglo.press },
    { to: "/careers", text: footerText.wellglo.careers },
    { to: "/contact", text: footerText.wellglo.contact },
    { to: "/help", text: footerText.wellglo.help },
    { to: "/articles", text: footerText.wellglo.blogs },
    { to: "/directory", text: footerText.wellglo.healthQnA },
  ]
}

export const searchSection = {
  title: footerText.searchBy.title,
  links: [
    { to: "/", text: footerText.searchBy.specialty },
    { to: "/", text: footerText.searchBy.procedure },
    { to: "/", text: footerText.searchBy.language },
    { to: "/", text: footerText.searchBy.location },
    { to: "/", text: footerText.searchBy.insurance },
    { to: "/", text: footerText.searchBy.reviews },
  ]
}

export const citySection = {
  title: footerText.cities.title,
  links: [
    { to: "/", text: footerText.cities.bangkok },
    { to: "/", text: footerText.cities.nonthaburi },
    { to: "/", text: footerText.cities.nakhonRatchasima },
    { to: "/", text: footerText.cities.chiangMai },
    { to: "/", text: footerText.cities.hatYai },
    { to: "/", text: footerText.cities.udonThani },
    { to: "/", text: footerText.cities.pakKret },
    { to: "/", text: footerText.cities.khonKaen },
  ]
}

export const specialtiesSection = {
  title: footerText.specialties.title,
  links: [
    { to: "/", text: footerText.specialties.chiropractors },
    { to: "/", text: footerText.specialties.dentists },
    { to: "/", text: footerText.specialties.dermatologists },
    { to: "/", text: footerText.specialties.eyeDoctors },
    { to: "/", text: footerText.specialties.gynecologist },
    { to: "/", text: footerText.specialties.primaryCareDoctors },
  ]
}

export const providerJoinUsSection = {
  title: footerText.providerJoinUs.title,
  links: [
    { to: "/", text: footerText.providerJoinUs.link },
  ]
}

export const FOOTER_LIST = [
  wellgloSectionLinks,
  searchSection,
  citySection,
  specialtiesSection,
  providerJoinUsSection
]
