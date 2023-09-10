import React from "react";
import { loaders } from "../loaders";
import { Layout } from "../screens/Protected";

export async function loader(args: any) {
  return loaders.protected(args);
}

export function Component() {
  return <Layout />;
}
Component.displayName = "layoutcontainer";
