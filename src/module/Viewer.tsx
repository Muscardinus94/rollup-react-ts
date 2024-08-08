import React from "react";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import { getEnv } from "../utils/common";
import moment from "moment";
import { Lottie } from "../components/Lottie";
moment.locale("ko");

export function Viewer() {
  return (
    <div>
      Current Time: {moment.now()}
      <br />
      Environment: {getEnv()}
      <br />
      <Lottie />
      <Button>Button</Button>
      <Typography>Typography</Typography>
    </div>
  );
}
