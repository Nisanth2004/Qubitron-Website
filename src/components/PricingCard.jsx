import React from 'react';

const PricingCard = () => {
  // Function to handle button click
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex justify-center items-center p-8 font-sans text-white bg-bluegray-900 min-h-screen">
      {/* Free Plan */}
      <div className="w-80 border-2 border-bluegray-800 p-5 mx-4"> {/* mx-4 adds 1rem (16px) margin on each side, totaling 2rem (32px) gap */}
        <div className="pb-3 mb-4 border-b border-bluegray-800">
          <div className="text-xs text-bluegray-400 mb-2">START</div>
          <h2 className="text-5xl m-0 font-normal">Free</h2>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Vexillologist pitchfork
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Tumeric plaid portland
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Mixtape chillwave tumeric
        </div>
        <div className="mt-auto w-full">
          <button
            className="bg-bluegray-800 cursor-pointer text-white py-2 border-none w-full flex items-center px-3"
            onClick={() => handleButtonClick('https://www.google.com')} // Unique link for Free Plan
          >
            Button
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-bluegray-600 leading-5">Literally you probably haven't heard of them jean shorts.</div>
        </div>
      </div>

      {/* Pro Plan */}
      <div className="w-80 border-2 border-bluegray-800 p-5 mx-4"> {/* mx-4 adds 1rem (16px) margin on each side, totaling 2rem (32px) gap */}
        <div className="pb-3 mb-4 border-b border-bluegray-800">
          <div className="text-xs text-bluegray-400 mb-2">PRO</div>
          <div className="flex items-center">
            <h2 className="text-5xl m-0 font-normal">$38</h2>
            <span className="text-bluegray-300 ml-1">/mo</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Vexillologist pitchfork
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Tumeric plaid portland
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Hexagon neutra unicorn
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Tumeric plaid portland
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Mixtape chillwave tumeric
        </div>
        <div className="mt-auto w-full">
          <button
            className="bg-teal-500 cursor-pointer text-white py-2 border-none w-full flex items-center px-3"
            onClick={() => handleButtonClick('https://www.youtube.com')} // Unique link for Pro Plan
          >
            Button
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-bluegray-600 leading-5">Literally you probably haven't heard of them jean shorts.</div>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="w-80 border-2 border-bluegray-800 p-5 mx-4"> {/* mx-4 adds 1rem (16px) margin on each side, totaling 2rem (32px) gap */}
        <div className="pb-3 mb-4 border-b border-bluegray-800">
          <div className="text-xs text-bluegray-400 mb-2">ENTERPRISE</div>
          <div className="flex items-center">
            <h2 className="text-5xl m-0 font-normal">$72</h2>
            <span className="text-bluegray-300 ml-1">/mo</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Vexillologist pitchfork
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Tumeric plaid portland
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"></path>
          </svg>
          Mixtape chillwave tumeric
        </div>
        <div className="mt-auto w-full">
          <button
            className="bg-bluegray-800 cursor-pointer text-white py-2 border-none w-full flex items-center px-3"
            onClick={() => handleButtonClick('https://www.github.com')} // Unique link for Enterprise Plan
          >
            Button
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-bluegray-600 leading-5">Literally you probably haven't heard of them jean shorts.</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;