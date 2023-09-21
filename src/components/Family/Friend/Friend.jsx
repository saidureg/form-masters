import { useContext } from "react";
import { AssetContext } from "../GrandFa/GrandFa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Friend</h3>
      <p>Has:{gift} </p>
    </div>
  );
};

export default Friend;
