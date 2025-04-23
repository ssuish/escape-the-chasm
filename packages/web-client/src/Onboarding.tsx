//import React from 'react';
import './Onboarding.css'; // Import the CSS file

function Onboarding() {
  return (
    <>
    <div className="logo-container">
      <img src='../src/assets/ChasmTitle_optimized.png' height={200}></img>
    </div>
    <h2 className="subtitle">Survival Platform Game</h2>
    <h1 className="main-title">Escape the Chasm</h1>
    <p className="tagline">Play Bold. Earn a Legacy</p><br/><br/>
    
    <div className="video-demo">
      <iframe 
      width="900" 
      height="480"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=DaS2U2niKAPoKZUH" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
    </div><br/><br/>

    <div className='about-section'>
      <h1 className="main-title">About</h1>
      <p className="text-content">Escape the Chasm is an arcade-survival platforming game, 
        where the player has to rise up the depths of the earth by completing objectives,<br/> 
        gathering resources, conquering their foes, and surviving as long as possible.</p>
        <br/><br/>
    </div>
    </>
  );
}

export default Onboarding;
