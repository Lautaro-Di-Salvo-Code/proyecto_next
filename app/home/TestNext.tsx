"use client";
import React, { useState, useEffect } from "react";

const TestNext = () => {
  interface Root2 {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

  interface Rating {
    rate: number;
    count: number;
  }

  const url = "https://fakestoreapi.com/products";

  const [posts, setPosts] = useState<Root2 []>([]);

  let [valuee, setValue] = useState(3);

  const PlusSlice = () => {
    setValue(valuee + 1);
  };
  const ResetSlice = () => {
    setValue((valuee - 1));
  };

  const first = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setPosts(result);
      console.log(result);
      console.log( sliceApi)
    } catch (error) {
      console.error(error);
    }
  };
  
  const sliceApi = posts.slice(0, valuee);

  useEffect(() => {
    first();
  }, []);

  return (
    <article className=" ">
      <ul className="flex justify-evenly gap-4 mx-auto  max-w-[1400px] w-[300px] p-3  m-3 rounded-md">
        <button className="bg-[#c5bdbd] p-3  m-3" onClick={PlusSlice}>Ver mas</button>
        <button className="bg-[#c5bdbd] p-3  m-3" onClick={ResetSlice}>Dejar como estaba</button>
      </ul>

      <ul className="flex  flex-wrap justify-center gap-5 h-auto  w-full max-w-[1400px] transition-all .3s ease-in-out">
        {sliceApi.map((e) => (
          <section className="" key={e.id}>
            <ul
              
              className=" border border-[#888080] bg-[#696464] flex  flex-wrap gap-5  h-auto w-[300px]  p-4 rounded-md"
            >
              <p className="text-center">{e.description}</p>
              <img
                className="h-auto max-w-[100px] mx-auto"
                src={e.image}
                alt=""
              />
              {/* <p>{e.rating as Rating}</p> */}
            </ul>
          </section>
        ))}
      </ul>
    </article>
  );
};

export default TestNext;
