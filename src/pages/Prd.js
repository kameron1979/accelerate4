import React, { useState } from "react";
import { prddata } from "../data/PrdData";
import "./Pages.css";
import NewJSONEditor from "../components/jsoneditor/JsonEditor";

const Prd = function () {
  const [content, setContent] = useState({
    json: prddata
  });

  return (
    <div className="App">
      <div className="my-editor">
        <h4> PRD </h4>
        <NewJSONEditor content={content} onChange={setContent} />
      </div>
    </div>
  );
};

export default Prd;
