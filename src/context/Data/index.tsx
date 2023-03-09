import { useEffect, useState, createContext } from "react";
import api from "~/utils/api";
import { DataContextProps } from "./types";

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

const DataProvider = ({ children }: any) => {
  /**
   * States
   */
  const [data, setData] = useState([]);

  /**
   * Callbacks
   */

  const getCars = async () => {
    const { data }: DataContextProps = await api.get("cars.json");
    setData(data);
  };

  /**
   * Effects
   */

  useEffect(() => {
    getCars();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
