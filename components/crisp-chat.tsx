"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("df57b465-fa67-4ae1-b08c-34cd64d3c19d");
  }, []);

  return null;
};
