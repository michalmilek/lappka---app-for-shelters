import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectPreviousTitle,
  selectTitle,
  setPreviousTitle,
  setTitle,
} from "redux/breadcrumbsSlice";
import { mapEnglishToPolish } from "utils/appUtils";


const useBreadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter((part) => part !== "");
  const dispatch = useDispatch();
  const [dynamicTitle, setDynamicTitle] = useState("");
  const title = useSelector(selectTitle);
  const previousTitle = useSelector(selectPreviousTitle);

  const handleDynamicTitle = useCallback(
    (dynamicTitleValue: string) => {
      setDynamicTitle(dynamicTitleValue);
    },
    [setDynamicTitle]
  );

  const updateBreadcrumbs = useCallback(
    (newPreviousTitle: string, newTitle: string) => {
      dispatch(setPreviousTitle(newPreviousTitle));
      dispatch(setTitle(newTitle));
    },
    [dispatch]
  );

  useEffect(() => {
    if (dynamicTitle) {
      updateBreadcrumbs(
        mapEnglishToPolish(parts[parts.length - 2]) + " /",
        dynamicTitle
      );
    } else {
      if (parts.length >= 2) {
        const newPreviousTitle =
          parts[parts.length - 2] === "dashboard"
            ? ""
            : mapEnglishToPolish(parts[parts.length - 2]) + " /";
        const newTitle = mapEnglishToPolish(parts[parts.length - 1]);

        updateBreadcrumbs(newPreviousTitle, newTitle);
      } else {
        dispatch(setTitle(mapEnglishToPolish(parts[parts.length - 1])));
      }
    }
  }, [dynamicTitle, location, parts, updateBreadcrumbs, dispatch]);

  return { previousTitle, title, handleDynamicTitle };
};

export default useBreadcrumbs;
