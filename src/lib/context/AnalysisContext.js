'use client'
import React, { createContext, useState, useContext } from 'react';

const AnalysisContext = createContext();

export function AnalysisProvider({ children }) {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <AnalysisContext.Provider value={{ analysisResult, setAnalysisResult }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  return useContext(AnalysisContext);
}