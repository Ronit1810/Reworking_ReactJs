import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className=" bg-gray-500 text-black p-5 rounded-lg mb-4">Hello!</h1>
      <Card username="Ronit" txt="go"/>
      <Card username="nit" txt="in"/>
      <Card/>
    </>
  );
}

export default App;
