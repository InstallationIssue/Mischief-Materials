import Weak from "/public/icons/beings/size-1.svg";
import Typical from "/public/icons/beings/size-2.svg";
import Tough from "/public/icons/beings/size-3.svg";
import Hulking from "/public/icons/beings/size-4.svg";
import Colossal from "/public/icons/beings/size-5.svg";
import Gargantuan from "/public/icons/beings/size-final.svg";

import React from "react";

type sizeIcon = {
  key: string;
  node: React.ReactNode;
};

const sizeImageOptions: sizeIcon[] = [
  { key: "weak", node: <Weak /> },
  { key: "typical", node: <Typical /> },
  { key: "tough", node: <Tough /> },
  { key: "hulking", node: <Hulking /> },
  { key: "colossal", node: <Colossal /> },
  { key: "gargantuan", node: <Gargantuan /> },
];

export function getSizeIconOptions() {
  var keyList: string[] = [];
  sizeImageOptions.forEach((option) => keyList.push(option.key));
  return keyList;
}

export default function SizeIcon({ icon }: { icon: string }) {
  return (
    sizeImageOptions.find((option) => option.key === icon)?.node || <Weak />
  );
}
