import { useCallback, useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLUListElement>,
  callback: () => void
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLUListElement)
      ) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, handleClickOutside]);
}
