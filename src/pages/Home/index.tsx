import React, { useEffect, useLayoutEffect, useState } from "react";
import "~/pages/Home/styles.sass";
import api from "~/utils/api";
import { Cars } from "~/@types/cars";
import useData from "~/hooks/useData";

const Home = () => {
  const { data } = useData();

  return (
    <div className="home">
      <p>{data?.models?.sport[0]?.engine}</p>
    </div>
  );
};

export default Home;
