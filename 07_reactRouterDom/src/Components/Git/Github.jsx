import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  /* By Below Way also we can fetch tha data */

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/Ronit1810`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }, []);


  /* Fetching data using HOOK and Loader*/
  const data = useLoaderData()

  return (
    <div className=" text-center text-3xl bg-gray-700 text-white p-4">
      Github Country: {data.location} <br />
      GitHub UserName: {data.name}
      <br />
      <img src={data.avatar_url} alt="Image" width={280} height={280} />
    </div>
  );
}

export default Github;


export const gitLoader = async () => {
  const response = await fetch(`https://api.github.com/users/Ronit1810`)
  return response.json()
}