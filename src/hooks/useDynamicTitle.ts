import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { mapEnglishToPolish } from "utils/appUtils";

const useDynamicTitle = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter((part) => part !== "");
  const [dynamicTitle, setDynamicTitle] = useState("");

  const handleDynamicTitle = useCallback((dynamicTitleValue: string) => {
    setDynamicTitle(dynamicTitleValue);
  }, []);

  useEffect(() => {
    if (dynamicTitle) {
      document.title = dynamicTitle;
    } else {
      if (parts.length >= 2) {
        const newTitle = mapEnglishToPolish(parts[parts.length - 1]);
        document.title = `ŁAPPKA - ${newTitle}`;
      } else {
        document.title = `ŁAPPKA - ${mapEnglishToPolish(
          parts[parts.length - 1]
        )}`;
      }
    }
  }, [dynamicTitle, location, parts]);

  return { dynamicTitle, handleDynamicTitle };
};

export default useDynamicTitle;
