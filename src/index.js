import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "excelent"]}
    />
    <StarRating size={24} color="green" defaultRating={3} />
    <StarRating size={64} color="red"  defaultRating={6}/> */}
  </React.StrictMode>
);
