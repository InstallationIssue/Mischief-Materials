import { useState } from "react";

export default function Armor() {
  const [armor, setArmor] = useState(6);

  return (
    <div className="relative w-24 h-24 flex justify-center items-center">
      <svg
        viewBox="0 0 90 91"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <circle
          cx="45"
          cy="45.2458"
          r="44"
          fill="#31313B"
          stroke="url(#paint0_angular_401_25877)"
          strokeWidth="2"
        />
        <path
          d="M45.2117 21.1182L45.2278 21.1255L45.244 21.1324L64.6194 29.3538L64.6213 29.3546C66.3786 30.0974 67.6536 31.8147 67.6463 33.8517C67.5959 43.8157 63.4868 61.7536 46.5198 69.8777L46.5196 69.8778C45.2109 70.5047 43.6914 70.5047 42.3827 69.8778L42.3825 69.8777C25.4157 61.7537 21.3065 43.8161 21.256 33.852C21.2486 31.8149 22.5236 30.0975 24.281 29.3546L24.2826 29.3539L43.6683 21.1325L43.691 21.1228L43.7133 21.1125C43.933 21.0107 44.1906 20.9531 44.4512 20.9531C44.7093 20.9531 44.972 21.0098 45.2117 21.1182Z"
          fill="#F2F5EA"
          stroke="#2446DB"
          strokeWidth="3"
        />
        <circle cx="78.5834" cy="54.454" r="5.41667" fill="#2446DB" />
        <circle cx="11.4167" cy="54.454" r="5.41667" fill="#D9D9D9" />
        <circle cx="20.6248" cy="69.621" r="5.41667" fill="#D9D9D9" />
        <circle cx="11.4167" cy="36.0378" r="5.41667" fill="#D9D9D9" />
        <circle cx="20.6248" cy="20.8708" r="5.41667" fill="#D9D9D9" />
        <circle cx="35.7919" cy="11.6625" r="5.41667" fill="#D9D9D9" />
        <circle cx="54.2082" cy="11.6625" r="5.41667" fill="#2446DB" />
        <circle cx="69.3752" cy="20.8708" r="5.41667" fill="#2446DB" />
        <circle cx="78.5834" cy="36.0378" r="5.41667" fill="#2446DB" />
        <circle cx="69.3752" cy="69.621" r="5.41667" fill="#2446DB" />
        <circle cx="54.2082" cy="78.8293" r="5.41667" fill="#2446DB" />
        <circle cx="35.7919" cy="78.8293" r="5.41667" fill="#D9D9D9" />
      </svg>
      <p className="text-primary-dark font-header font-bold text-2xl z-10">
        {armor}
      </p>
    </div>
  );
}
