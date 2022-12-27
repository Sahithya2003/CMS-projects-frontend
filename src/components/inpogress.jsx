import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Avatar } from "@material-tailwind/react";

import Data from "./data.json";

export default function Todo() {
  const [showCards, setCards] = useState([{ id: "" }]);

  const handleOnAdd = () => setCards([...showCards, { id: "" }]);
  return (
    <div className="App">
      <div>
        <div className="mt-8 border shadow-md bg-[#dbeafe] bg-opacity-40 rounded-xl   ">
          <span className=" text-3xl ">In-Progress</span>
          <AddIcon
            className="float-right mt-2 mr-2 ml-8 cursor-pointer"
            onClick={handleOnAdd}
          />
          <MoreHorizIcon className="float-left mt-2 mr-2 ml-8 cursor-pointer" />

          {showCards.map((card, index) => (
            <div key={index}>
              <div class=" max-w-2xl  mt-10 ml-1 mr-1 items-center">
                <div class="max-w-screen-md md:w-50  items-center">
                  <div class="inline-flex flex-col justify-end  flex-1 h-full p-4 bg-white rounded-xl">
                    {Data.map((post) => {
                      return (
                        <div>
                          <h5 className="text-sm text-left">
                            <FiberManualRecordOutlinedIcon className="text-red-500 mr-2 mb-1" />
                            {post.domain}
                            <MoreHorizIcon className="  ml-32 cursor-pointer" />
                          </h5>
                          <h1 class="w-full text-2xl text-left  font-semibold text-black">
                            {post.name}
                          </h1>
                          <h5 class="w-full pt-2 mt-1text-sm tracking-wide leading-tight text-black">
                            {post.day}
                          </h5>
                          <p class="w-full pt-2 mt-4 text-left text-md tracking-wide leading-tight text-black">
                            {post.des}
                          </p>
                          <div class="flex -space-x-2 overflow-hidden pt-3">
                            <div class="  h-10 w-10 pt-1 ring-2 ring-gray-300 rounded-full bg-blue-600">
                              <span class="font-small  text-white">VH</span>
                            </div>
                            <div class="  h-10 w-10 pt-1 ring-2 ring-gray-300 rounded-full bg-green-600">
                              <span class="font-small  text-white">LK</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
