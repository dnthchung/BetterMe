import React from "react";
import { useState } from "react";
import { Plus, MoreVertical, PencilLine, X, CalendarPlus } from "lucide-react";
import { IconStarFilled, IconStar } from "@tabler/icons-react";

const ToDoPage = () => {
  const [newToDo, setNewToDo] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isStarChecked, setIsStarChecked] = useState(false);
  const [isIconChanged, setIsIconChanged] = useState(false);
  //handle checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  //handle start check
  const handleStarCheck = () => {
    setIsStarChecked(!isStarChecked);
  };
  //handle icon change
  const handleIconCheck = () => {
    setIsIconChanged(!isIconChanged);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-5 mt-10 h-screen">
        {/* main card */}
        <div className="maincard-container col-start-3 col-span-2">
          <div className="card w-120 bg-white border border-solid border-chung-border-gray1 hover:shadow-md">
            <div className="card-header px-5 py-4">
              <div className="grid grid-cols-2">
                <h2 className="col-start-1 text-gray-500 card-title">
                  January, 2024
                </h2>
                {/* add todo button -> disable*/}
                <div className="col-start-3 btn-circle  border-chung-border-gray1 hover:text-black">
                  {/* <Plus /> */}
                </div>
                <hr />
              </div>
              {/* add task */}
              <div className="collapse bg-white mt-[10px] ">
                <input type="checkbox" onClick={handleIconCheck} />
                {/* add todo button */}
                <div className="collapse-title ">
                  <div className="h-fit w-fit btn-ghost btn-circle border border-solid bg-gray-100">
                    {isIconChanged ? (
                      <Plus className=" text-black opacity-50 transition-all duration-300" />
                    ) : (
                      <X className=" text-black opacity-50 transition-all duration-300" />
                    )}
                  </div>
                </div>
                <div className="collapse-content mt-1 grid grid-cols-4 ">
                  {/* title */}
                  <div className="relative h-11 w-fit min-w-[100px] col-span-1">
                    <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                      <PencilLine
                        Plus
                        className="h5 w-5 opacity-55 hover:opacity-85"
                      />
                    </div>
                    <input
                      placeholder="Title"
                      className="peer h-full w-fit border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Title
                    </label>
                  </div>
                  <div className="relative h-11 w-fit min-w-[100px] col-start-3">
                    <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                      <CalendarPlus className="h5 w-5 opacity-55 hover:opacity-85" />
                    </div>
                    <input
                      placeholder="Date"
                      className="peer h-full w-fit border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Date
                    </label>
                  </div>

                  {/* date pick */}

                  {/* calendar option=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-======================= */}
                  {/* <button className="bg-white hover:bg-gray-50 text-gray-800 py-1 px-2 border border-gray-200 rounded shadow mt-2">
                    <CalendarPlus className="h5 w-5 opacity-55 hover:opacity-85" />
                  </button> */}
                  {/* <kbd className="kbd kbd-xs bg-chung-light-grey2 text-gray-500">
                    10/06/2003 12:50 a.m
                  </kbd> */}
                </div>
              </div>
            </div>
            <div className="card-body -mt-8">
              {/* todo-1 */}
              <div className="mytodo grid grid-cols-4 -mx-3 p-2 hover:bg-slate-100 ">
                {/* check box & content*/}
                <div
                  className={`mytodocheckbox col-start-1 col-span-2 flex w-fit ${
                    isChecked ? "line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="checkbox size-5 border border-solid border-gray-300 mr-3 "
                    onChange={handleCheckboxChange}
                  />
                  <p className="text-chung-text1">Mua bimbim</p>
                </div>

                {/* dropdown option */}
                <div className="mytodooption col-start-7 flex w-fit">
                  <div className="option-container hover:rounded-full btn-ghost h-fit w-fit">
                    <MoreVertical className="size-5 text-black opacity-30" />
                  </div>
                </div>
                {/* star */}
                <div className="mytodostar col-start-8 flex w-fit  ">
                  <div
                    className="star-container hover:rounded-full btn-ghost h-fit w-fit transition-all duration-300"
                    onClick={handleStarCheck}
                  >
                    {isStarChecked ? (
                      <IconStarFilled className="size-5 text-black opacity-30 transition-all duration-300" />
                    ) : (
                      <IconStar className="size-5 text-black opacity-30 transition-all duration-300" />
                    )}
                  </div>
                </div>
              </div>
              <div className="mytodo grid grid-cols-4 -mx-3 p-2 hover:bg-slate-100 ">
                {/* check box & content*/}
                <div
                  className={`mytodocheckbox col-start-1 col-span-2 flex w-fit ${
                    isChecked ? "line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="checkbox size-5 border border-solid border-gray-300 mr-3 "
                    onChange={handleCheckboxChange}
                  />
                  <p className="text-chung-text1">Mua bimbim</p>
                </div>

                {/* dropdown option */}
                <div className="mytodooption col-start-7 flex w-fit">
                  <div className="option-container hover:rounded-full btn-ghost h-fit w-fit">
                    <MoreVertical className="size-5 text-black opacity-30" />
                  </div>
                </div>
                {/* star */}
                <div className="mytodostar col-start-8 flex w-fit  ">
                  <div
                    className="star-container hover:rounded-full btn-ghost h-fit w-fit transition-all duration-300"
                    onClick={handleStarCheck}
                  >
                    {isStarChecked ? (
                      <IconStarFilled className="size-5 text-black opacity-30 transition-all duration-300" />
                    ) : (
                      <IconStar className="size-5 text-black opacity-30 transition-all duration-300" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoPage;
