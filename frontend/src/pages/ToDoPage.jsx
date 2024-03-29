import React, { useState } from "react";
import {
  Plus,
  MoreVertical,
  PencilLine,
  X,
  CalendarPlus,
  Pencil,
  Delete,
} from "lucide-react";
import { IconStarFilled, IconStar } from "@tabler/icons-react";

//ant
import { DatePicker, Space, TimePicker, Input } from "antd";
const { TextArea } = Input;

const DateTimePicker = ({ onDateTimeChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateTimeChange(combineDateTime(date, selectedTime));
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onDateTimeChange(combineDateTime(selectedDate, time));
  };

  const handleDateClear = () => {
    setSelectedDate(null);
    onDateTimeChange(combineDateTime(null, selectedTime));
  };

  const handleTimeClear = () => {
    setSelectedTime(null);
    onDateTimeChange(combineDateTime(selectedDate, null));
  };

  const combineDateTime = (date, time) => {
    const formattedDate = date ? date.format("DD-MM-YYYY") : "";
    const formattedTime = time ? time.format("HH:mm:ss") : "";
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <Space>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        onClear={handleDateClear}
        format="DD-MM-YYYY"
      />
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
        onClear={handleTimeClear}
        format="HH:mm:ss"
      />
    </Space>
  );
};

const ToDoPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isStarChecked, setIsStarChecked] = useState(false);
  const [isIconChanged, setIsIconChanged] = useState(false);
  const [dateTime, setDateTime] = useState("");
  //save todo item
  const [newToDo, setNewToDo] = useState();

  //handle text too long
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)} ... ` : text;
  };

  //handle time picker
  const handleDateTimeChange = (value) => {
    setDateTime(value);
    console.log(value);
  };

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
          <div className="card w-120 bg-white border border-solid border-chung-border-gray1 hover:shadow-lg">
            <div className="card-header px-5 py-4">
              <div className="grid grid-cols-2">
                <h2 className="col-start-1 text-gray-500 card-title">
                  January, 2024
                </h2>
                {/* add todo button -> disable*/}
                <div className="col-start-3 btn-circle border-chung-border-gray1 hover:text-black">
                  {/* <Plus /> */}
                </div>
                <hr />
              </div>
              {/* =============== add task =======================*/}
              <div className="collapse bg-white mt-[10px] hover:shadow-md">
                <input type="checkbox" onClick={handleIconCheck} />
                {/* add todo button */}
                <div className="collapse-title ">
                  <div className="h-fit w-fit btn-ghost btn-circle border border-solid bg-gray-100">
                    {isIconChanged ? (
                      <X className=" text-black opacity-50 transition-all duration-300" />
                    ) : (
                      <Plus className=" text-black opacity-50 transition-all duration-300" />
                    )}
                  </div>
                </div>
                <div className="collapse-content mt-1 grid grid-cols-4 ">
                  {/* item ======================= */}
                  {/* title */}
                  <div className="relative w-full min-w-[150px] h-10 col-start-1">
                    <Input placeholder="Title" />
                  </div>
                  <div className="relative w-full min-w-[150px] h-10 col-start-1 mb-4">
                    <TextArea placeholder="Detail" />
                  </div>
                  <div className="relative h-10 w-full min-w-[500px] col-start-1 mt-2">
                    <DateTimePicker onDateTimeChange={handleDateTimeChange} />
                  </div>

                  <div className="relative col-start-1 col-span-3 flex justify-start">
                    <div className="my-1 bg-white hover:bg-gray-50 text-gray-400 hover:text-gray-700 py-1 px-2 border border-gray-200 rounded shadow ">
                      <button className="m-1 ">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* =============== end add task =======================*/}
            </div>
            <div className="card-body -mt-8">
              {/* ================================ to-do item ================================ */}
              <div className="mytodo grid grid-cols-4 -mx-3 p-2 hover:shadow-md ">
                {/* check box & content*/}
                <div
                  className={`mytodocheckbox col-start-1 col-span-2 flex w-fit ${
                    isChecked ? "line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="checkbox size-5 border border-solid border-gray-300 mr-3"
                    onChange={handleCheckboxChange}
                  />
                  <div className="">
                    <p className="text-chung-text1">Mua bimbim</p>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {truncateText(
                        "Mua bimbim ow so nha 135 bac tinhnnnnnnnnnnnnnnnnnnnnn123",
                        35
                      )}
                    </p>
                  </div>
                </div>
                {/* dropdown option */}
                <div className="mytodooption col-start-7 flex w-fit">
                  <div className="dropdown dropdown-hover">
                    <div className="option-container hover:rounded-full btn-ghost h-fit w-fit">
                      <MoreVertical className="size-5 text-black opacity-30" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-white text-gray-500 rounded-box w-52"
                    >
                      <li>
                        <a className="flex ">
                          <p>Edit</p>
                          <Pencil className="h-4 w-4 opacity-85" />
                        </a>
                      </li>
                      <li>
                        <a className="flex ">
                          <p className="text-red-500">Delete</p>
                          <Delete className="h-5 w-5 opacity-85" />
                        </a>
                      </li>
                    </ul>
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
