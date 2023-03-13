import { useEffect, useState, createContext } from "react";
import { Data, Model } from "~/@types/data";
import api from "~/utils/api";
import { DataContextProps } from "./types";

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

const DataProvider = ({ children }: any) => {
  /**
   * States
   */
  const [models, setModels] = useState<Model>();

  /**s
   * Callbacks
   */

  const getCars = async () => {
    const { data }: Data = await api.get("cars.json");
    setModels(data.models);
  };

  /**
   * Effects
   */

  useEffect(() => {
    getCars();
  }, []);

  return (
    <DataContext.Provider value={{ models }}>{children}</DataContext.Provider>
  );
};
export default DataProvider;
