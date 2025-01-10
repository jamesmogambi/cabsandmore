"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PhoneInput from "react-phone-input-2";

const ProfileForm = () => {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek="
  );

  const fileInputRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px]">
      <div className="p-4 bg-[#FBFAFA]">
        <h5 className="text-[20px] font-bold">My Profile</h5>
      </div>
      <div className="bg-white pb-10 overflow-hidden  ">
        {/* // user image */}

        <div className="flex pt-4 pb-8 justify-center items-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <div className="w-[100px] cursor-pointer relative group rounded-full h-[100px] border-[2px] border-neutral-200 overflow-hidden">
            <Image className=" object-cover" src={image} fill />
            <div className="inset-0 absolute bg-white opacity-70 invisible group-hover:visible"></div>
            <div
              onClick={handleButtonClick}
              className="absolute flex justify-center items-center inset-0 invisible group-hover:visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#78716c"
                class="w-7 h-7"
              >
                <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* other fields */}
        <div className="w-full px-5 space-y-4 ">
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c] ">First Name</Label>
              <Input
                type="text"
                placeholder="First Name"
                className="border-neutral-300 text-base rounded-[5px] "
              />
            </div>
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="border-neutral-300   text-base rounded-[5px]"
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c] ">Contact Number</Label>
              <div className="block">
                <PhoneInput
                  country={"ke"}
                  // value={phone}
                  // onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    height: 39,
                    fontSize: 16,
                  }}
                />
              </div>
            </div>
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c] ">
                Emergency Contact Number
              </Label>
              <div>
                <PhoneInput
                  country={"ke"}
                  // value={phone}
                  // onChange={(phone) => setPhone(phone)}
                  inputStyle={{
                    width: "100%",
                    height: 39,
                    fontSize: 16,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-5  justify-center items-center">
          <Button className="text-lg border hover:bg-zinc-400 hover:border-none border-neutral-400 text-white w-2/4 bg-[#4ab574] rounded-[5px]">
            Update
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
