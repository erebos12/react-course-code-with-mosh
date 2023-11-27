import React, { useState } from "react";
import AceEditor from "react-ace";

// Importiere die erforderlichen Ace-Module und Styles
import "ace-builds/src-noconflict/mode-javascript"; // Ersetze 'javascript' durch die Sprache deiner Wahl
import "ace-builds/src-noconflict/theme-github"; // Ersetze 'github' durch das Theme deiner Wahl

function TestEditor() {
  const [code, setCode] = useState("// schreibe deinen Code hier");

  const handleChange = (newValue: string) => {
    setCode(newValue);
  };

  return (
    <AceEditor
      mode="javascript" // Ersetze 'javascript' durch die Sprache deiner Wahl
      theme="github" // Ersetze 'github' durch das Theme deiner Wahl
      onChange={handleChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      value={code}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export default TestEditor;
