import React from "react";
import { loaders } from "../loaders";
import { LandingPage } from "../screens/onboarding";

export async function loader(args: any) {
  return loaders.onboarding(args);
}

export function Component() {
  return <LandingPage />;
}
Component.displayName = "landingPage";
