import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){[]}";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className=" flex-col bg-black w-full h-screen flex justify-center items-center">
      <div className=" rounded-lg flex flex-wrap justify-center w-full max-w-full mx-auto shadow-lg px-4 my-8 bg-gray-600">
        <input
          className=" p-3 m-4 rounded-lg"
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />
        <button className=" m-4 rounded-lg shrink-0 p-3 bg-blue-500" onClick={copyPassword}>
          copy
        </button>
      </div>
      <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
      <label className=" p-2 text-white">Length: {length}</label>
      <div>
        <input type="checkbox" value={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
        <label className=" text-white">Number</label>
      </div>
      <div>
        <input type="checkbox" value={charAllowed}  onChange={() => setCharAllowed((prev) => !prev)}/>
        <label className=" text-white">Special Charactor</label>
      </div>
    </div>
  );
}

export default App;
