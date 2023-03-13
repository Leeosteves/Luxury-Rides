import useData from "../useData";
import { Model } from "./types";

const useModel = () => {
  const { models } = useData();

  function selectModel(model: Model) {
    return models?.[model];
  }

  return { selectModel };
};

export default useModel;
