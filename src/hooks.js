import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useFlip = () => {
  const [state, setState] = useState(true);
  const flipCard = () => {
    setState((isUp) => !isUp);
  };
  return [state, flipCard];
};
const useAxios = (url) => {
  const [responses, setResponses] = useState([]);
  const addResponse = async () => {
    const res = await axios.get(url);
    setResponses((responses) => [...responses, { ...res.data, id: uuid() }]);
  };
  console.log("responses", responses);
  return [responses, addResponse];
};

/*function useAxios(keyInLS, baseUrl) {
  const [responses, setResponses] = useLocalStorage(keyInLS);

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}*/

export { useFlip, useAxios };
