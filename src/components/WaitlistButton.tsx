import React from "react";

function WaitlistButton() {
  const handleClick = () => {
    alert("Thank you for joining the waitlist!");
    // Add logic here to handle waitlist actions
  };

  return (
    <button className="waitlist-button" onClick={handleClick}>
      Join Waitlist
    </button>
  );
}

export default WaitlistButton;
  