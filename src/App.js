import "./styles.css";
import React, { useReducer } from "react";

export default function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" name="check" value={checked} onChange={toggle} />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
}
