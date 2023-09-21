import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandFa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandFa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandFa">
      <h3>GrandFa</h3>
      <p>Net asset:{money} </p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandFa;
