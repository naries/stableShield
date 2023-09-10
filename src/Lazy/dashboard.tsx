import React from "react";
import { loaders } from "../loaders";
import { Dashboard } from "../screens/Protected";

export async function loader(args: any) {
  return loaders.dashboard(args);
}

export function Component() {
  return <Dashboard />;
}
Component.displayName = "dashboard";
