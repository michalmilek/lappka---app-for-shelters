import useDeviceType from "hooks/useDeviceType";
import React, { createContext, useState } from "react";

export const MobileMenuContext = createContext({
  IsMobileMenuOpen: false,
  handleMobileMenu: (value: boolean) => {},
});

const MobileMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const deviceType = useDeviceType();
  console.log(deviceType);
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(
    deviceType === "mobile" ? true : false
  );

  const handleMobileMenu = (value: boolean) => {
    setIsMobileMenuOpen(value);
  };

  return (
    <MobileMenuContext.Provider value={{ IsMobileMenuOpen, handleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
