import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin asset={asset} name={"Sumon"}></Cousin>
        <Cousin name={"Mina"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
