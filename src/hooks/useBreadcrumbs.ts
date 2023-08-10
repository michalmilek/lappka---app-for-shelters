import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectPreviousTitle,
  selectTitle,
  setPreviousTitle,
  setTitle,
} from "redux/breadcrumbsSlice";

const useBreadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter((part) => part !== "");
  const dispatch = useDispatch();
  const title = useSelector(selectTitle);
  const previousTitle = useSelector(selectPreviousTitle);

  useEffect(() => {
    if (parts.length >= 2) {
      if (parts[parts.length - 2] === "dashboard") {
        dispatch(setPreviousTitle(""));
        dispatch(setTitle(parts[parts.length - 1]));
      } else {
        dispatch(setPreviousTitle(parts[parts.length - 2]));
        dispatch(setTitle(parts[parts.length - 1]));
      }
    }
  }, [location, parts, dispatch]);

  return { previousTitle, title };
};

export default useBreadcrumbs;
