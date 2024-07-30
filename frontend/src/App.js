import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [summary, setSummary] = useState("");

  const handleSummary = (newSummary) => {
    setSummary(newSummary);
  };

  return (
    <div className="App">
      <h1>Document Summarizer</h1>
      <FileUpload onSummary={handleSummary} />
      <SummaryDisplay summary={summary} />
    </div>
  );
}

export default App;
