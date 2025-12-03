import React from 'react';
import './Home.css';
import HalloweenBanner from './HalloweenBanner';
import InterestedFeatures from './InterestedFeatures'; 
import FallCollection from './FallCollection';
import DealSection from './DealSection'; 
import EtsyDescription from './EtsyDescription';

import ClothingImage from "./images/clothing.jpg";
import DrawingImage from "./images/drawing.jpg";
import ShirtImage from "./images/shirt.jpg";
import RingImage from "./images/ring.jpg";
import PendantImage from "./images/pendant.jpg";

const categoriesImages = [
  { image: ClothingImage, title: "Clothing" },
  { image: DrawingImage, title: "Drawings and Sketches" },
  { image: ShirtImage, title: "Shirts" },
  { image: RingImage, title: "Statement Rings" },
  { image: PendantImage, title: "Pendant Necklaces" },
];

const Home = () => {
  return (
    <div className="home">
      <HalloweenBanner />
      <InterestedFeatures />
      <FallCollection />
      <DealSection 
        sectionTitle="Shop our most-loved categories" 
        categories={categoriesImages} 
      />
      <EtsyDescription />
    </div>
  );
};

export default Home;

