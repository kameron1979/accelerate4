import React, { useState } from "react";
import { ppedata } from "../data/PpeData";
import "./Pages.css";
import NewJSONEditor from "../components/jsoneditor/JsonEditor";

const Ppe = function () {
  const [content, setContent] = useState({
    json: ppedata
  });

  return (
    <div className="App">
      <div className="my-editor">
        <h4> PPE </h4>
        <NewJSONEditor content={content} onChange={setContent} />
      </div>
    </div>
  );
};

export default Ppe;
