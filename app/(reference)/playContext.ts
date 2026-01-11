import { Dispatch, SetStateAction, createContext } from "react";

interface playChoice {
  name: string;
  image: string;
}

interface setChoice {
  playChoice: playChoice;
  setPlayChoice: (choice: playChoice) => void;
}

export const PlayContext = createContext<setChoice>({
  playChoice: { name: "", image: "" },
  setPlayChoice: () => {},
});
