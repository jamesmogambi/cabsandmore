import { deliveryServices } from "@/data/service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GooglePlay from "./ActionButtons/GooglePlay";
import AppleStore from "./ActionButtons/AppleStore";

const footerLinks = [
  {
    name: "About Us",
    path: "",
  },
  {
    name: "Contact Us",
    path: "",
  },
  {
    name: "Privacy Policy",
    path: "",
  },
  {
    name: "Terms & Conditions",
    path: "",
  },
];
const Footer = () => {
  const services = deliveryServices.slice(0, 14);
  return (
    <div className="bg-gradient-to-r from-[#D6FDEB] to-[#FFF1E3] flex justify-center  items-center">
      <div className="w-full  md:max-w-[1140px] ">
        <div className="w-full flex flex-col md:flex-row    p-4">
          <div className="p-8 w-full md:w-2/3 space-y-8">
            <div className="">
              <Link href="">
                <Image
                  width={500}
                  height={150}
                  src={"/images/logo1.png"}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="logo"
                  quality={75}
                />
              </Link>
            </div>
            <div className="space-y-3">
              <h5 className="text-[24px] text-[#000000] font-[400]">
                Download Now From
              </h5>
              <div className="flex flex-row gap-3">
                <GooglePlay />
                <AppleStore />
              </div>
            </div>

            <div className="space-y-5">
              <h5 className="text-[24px] text-[#000000] font-[400]">
                Quick Links
              </h5>
              <div className="flex justify-start flex-wrap gap-y-2">
                {services.map((i, k) => (
                  <Link
                    key={k}
                    href=""
                    className="text-[20px] hover:text-lightgreen hover:border-r-lightgreen text-titledark font-[500] border-r-[1px] px-2"
                  >
                    {i.name}
                  </Link>
                ))}
                <Link
                  href=""
                  className="text-[20px] text-titledark font-[500] px-2 hover:text-lightgreen hover:border-lightgreen"
                >
                  see more
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8  space-y-4 md:space-y-0 w-full md:justify-between md:flex md:flex-col  md:flex-1 ">
            {/* social media icons */}
            <div className="flex gap-3">
              <Link
                href=""
                className="p-3 cursor-pointer h-12 flex justify-center items-center w-12 rounded-full bg-black hover:bg-lightgreen "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="facebook"
                  fill="#fff"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>

              <Link
                href=""
                className="p-3 cursor-pointer h-12 flex justify-center items-center w-12 rounded-full bg-black hover:bg-green-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 100 100"
                  viewBox="0 0 100 100"
                  id="linkedin"
                  width="24"
                  height="24"
                >
                  <g>
                    <path
                      fill="#fff"
                      d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381
			c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
                    ></path>
                    <path
                      fill="#09090b"
                      d="M53.453 82.005c0 0 0-23.878 0-23.879-.139-4.388 2.484-8.483 7.762-8.667 5.143 0 7.201 3.921 7.201 9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668 0-11.036 4.285-12.907 7.204l.095-6.2H39.239c.185 4.012-.001 42.763-.001 42.763L53.453 82.005zM31.37 63.461v-24.22H17.154v42.763h14.217C31.368 77.514 31.376 67.888 31.37 63.461zM24.265 33.404c4.956 0 8.042-3.284 8.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305 30.151 19.476 33.455 24.265 33.404z"
                    ></path>
                  </g>
                </svg>
              </Link>

              <Link
                href=""
                className="p-3 cursor-pointer h-12 flex justify-center items-center w-12 rounded-full bg-black hover:bg-green-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  id="instagram"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#fff"
                    d="M18.946 6.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594 4.412 4.412 0 0 0-1.594-1.039 6.606 6.606 0 0 0-2.184-.418C12.75 1.01 12.444 1 10 1s-2.75.01-3.71.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 2.51 2.511a4.412 4.412 0 0 0-1.039 1.594 6.606 6.606 0 0 0-.418 2.184C1.01 7.25 1 7.556 1 10s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C7.25 18.99 7.556 19 10 19s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C18.99 12.75 19 12.444 19 10s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM10 5.378A4.622 4.622 0 1 0 14.622 10 4.622 4.622 0 0 0 10 5.378zM10 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z"
                    transform="translate(-1 -1)"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* description  */}
            <div className="space-y-3 ">
              <h5 className="text-[24px] text-titledark font-[400]">
                This Is Demo Version
              </h5>
              <p className="text-[20px] text-[#616161] font-medium ">
                Our purpose of this demo version app is that people can
                understand what they getting from this app, how our app work,
                what are the features we provider and many more.
              </p>
            </div>

            <div className="space-y-2.5 ">
              <h5 className="text-[24px] text-titledark ">
                Contact Sales Support
              </h5>
              <div className="flex cursor-pointer items-center gap-4 font-bold">
                <Image
                  width={30}
                  height={30}
                  src={"/images/whatsapp.webp "}
                  className="object-contain "
                  alt="whatsapp"
                  quality={75}
                />
                <span className="text-titledark2 text-[18px]">
                  +254701694004
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-0 md:mt-6 flex justify-center items-center">
          <div className="">
            {footerLinks.map((i, k) => (
              <Link
                key={k}
                href={i.path}
                className={`${
                  k < footerLinks.length - 1 &&
                  "border-r border-titledark hover:border-lightgreen "
                } text-[20px] text-titledark hover:text-lightgreen px-2.5`}
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 pb-8">
          <Link href={""} className="text-titledark2 text-center ">
            © Copyright 2024 White Label Fox.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
