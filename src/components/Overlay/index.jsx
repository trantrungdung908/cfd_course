import { useMainContext } from "@/context/MainContext";
import React from "react";

const Overlay = () => {
  const { handleToggleNav } = useMainContext();
  return <div className="overlay" onClick={handleToggleNav} />;
};

export default Overlay;
