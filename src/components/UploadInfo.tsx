'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";  // Replace react-router-dom
import { useAnalysis } from "../lib/context/AnalysisContext";
// import { BeatLoader } from "react-spinners";

interface FormData {
  files: File[];
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export default function UploadInfo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();  // Replace useNavigate
  const { setAnalysisResult } = useAnalysis();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("bill-input") as HTMLInputElement;
    const files = fileInput.files;

    if (!files) return;

    if (files.length > 10) {
      alert("You can only upload up to 10 files.");
      return;
    }

    Array.from(files).forEach((file) => formData.append("files", file));
    formData.append(
      "firstName", 
      (document.getElementById("first-name") as HTMLInputElement).value
    );
    formData.append(
      "lastName", 
      (document.getElementById("last-name") as HTMLInputElement).value
    );
    formData.append(
      "dateOfBirth",
      (document.getElementById("date-of-birth") as HTMLInputElement).value
    );

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze the uploaded bill.");
      }

      const result = await response.json();
      setAnalysisResult(result);
      router.push("/results");  // Replace navigate
    } catch (error) {
      console.error("Error during upload:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-48 flex flex-col items-center min-h-screen bg-gradient-to-b from-teal-50 to-white py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Tell us about your case!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <label htmlFor="first-name" className="block mb-2 text-lg font-medium">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block mb-2 text-lg font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="date-of-birth" className="block mb-2 text-lg font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            id="date-of-birth"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="bill-input" className="block mb-2 text-lg font-medium">
            Upload Your Medical Bill
          </label>
          <input
            type="file"
            id="bill-input"
            className="w-full border border-gray-300 p-2 rounded"
            required
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white p-3 rounded text-lg font-semibold hover:bg-teal-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span>Analyzing</span>
              <BeatLoader color="#ffffff" size={8} />
            </div>
          ) : (
            "Submit"
          )}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}