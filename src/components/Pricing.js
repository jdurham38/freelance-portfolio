import React, { useEffect, useRef, useState } from 'react';
import colorSharp from "../assets/img/color-sharp.png";

export const Pricing = () => {
  const carouselRef = useRef(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const items = carouselRef.current.children;
    const radius = 412;
    Array.from(items).forEach((item, index) => {
      const theta = (360 / items.length) * index * (Math.PI / 180);
      item.style.transform = `rotateY(${theta * (180 / Math.PI)}deg) translateZ(${radius}px)`;
      item.style.zIndex = Math.round(1000 - index); // This will set the z-index in descending order
    });
  }, []);
  

  const handleCardClick = (tier) => {
    setSelectedTier(tier);
    const items = carouselRef.current.children;
    Array.from(items).forEach((item, index) => {
      if (tier.name === tiers[index].name) {
        item.style.zIndex = 1000; // Bring the clicked card to the front
      } else {
        item.style.zIndex = 1000 - index; // Push other cards to the back
      }
    });
    

    // Check if the browser is in dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // The browser is in dark mode
        document.documentElement.style.setProperty('--modal-bg-color', '#333'); // dark background
        document.documentElement.style.setProperty('--modal-text-color', '#FFF'); // white text
    } else {
        // The browser is in light mode or doesn't support the media query
        document.documentElement.style.setProperty('--modal-bg-color', '#FFF'); // white background
        document.documentElement.style.setProperty('--modal-text-color', '#333'); // dark text
    }
};




  const handleClose = () => {
    setSelectedTier(null);
    carouselRef.current.style.animationPlayState = 'running';
  };

  const tiers = [
    {
      name: 'Basic',
      price: '$500',
      features: ['Includes all standard site pages', 'Ongoing maintenance', 'Hosting', 'All designs']
    },
    {
      name: 'Premium',
      price: '$1000',
      features: ['All Basic Tier features', 'Database Integration', 'Several premium features (user login, payment gateway, booking, etc).']
    },
    {
      name: 'Ultimate',
      price: '$2000',
      features: ['All features from Basic and Premium Tiers, up to 5 specialized functionalities.']
    },
    {
      name: 'Hourly',
      price: '$65/hour',
      features: ['Includes all features from every tier']
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <section style={{ margin: '0', padding: '40px', height: '550px', backgroundColor: 'rgba(20,20,20,0.9)', color: '#fff', textAlign: 'center', fontFamily: 'Arial', textTransform: 'uppercase', boxShadow: '0 0 20px -1px #efefef' }}>
        <h1>Pricing</h1>
        <div style={{ position: 'relative', width: '320px', margin: '100px auto 0 auto', perspective: '1000px' }}>
          <div
            ref={carouselRef}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              animation: selectedTier ? 'none' : 'rotate 40s infinite linear',
              width: '320px',
              height: '200px',
              position: 'relative',
              margin: '0 auto'
            }}
          >
            {tiers.map((tier, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(tier)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  width: '300px',
                  height: '225px',
                  backgroundImage: `url(${colorSharp})`,
                  backgroundSize: 'cover',
                  border: '3px inset rgba(47, 115, 201, 0.75)',
                  boxShadow: '0 0 15px 3px rgba(110, 72, 221, 0.9)'
                }}
              >
                <div
                  style={{
                    background: 'gray',
                    color: 'white',
                    padding: '10px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                  }}
                >
                  {tier.name} Tier
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{tier.price}</h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '20px' }}>
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedTier && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '320px',
              padding: '20px',
              backgroundColor: 'var(--modal-bg-color)', // Use the CSS variable here
              color: 'var(--modal-text-color)', // And here
              position: 'relative'
            }}>
              <h2>{selectedTier.name} Tier</h2>
              <p>{selectedTier.price}</p>
              <ul>
                {selectedTier.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button onClick={handleClose} style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                textAlign: 'center',
                cursor: 'pointer'
              }}>X</button>
            </div>
          </div>
        )}
      </section>
    </section>
  )
}
