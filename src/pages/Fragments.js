import React, { useState } from "react";
import { fragments } from "../data/fragmentsData";
import "./Pages.css";
import NewJSONEditor from "../components/jsoneditor/JsonEditor";

function Fragments() {
  const [content, setContent] = useState({
    json: fragments
  });

  return (
    <div className="App">
      <div className="my-editor">
        <NewJSONEditor content={content} onChange={setContent} />
      </div>
    </div>
  );
}

export default Fragments;
