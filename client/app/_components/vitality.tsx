"use client";

import { useState } from "react";
import Armor from "/public/icons/stats/armor.svg";
import Death from "/public/icons/magic/death.svg";
import { motion } from "framer-motion";

export default function HealthCircle({
  health_max,
  health_lost,
  armor,
}: {
  health_max: number;
  health_lost: number;
  armor: number;
}) {
  const total_length = 565;
  const health = health_max - health_lost;

  function calcOffset(perc: number) {
    return total_length - perc * total_length;
  }

  const [offset, setOffset] = useState(calcOffset(health / health_max));

  return (
    <div className="flex justify-center items-center h-full aspect-square relative font-header">
      <motion.div
        className="flex rounded-full aspect-square h-[90%] items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.5 }}
      >
        {health > 0 ? (
          <p className="z-10 font-bold text-xl">{health}</p>
        ) : (
          <Death className="h-1/2 aspect-square absolute fill-primary-light" />
        )}
        <svg
          viewBox="0 0 200 200"
          className="h-full aspect-square absolute -rotate-90"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            id="back"
            r="90"
            cx="100"
            cy="100"
            className="fill-transparent stroke-danger-light stroke-[5%]"
            strokeDasharray={total_length}
            initial={{ strokeDashoffset: total_length }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.circle
            id="bar"
            r="90"
            cx="100"
            cy="100"
            className="fill-transparent stroke-success-light stroke-[10%]"
            strokeDasharray={total_length}
            strokeDashoffset={-offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: total_length }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1 }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute left-0 bottom-0 h-2/5 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Armor className="absolute z-10 h-full aspect-square fill-primary-light" />
        <p className="z-20 font-bold text-primary-dark leading-none">{armor}</p>
      </motion.div>
    </div>
  );
}
