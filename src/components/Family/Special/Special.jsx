import { useContext } from "react";
import { AssetContext } from "../GrandFa/GrandFa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Special</h3>
      <p>Has: {asset} </p>
      <p>Also has:{gift} </p>
    </div>
  );
};

export default Special;
