import ReactLottie from "react-lottie";
import { useEffect, useState } from "react";
import axios from "axios";

export function Lottie() {
  const [lottieSrc, setLottieSrc] = useState<unknown>(null);

  useEffect(() => {
    axios
      .get(
        "https://static.bunjang.co.kr/cms/1qgkhyFScbKbb89cMtPSreTgROstxvpyL.json",
      )
      .then((data) => {
        setLottieSrc(data);
      });
  }, []);

  return (
    <>
      {lottieSrc ? (
        <ReactLottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottieSrc,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
              hideOnTransparent: true,
            },
          }}
        />
      ) : null}
    </>
  );
}
