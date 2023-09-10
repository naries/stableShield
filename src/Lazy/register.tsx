import React from "react";
import { loaders } from "../loaders";
import { Register } from "../screens/onboarding";

export async function loader(args: any) {
  return loaders.register(args);
}

export function Component() {
  return <Register />;
}
Component.displayName = "registerPage";
