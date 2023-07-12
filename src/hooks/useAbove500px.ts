import { useState, useEffect } from "react";

function useAbove500px() {
  const [above500px, setAbove500px] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => setAbove500px(window.innerWidth >= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return above500px;
}

export default useAbove500px;
