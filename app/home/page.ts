import React from "react";
import { getUserById } from "../queries";

const HomePage = async () => {
  const user = await getUserById("68f7a9da8e2d6a81cba27196");

  return React.createElement(
    "div",
    {
      className:
        "text-5xl font-bold flex flex-col space-y-4 items-center justify-center w-full h-screen text-green-500",
    },
    `Welcome ${user?.name} to Dev's On Start`
  );
};

export default HomePage;
