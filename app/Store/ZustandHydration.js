"use client";
import React, { useEffect, useState } from "react";

const ZustandHydration = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  //wait till nextjs rehydration complete
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default ZustandHydration;
