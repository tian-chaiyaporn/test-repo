import { footer } from '../../constants/strings/footer.js'

export const wellgloSectionLinks = {
  title: footer.wellglo.title,
  links: [
    { to: "/", text: footer.wellglo.home },
    { to: "/about", text: footer.wellglo.about },
    { to: "/", text: footer.wellglo.press },
    { to: "/careers", text: footer.wellglo.careers },
    { to: "/contact", text: footer.wellglo.contact },
    { to: "/help", text: footer.wellglo.help },
    { to: "/articles", text: footer.wellglo.blogs },
    { to: "/directory", text: footer.wellglo.healthQnA },
  ]
}

export const searchSection = {
  title: footer.searchBy.title,
  links: [
    { to: "/", text: footer.searchBy.specialty },
    { to: "/", text: footer.searchBy.procedure },
    { to: "/", text: footer.searchBy.language },
    { to: "/", text: footer.searchBy.location },
    { to: "/", text: footer.searchBy.insurance },
    { to: "/", text: footer.searchBy.reviews },
  ]
}

export const citySection = {
  title: footer.cities.title,
  links: [
    { to: "/", text: footer.cities.bangkok },
    { to: "/", text: footer.cities.nonthaburi },
    { to: "/", text: footer.cities.nakhonRatchasima },
    { to: "/", text: footer.cities.chiangMai },
    { to: "/", text: footer.cities.hatYai },
    { to: "/", text: footer.cities.udonThani },
    { to: "/", text: footer.cities.pakKret },
    { to: "/", text: footer.cities.khonKaen },
  ]
}

export const specialtiesSection = {
  title: footer.specialties.title,
  links: [
    { to: "/", text: footer.specialties.chiropractors },
    { to: "/", text: footer.specialties.dentists },
    { to: "/", text: footer.specialties.dermatologists },
    { to: "/", text: footer.specialties.eyeDoctors },
    { to: "/", text: footer.specialties.gynecologist },
    { to: "/", text: footer.specialties.primaryCareDoctors },
  ]
}

export const providerJoinUsSection = {
  title: footer.providerJoinUs.title,
  links: [{ to: "/", text: footer.providerJoinUs.link }]
}

export const FOOTER_LIST = [
  wellgloSectionLinks,
  searchSection,
  citySection,
  specialtiesSection,
  providerJoinUsSection
]
