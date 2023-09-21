import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={"Arafat"}></Cousin>
        <Cousin name={"Tuhin"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
