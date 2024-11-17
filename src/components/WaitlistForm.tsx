// // WaitlistForm.js
// import React, { useState } from 'react';

// function WaitlistForm() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send email to backend)
//     console.log('Submitted email:', email);
//   };

//   return (
//     <div>
//       <h2 className="text-3xl m-7">Join our Waitlist</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col items-center">
//         <input
//           className="w-[50vw] mb-7 border-solid border-2 p-[0.5rem]"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <button type="submit" className="cta black-bg white-text">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default WaitlistForm;

// WaitlistForm.js
'use client'
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import React, { useState } from "react";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Starting submission...");

    try {
      const { data, error } = await supabase.from("waitlist").insert([
        {
          email,
          created_at: new Date().toISOString(),
        },
      ]);

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Detailed error:", {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });
        throw error;
      }

      setEmail("");
      alert("Thanks for joining!");
    } catch (error) {
      console.error("Full error object:", error);
      setError(error.message || "Something went wrong");
    }
  };
  return (
    <div>
      <h2 className="pt-64 text-3xl m-7 text-center">Join our Waitlist</h2>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className=" mb-7 border-solid border-2 p-[0.5rem]"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="cta black-bg white-text">
            Submit
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
export default WaitlistForm;