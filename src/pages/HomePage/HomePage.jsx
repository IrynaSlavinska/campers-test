import { IconContext } from 'react-icons';

import { GiCampfire } from 'react-icons/gi';
import {
  HomeBack,
  HomeWrap,
  HomeTitle,
  Company,
  CompanyName,
  AboutContainer,
  AboutText,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomeBack>
      <HomeWrap>
        <HomeTitle>
          Discover Ukraine, Explore Freely! Your Journey, Our Campers!
        </HomeTitle>
        <Company>
          <IconContext.Provider value={{ color: '#E44848', size: 40 }}>
            <GiCampfire />
          </IconContext.Provider>
          <CompanyName>Campfire.Co</CompanyName>
        </Company>

        <AboutContainer>
          <AboutText>
            Whether you're planning a road trip along the picturesque Carpathian
            Mountains, exploring the historic cities of Lviv and Kyiv, or
            discovering the hidden gems of Ukraine's coastal regions, our
            campers are equipped to enhance your travel experience. From cozy
            camper vans ideal for solo adventurers to spacious motorhomes
            suitable for families and groups, we have the perfect vehicle to
            suit your needs.
          </AboutText>
          <AboutText>
            Our user-friendly website makes it easy to browse our selection,
            check availability, and book your dream camper rental with just a
            few clicks. Plus, our dedicated team is always available to provide
            expert advice and assistance, ensuring that your trip is smooth and
            hassle-free from start to finish.
          </AboutText>
          <AboutText>
            Embark on your adventure with confidence, comfort, and convenience —
            choose <span>Campfire.Co</span> for your camper rental needs. Let
            the journey begin!
          </AboutText>
        </AboutContainer>
      </HomeWrap>
    </HomeBack>
  );
};
