import React from 'react'
import Header from '../../components/Header/Header.component';
import LastSection from '../../components/lastSection/lastSection.component';
import PlacesSection from '../../components/placesSection/placesSection.component';

const Homepage = () => {
  return (
    <div>
        <Header />
        <PlacesSection />
        <LastSection />
    </div>
  )
}

export default Homepage;