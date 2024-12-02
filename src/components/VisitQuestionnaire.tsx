'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAnalysis } from "../lib/context/AnalysisContext";
import "./visitquestionnaire.css";

export default function VisitQuestionnaire() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otherChecked, setOtherChecked] = useState(false);
  const [insuranceChecked, setInsuranceChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherChecked(e.target.checked);
  }

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInsuranceChecked(e.target.checked);
  }

  useEffect(() => {
    let container = document.getElementById("form-container");
    if (container) {
      if (loading) {
        container.classList.add("form-hide");
      } else {
        container.classList.remove("form-hide");
      }
    }
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
  }

  return (
    <div className="pt-32 flex flex-col items-center min-h-screen bg-gradient-to-b from-teal-50 to-white py-8">
      <div className="form-container bg-white"></div>
      <h1 className="text-4xl font-bold mb-6 text-center">
          Tell us about your case!
      </h1>
      <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col gap-4"
        >
          <div>
            <label>
              Purpose of the visit
            </label>
            <input
              type="text"
              id="visit-purpose"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label>
              Date of visit
            </label>
            <input
              type="date"
              id="visit-date"
              required
            />
          </div>
          <div>
            <label>
              Facility Name
            </label>
            <input
              type="text"
              id="visit-purpose"
              required
            />
          </div>
          <div>
            <p className="font-bold">
              Do You See Any Potential Errors Or Wrongful Charges?
            </p>
            <p className="text-sm">
              (Check all that apply or leave a textbox for custom input)
            </p>
            <div className="text-[0.8rem]">
              <div className="form-checkbox">
                <label>
                  Duplicate Charges
                </label>
                <input
                  type="checkbox"
                  name="Duplicate Charges"
                  value="duplicate charges"
                />
              </div>
              <div className="form-checkbox">
                <label>
                  Services Not Recieved
                </label>
                <input
                  type="checkbox"
                  name="Services Not Recieved"
                  value="services not recieved"
                />
              </div>
              <div className="form-checkbox">
                <label>
                  Unexpected Fees
                </label>
                <input
                  type="checkbox"
                  name="Unexpected Fees"
                  value="unexpected fees"
                />
              </div>
              <div className="form-checkbox">
                <label>
                  Unclear or Unitemized Charges
                </label>
                <input
                  type="checkbox"
                  name="Unclear or Unitemized Charges"
                  value="unclear or unitemized charges"
                />
              </div>
              <div className="form-checkbox">
                <label>
                  Other
                </label>
                <input
                  className="other-checkbox"
                  type="checkbox"
                  name="Other"
                  value="other"
                  onChange={handleCheckboxChange}
                />
              </div>
              <div className="w-[90%] ml-auto mr-auto">
              {otherChecked ? (
                <input type="text"/>
              ) :
                (null)
              }
              </div>
            </div>
          </div>
          <div className="flex items-baseline">
            <label className="mr-[1rem]">Do You Have Insurance?</label>
            <input
              type="checkbox"
              onChange={handleInsuranceChange}
            />
          </div>
          {insuranceChecked ? (
            <div>
              <label>
                Insurance Name
              </label>
              <input type="text"/>
            </div>
          ) :
            (null)
          }
          <button
            type="submit"
            className="bg-teal-500 text-white p-3 rounded text-lg font-semibold hover:bg-teal-600 disabled:bg-gray-400"
            disabled={loading}
          >
            Submit
          </button>
        </form>
    </div>
  );
}
