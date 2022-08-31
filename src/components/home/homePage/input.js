import { useRef, useState } from "react";
import profile from "../../../assets/profile.png";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Data } from "emoji-mart";
import { Picker } from "emoji-mart";

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const filePickerRef = useRef();

  const loadingPost = () => {
    if (isLoading) {
      return setIsLoading(true);

      // api fetching here for posting astnaha mn backend
    }
  };

  const emojiHandler = () => {
    setShowEmoji(!showEmoji);
  };

  const addImageToPost = () => {};

  const filePickerRefHandler = () => {
    filePickerRef.current.click();
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const fileHandler = () => {
    setSelectedFile();
  };

  return (
    <div className={`border-gray-700 border-b p-3 flex space-x-3`}>
      <img
        alt="Profile"
        src={profile}
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input}
            onChange={inputHandler}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-white text-lg
             placeholder-gray-500 tracking-wide w-full min-h-[50px] "
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full 
            flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={fileHandler}
              >
                <XIcon className="text-white h-5 " />
              </div>
              <img
                alt="Choose a file"
                src={selectedFile}
                className=" rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={filePickerRefHandler}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="icon" onClick={emojiHandler}>
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
            {showEmoji && (
              <Picker
                data={Data}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md
           hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default Input;
