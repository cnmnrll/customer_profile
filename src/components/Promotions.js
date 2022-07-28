import React, { useEffect, useState } from "react";

const Promotions = () => {
  const [promotions, setPromotions] = useState(null);
  useEffect(() => {
    fetch("https://dev.beepbeep.tech/v1/sample_customer")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPromotions(data.promotions);
      });
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-gray-500 my-7 px-2">Promotions</h1>
      <div className="my-7">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-500 px-2">Discounts</h1>
          <div className="grid grid-flow-col auto-cols-max my-scrollbar overflow-x-auto px-2 py-7 scroll">
            {promotions &&
              promotions.map((promotion, index) => {
                if (promotion.type === "discount") {
                  return (
                    <div
                      key={index}
                      className="flex flex-col bg-gray-500 rounded-xl w-60 h-40 mr-7 items-end hover:scale-105 hover:cursor-pointer transition-all drop-shadow-lg"
                    >
                      <div className="flex w-full h-3/4 justify-center items-center">
                        <h1 className="text-7xl text-white font-bold">
                          -${promotion.discount}
                        </h1>
                      </div>
                      <div className="flex w-full h-1/4 justify-center items-center rounded-b-xl bg-blue-200">
                        <h1 className="text-xl text-gray-500 font-bold">
                          {promotion.title}
                        </h1>
                      </div>
                      <div className="absolute rounded-full bg-blue-200 text-gray-500 px-3 py-1 mt-[-8px] mr-[-8px] drop-shadow-lg">
                        <h1 className="text-base font-bold">
                          {promotion.quantity}
                        </h1>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <div className="my-7">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-500 px-2">To redeem</h1>
            <div className="grid grid-flow-col auto-cols-max my-scrollbar overflow-x-auto px-2 py-7 scroll">
              {promotions &&
                promotions.map((promotion, index) => {
                  if (promotion.type === "redeem") {
                    return (
                      <div
                        key={index}
                        className="flex flex-col bg-gray-500 rounded-xl w-60 h-40  mr-7 items-end hover:scale-105 hover:cursor-pointer transition-all drop-shadow-lg"
                      >
                        <div className="flex w-full h-full justify-center items-center">
                          <h1 className="text-4xl text-white font-bold">
                            {promotion.title}
                          </h1>
                        </div>
                        <div className="absolute rounded-full bg-blue-200 text-gray-500 px-3 py-1 mt-[-8px] mr-[-8px] drop-shadow-lg">
                          <h1 className="text-base font-bold">
                            {promotion.quantity}
                          </h1>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
