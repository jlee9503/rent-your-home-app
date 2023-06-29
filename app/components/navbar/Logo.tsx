"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <Image alt="logo" height={100} width={100} src="/images/airbnb-logo.png" className="cursor-pointer" />
  );
};

export default Logo;
