import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {

    //     fetch('https://api.github.com/users/palpreeti23')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setData(res)
    //         }
    //         )
    // }, [])

    return (

        <>
            <div className="flex bg-gray-600 text-2xl p-3 rounded-lg ">
                <img
                    className="w-30 rounded-lg m-2 "
                    src={data.avatar_url} alt="github-img" />

                <div className="flex flex-col">
                    <div>{data.login}</div>
                    <div>Github repo : {data.public_repos}</div>

                </div>
            </div>

        </>



    )
}

export default Github


 export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/palpreeti23')
   return res.json()
 }