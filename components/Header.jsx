import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <main className="fixed z-[100] w-full bg-red-400 p-1">
      <div className="relative mx-auto flex max-w-7xl flex-1 justify-end space-x-10 overflow-clip px-5 text-black-100 sm:px-10">
        <div className="flex flex-1 justify-end space-x-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                fill="#0F0F0F"
              ></path>{" "}
            </g>
          </svg>
          <p>+1 23238-9900</p>
        </div>
        <div className="flex justify-end space-x-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              ></rect>{" "}
            </g>
          </svg>
          <p>travis@cactusjack.com</p>
        </div>
      </div>
    </main>
  );
};

export default Header;
