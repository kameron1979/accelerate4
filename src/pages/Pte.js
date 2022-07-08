import React, { useState } from "react";
import { ptedata } from "../data/PteData";
import "./Pages.css";
import NewJSONEditor from "../components/jsoneditor/JsonEditor";

const Pte = function () {
  const [content, setContent] = useState({
    json: ptedata
  });

  return (
    <div className="App">
      <div className="my-editor">
        <h4> PTE </h4>
        <NewJSONEditor content={content} onChange={setContent} />
      </div>
    </div>
  );
};

export default Pte;
