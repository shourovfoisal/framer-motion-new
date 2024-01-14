import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ListComponent } from "./ListComponent";

export const UseAnimateHook = () => {
  const [showItems, setShowItems] = useState(true);

  return (
    <div>
      <div
        onClick={() => setShowItems((prev) => !prev)}
        className="mx-auto bg-red-500 p-3 rounded-md text-white cursor-pointer select-none w-fit"
      >
        {(showItems ? "Hide" : "Show") + " Items"}
      </div>
      <AnimatePresence>{showItems && <ListComponent />}</AnimatePresence>
    </div>
  );
};
