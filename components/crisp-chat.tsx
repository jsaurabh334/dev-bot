"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("80e425b3-389b-45e4-b9bc-9a1eedea4555");
  }, []);

  return null;
};
