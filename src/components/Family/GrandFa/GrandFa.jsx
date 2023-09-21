import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandFa.css";

export const AssetContext = createContext("gold");

const GrandFa = () => {
  const asset = "Diamond";
  return (
    <div className="grandFa">
      <h3>GrandFa</h3>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandFa;
