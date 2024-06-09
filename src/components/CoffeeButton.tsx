import React, { useEffect } from 'react';

const BuyMeACoffeeButton: React.FC = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[data-name="bmc-button"]')) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
      script.type = "text/javascript";
      script.setAttribute('data-name', 'bmc-button');
      script.setAttribute('data-slug', 'arshadakl');
      script.setAttribute('data-color', '#FFDD00');
      script.setAttribute('data-emoji', '☕');
      script.setAttribute('data-font', 'Poppins');
      script.setAttribute('data-text', 'Buy me a coffee');
      script.setAttribute('data-outline-color', '#000000');
      script.setAttribute('data-font-color', '#000000');
      script.setAttribute('data-coffee-color', '#ffffff');
      
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* This div will be replaced by the Buy Me a Coffee button */}
      <div className="bmc-btn-container mx-2">
        <a href="https://www.buymeacoffee.com/arshadakl" target="_blank" rel="noopener noreferrer" className="bmc-btn" style={{lineHeight: 0}}>
          <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" width="20" height="51" />
        </a>
      </div>
    </div>
  );
};

export default BuyMeACoffeeButton;
