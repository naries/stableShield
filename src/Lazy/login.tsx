import React from "react";
import { loaders } from "../loaders";
import { Login } from "../screens/onboarding";

export async function loader(args: any) {
  return loaders.login(args);
}

export function Component() {
  return <Login />;
}
Component.displayName = "registerPage";
