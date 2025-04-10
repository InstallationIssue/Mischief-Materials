// prettier-ignore
'use client'

import { motion } from "framer-motion";

export default function Switch() {
  return (
    <label>
      <input type="checkbox" className="hidden peer" />
      <div className="flex h-8 aspect-[2/1] p-1 bg-primary-grey rounded-full peer-checked:bg-highlight-light transition-colors peer-checked:justify-end">
        <div className="h-full aspect-square rounded-full bg-primary-light" />
      </div>
    </label>
  );
}
