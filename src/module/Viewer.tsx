import React from "react";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import { getEnv } from "@utils";

export function Viewer() {
  return (
    <div>
      Environment: {getEnv()}
      <Button>Button</Button>
      <Typography>Typography</Typography>
    </div>
  );
}
