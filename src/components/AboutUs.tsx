import React from 'react';

function AboutUs() {
  console.log('AboutUs component is rendering'); // Add this line
  return (
    <div>
      <h1 className="pt-48 text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center">
        Advocare is dedicated to making healthcare affordable for everyone. We use AI to uncover billing errors, negotiate costs, and ensure you're not overpaying for medical care.
      </p>
    </div>
  );
}

export default AboutUs;