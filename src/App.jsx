import "./App.css";
import GrandFa from "./components/Family/GrandFa/GrandFa";
// import ReusableForm from "./components/ReUsableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm";
// import StatefulForm from "./components/statefulForm/StatefulForm";

function App() {
  // const handleSignUp = (data) => {
  //   console.log("Signup data", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("profile updated", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <GrandFa></GrandFa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm handleSubmit={handleSignUp} formTitle={"Sign Up"}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleUpdateProfile}
        formTitle={"Profile Update "}
        submitBtnText={"Update"}
      >
        <div>
          <h2>Profile Update</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
