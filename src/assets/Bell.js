import React from "react";

const Bell = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Bell">
        <path
          id="bell"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 7V7.28988C16.8915 8.15043 19 10.829 19 14V19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19V14C5 10.829 7.10851 8.15043 10 7.28988V7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM7 19H17V14C17 11.2386 14.7614 9 12 9C9.23858 9 7 11.2386 7 14V19ZM14 21H10C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
          fill="#8F92A1"
        />
        <g id="Counter-Bubble">
          <g id="Fond" clip-path="url(#clip0_0_534)">
            <circle id="Color-or-Image" cx="18" cy="8" r="8" fill="#0052CC" />
          </g>
          <path
            id="Counter"
            d="M17.7731 11V6.568L16.8531 6.784V6L18.2051 5.4H18.8371V11H17.7731Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_534">
          <rect width="16" height="16" fill="white" transform="translate(10)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bell;
