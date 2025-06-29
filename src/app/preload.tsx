import React, { FC, ReactElement } from "react";

const PreloadAssets: FC = (): ReactElement => {
  return (
    <>
      <link
        rel="preload"
        href="NightstandWithPhone/Nightstand.png"
        as="image"
      />
      <link rel="preload" href="Desk/monitor.png" as="image" />
      <link rel="preload" href="Desk/keyboard.png" as="image" />
      <link rel="preload" href="Desk/mouse.png" as="image" />
      <link rel="preload" href="Desk/Bankerlamp.png" as="image" />
      <link rel="preload" href="Desk/desk.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_0.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_1.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_2.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_3.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_4.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_5.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_6.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_7.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_8.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_9.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_star.png" as="image" />
      <link rel="preload" href="Phone/phone_pressing_pound.png" as="image" />
    </>
  );
};

export default PreloadAssets;
