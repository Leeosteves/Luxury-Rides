import { useContext } from "react";
import { DataContext } from "~/context/Data";

const useData = () => {
  const context = useContext(DataContext);
  return context;
};
export default useData;
