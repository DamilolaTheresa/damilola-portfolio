"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomePage from "@/components/HomePage";

export default function Page() {
  const [showSplash, setShowSplash] =
    useState(true);

  return showSplash ? (
    <SplashScreen
      onComplete={() =>
        setShowSplash(false)
      }
    />
  ) : (
    <HomePage />
  );
}