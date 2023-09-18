import React from "react";
import useravatar from "../../../assets/images/user-avatar.webp";

const Topbar = (props) => {
  function change_them_color(params) {
    document.documentElement.setAttribute("data-theme", params);
  }
  return (
    <div className="bg-base-200 rounded-xl py-3 px-2 flex justify-between items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={props.change_menu_status}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div>
        <h1 className="font-semibold md:text-xl">Admin Dashboard With ReactJs</h1>
      </div>
      <div className="flex items-center">
        <div>
          <details className="dropdown">
            <summary className=" btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                ></path>
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("light")}
              >
                light
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("dark")}
              >
                dark
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("cupcake")}
              >
                cupcake
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("retro")}
              >
                retro
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("winter")}
              >
                winter
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("coffee")}
              >
                coffee
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("black")}
              >
                black
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("luxury")}
              >
                luxury
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("dracula")}
              >
                dracula
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("lemonade")}
              >
                lemonade
              </li>
              <li
                className="cursor-pointer p-1 hover:bg-base-200 rounded-lg"
                onClick={() => change_them_color("halloween")}
              >
                halloween
              </li>
            </ul>
          </details>
        </div>
        <div className="mr-2">
          <img src={useravatar} className="w-10 h-10" alt="user-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
