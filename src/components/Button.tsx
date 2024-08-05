import React, { PropsWithChildren } from "react";

import Badge from "../assets/badge.svg";
import Thumbnail from "../assets/thumbnail_badge.png";

export function Button({ children }: PropsWithChildren) {
  console.log(Badge);
  console.log(Thumbnail);
  return <button>{children}</button>;
}
