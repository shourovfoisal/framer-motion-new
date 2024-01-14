import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

export const ListComponent = () => {
  const [isPresent, safeToRemove] = usePresence(); // Used to provide exit animation
  const [parentElement, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const entryAnimation = async () => {
        await animate("li", { opacity: [0, 1] }, { duration: 0.3 });
      };
      entryAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("li", { opacity: [1, 0] }, { duration: 0.3 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, animate, safeToRemove]);

  return (
    <ul className="mx-auto w-fit space-y-2 mt-4" ref={parentElement}>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item A</li>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item B</li>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item C</li>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item D</li>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item E</li>
      <li className="p-2 rounded-sm bg-slate-600 text-white">Item F</li>
    </ul>
  );
};
