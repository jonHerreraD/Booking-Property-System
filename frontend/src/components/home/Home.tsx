

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from './Section';

const Home = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
      title: 'Modern Downtown Apartment',
      price: '$1,200/mo',
      beds: 2,
      baths: 1
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop',
      title: 'Cozy Studio Loft',
      price: '$850/mo',
      beds: 1,
      baths: 1
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
      title: 'Luxury Villa',
      price: '$2,500/mo',
      beds: 4,
      baths: 3
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      title: 'Suburban Family Home',
      price: '$1,800/mo',
      beds: 3,
      baths: 2
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      title: 'Beachfront Condo',
      price: '$2,200/mo',
      beds: 2,
      baths: 2
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      title: 'Rustic Cottage',
      price: '$950/mo',
      beds: 2,
      baths: 1
    }
  ];

  return (
    <>
      <div className="pt-25 text-center text-3xl">
        <h1>Welcome Traveler</h1>
      </div>

      <Section title='Most Wanted' properties={properties} />
      <Section title='Top Rated' properties={properties} />
      <Section title='Top Mexico' properties={properties} />
      <Section title='Client Favourites' properties={properties} />
      <Section title='Your Next Stay Starts Here' properties={properties} />
      <Section title='Most Wanted' properties={properties} />
    </>
  );
};

export default Home;