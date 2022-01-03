import { useState } from 'react'
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("## markdown editor");
  return (
    <div className="body">
      <h2>Markdown Editor</h2>
      <div className="main">
        <div>
          <textarea 
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
