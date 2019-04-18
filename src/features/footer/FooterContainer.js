import React from 'react'
import { footer as footerText } from '../../constants/strings/footer.js'
import { Link } from '../../Router.js'

export const Footer = () => {
  const wellgloSection = () => (
    <div>
      <div>{footerText.wellglo.title}</div>
      <Link to="/">{footerText.wellglo.home}</Link>
      <Link to="/about">{footerText.wellglo.about}</Link>
      <Link to="/">{footerText.wellglo.press}</Link>
      <Link to="/careers">{footerText.wellglo.careers}</Link>
      <Link to="/contact">{footerText.wellglo.contact}</Link>
      <Link to="/help">{footerText.wellglo.help}</Link>
      <Link to="/articles">{footerText.wellglo.blogs}</Link>
      <Link to="/directory">{footerText.wellglo.healthQnA}</Link>
    </div>
  ) 

  const searchSection = () => (
    <div>
      <div>{footerText.searchBy.title}</div>
      <Link to="/">{footerText.searchBy.specialty}</Link>
      <Link to="/">{footerText.searchBy.procedure}</Link>
      <Link to="/">{footerText.searchBy.language}</Link>
      <Link to="/">{footerText.searchBy.location}</Link>
      <Link to="/">{footerText.searchBy.insurance}</Link>
      <Link to="/">{footerText.searchBy.reviews}</Link>
    </div>
  ) 
  
  const citySection = () => (
    <div>
      <div>{footerText.cities.title}</div>
      <Link to="/">{footerText.cities.bangkok}</Link>
      <Link to="/">{footerText.cities.nonthaburi}</Link>
      <Link to="/">{footerText.cities.nakhonRatchasima}</Link>
      <Link to="/">{footerText.cities.chiangMai}</Link>
      <Link to="/">{footerText.cities.hatYai}</Link>
      <Link to="/">{footerText.cities.udonThani}</Link>
      <Link to="/">{footerText.cities.pakKret}</Link>
      <Link to="/">{footerText.cities.khonKaen}</Link>
    </div>
  ) 

  const specialtiesSection = () => (
    <div>
      <div>{footerText.specialties.title}</div>
      <Link to="/">{footerText.specialties.chiropractors}</Link>
      <Link to="/">{footerText.specialties.dentists}</Link>
      <Link to="/">{footerText.specialties.dermatologists}</Link>
      <Link to="/">{footerText.specialties.eyeDoctors}</Link>
      <Link to="/">{footerText.specialties.gynecologist}</Link>
      <Link to="/">{footerText.specialties.primaryCareDoctors}</Link>
      <Link to="/">{footerText.specialties.psychiatrists}</Link>
    </div>
  ) 

  const providerJoinUsSection = () => (
    <div>
      <div>{footerText.providerJoinUs.title}</div>
      <Link to="/">{footerText.providerJoinUs.link}</Link>
    </div>
  ) 
  
  const bottomSection = () => (
    <div>
      <div>{footerText.copyright}</div>
      <Link to="/">{footerText.privacyLink}</Link>
      <Link to="/">{footerText.termsOfUse}</Link>
      <Link to="/">{footerText.thai}</Link> 
    </div>
  )
 
  return (
    <div>
      <div>
        {wellgloSection()}
        {citySection()}
        {specialtiesSection()}
        {providerJoinUsSection()}
        {bottomSection()}
      </div>
    </div>
  )
}
