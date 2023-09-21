import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandFa/GrandFa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={"Arafat"}></Cousin>
        <Cousin name={"Tuhin"}></Cousin>
      </section>
      <p> Money: {money} </p>
      <button onClick={() => setMoney(money + 1000)}>Add Money</button>
    </div>
  );
};

export default Aunty;
