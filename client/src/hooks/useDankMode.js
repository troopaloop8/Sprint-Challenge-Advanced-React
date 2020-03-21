import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDankMode = () => {
  const [dankMode, setDankMode] = useLocalStorage("UI");

  useEffect(() => {
    dankMode
      ? document.body.classList.add("dank-mode")
      : document.body.classList.remove("dank-mode");
  }, [dankMode]);
  return [dankMode, setDankMode];
};

export default useDankMode;