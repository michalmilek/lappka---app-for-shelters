import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

function useDeviceType(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>(() => {
      const width = window.innerWidth;
      if (width < 550) {
        return "mobile";
      } else if (width < 768) {
        return "tablet";
      } else if (width < 1024) {
        return "laptop";
      } else {
        return "desktop";
      }
    });

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width < 550) {
          setDeviceType("mobile");
        } else if (width < 768) {
          setDeviceType("tablet");
        } else if (width < 1024) {
          setDeviceType("laptop");
        } else {
          setDeviceType("desktop");
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return deviceType;
}

export default useDeviceType;
