import React from 'react'
import AboutUsBanner from './AboutUsBanner'
import Content from './Content'
import BreadCrumbs from '../Shared/BreadCrumbs'
import BuiltForLife from './BuiltForLife'
import Visionary from './Visionary'
import MoreThanRealEstate from './MoreThanRealEstate'
const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner />
      <BreadCrumbs title="About Us" />
      <Content />
      <BuiltForLife />
      <Visionary />
      <MoreThanRealEstate />
    </div>
  )
}

export default AboutUs
