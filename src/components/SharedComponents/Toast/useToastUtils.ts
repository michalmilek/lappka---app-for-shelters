import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const useToastUtils = () => {
  const { t } = useTranslation();

  const getMessage = useCallback(
    (type: "success" | "error") => {
      if (type === "success") {
        return t("toast.success");
      } else if (type === "error") {
        return t("toast.success");
      }
    },
    [t]
  );

  return { getMessage };
};

export default useToastUtils;
