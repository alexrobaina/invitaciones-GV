import React from 'react';
import InvitacionOne from './containers/invitacionOne/InvitacionOne';
import InfoCard from './components/infoCard/InfoCard';
import Carousel from './components/carousel/Carousel';
import Parallax from './components/parallax/Parallax';
import Footer from './components/footer/footer';


import './App.css';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <div className="App">

        <InvitacionOne />

        <InfoCard />

        <Carousel />

        <Parallax />

        <Gallery />
        
        <Footer />

    </div>
  );
}

export default App;
