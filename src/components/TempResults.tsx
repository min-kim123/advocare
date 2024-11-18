"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AdvocateCards from "./AdvocateCards";

const SAMPLE_DATA = {
  analysis: {
    summary:
      "Based on our analysis, several charges in your medical bill appear to be significantly higher than standard rates. We've identified potential savings opportunities of up to 35% on specific procedures.",
    recommendations:
      "We recommend disputing the charges for the MRI procedure and anesthesia services. Consider requesting an itemized bill and engaging with a medical billing advocate.",
    details: {
      ucr_validation: {
        procedure_analysis: [
          {
            description: "MRI of Lower Back with Contrast",
            billed_cost: 3200,
            ucr_rate: 2400,
            difference: 800,
            percentage_difference: 33.33,
            is_reasonable: false,
            comments:
              "This charge exceeds the 90th percentile UCR rate for your region.",
          },
          {
            description: "Anesthesia Services",
            billed_cost: 1800,
            ucr_rate: 1500,
            difference: 300,
            percentage_difference: 20,
            is_reasonable: false,
            comments:
              "Time-based billing appears to be inflated compared to procedure duration.",
          },
          {
            description: "Post-operative Follow-up",
            billed_cost: 250,
            ucr_rate: 250,
            difference: 0,
            percentage_difference: 0,
            is_reasonable: true,
            comments: "Charges align with standard rates for your region.",
          },
        ],
        overall_assessment:
          "Multiple procedures show significant variance from UCR rates, suggesting potential overcharging.",
        recommendations: [
          "Request detailed itemization of MRI charges",
          "Contest anesthesia service duration",
          "Consider negotiating with provider based on UCR rates",
        ],
        references: [
          "Fair Health Consumer Database 2024",
          "Medicare Fee Schedule",
          "Regional Healthcare Cost Analysis",
        ],
      },
      fraud_detection: {
        potential_fraud: true,
        details: [
          "Unusual bundling of services detected",
          "Possible upcoding in procedure complexity",
          "Duplicate charges identified in billing statement",
        ],
      },
    },
  },
};

function Results() {
  const router = useRouter();

  const renderMiniBox = (title: string, content: string | number | boolean) => (
    <div key={title} className="bg-gray-100 p-4 rounded mb-4 shadow">
      <h4 className="font-medium">{title}</h4>
      <p>{content.toString()}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-row gap-6">
          {/* Left Column - Analysis Results */}
          <div className="w-2/5">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>

              {/* Summary Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Summary</h3>
                {renderMiniBox("Overview", SAMPLE_DATA.analysis.summary)}
              </section>

              {/* UCR Validation Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Charges Compared to Standardized Rates
                </h3>
                <div>
                  {SAMPLE_DATA.analysis.details.ucr_validation.procedure_analysis.map(
                    (procedure, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-medium">Procedure {index + 1}</h4>
                        {renderMiniBox("Item", procedure.description)}
                        {renderMiniBox(
                          "You were Billed",
                          `$${procedure.billed_cost}`
                        )}
                        {renderMiniBox(
                          "Standard Rate",
                          `$${procedure.ucr_rate}`
                        )}
                        {renderMiniBox(
                          "Difference",
                          `$${procedure.difference}`
                        )}
                        {renderMiniBox(
                          "Percentage Difference",
                          `${procedure.percentage_difference}%`
                        )}
                        {renderMiniBox(
                          "Is Reasonable",
                          procedure.is_reasonable ? "Yes" : "No"
                        )}
                        {renderMiniBox("Comments", procedure.comments)}
                      </div>
                    )
                  )}

                  <h4 className="font-medium mt-4">Overall Assessment</h4>
                  {renderMiniBox(
                    "Assessment",
                    SAMPLE_DATA.analysis.details.ucr_validation
                      .overall_assessment
                  )}

                  <h4 className="font-medium mt-4">Recommendations</h4>
                  {SAMPLE_DATA.analysis.details.ucr_validation.recommendations.map(
                    (recommendation, index) =>
                      renderMiniBox(
                        `Recommendation ${index + 1}`,
                        recommendation
                      )
                  )}

                  <h4 className="font-medium mt-4">References</h4>
                  {SAMPLE_DATA.analysis.details.ucr_validation.references.map(
                    (reference, index) =>
                      renderMiniBox(`Reference ${index + 1}`, reference)
                  )}
                </div>
              </section>

              {/* Fraud Detection Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Potential Fraud Indicators
                </h3>
                <div>
                  <p>
                    <strong>Potential Fraud Detected:</strong>{" "}
                    {SAMPLE_DATA.analysis.details.fraud_detection
                      .potential_fraud
                      ? "Yes"
                      : "No"}
                  </p>
                  {SAMPLE_DATA.analysis.details.fraud_detection
                    .potential_fraud && (
                    <>
                      <h4 className="font-medium mt-2">Details:</h4>
                      {SAMPLE_DATA.analysis.details.fraud_detection.details?.map(
                        (detail, index) =>
                          renderMiniBox(`Fraud Indicator ${index + 1}`, detail)
                      )}
                    </>
                  )}
                </div>
              </section>

              {/* Recommendations Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Summary</h3>
                {renderMiniBox(
                  "Overview",
                  SAMPLE_DATA.analysis.recommendations
                )}
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-3/5">
            <div className="bg-white p-6 rounded shadow-md h-full">
              <h2 className="text-2xl font-bold mb-4">
                Professional advocates best suited for your case:
              </h2>
              <AdvocateCards />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Results;
