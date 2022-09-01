import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  dataArr: [],
  barOpen: false,
  barToggleHandler: () => {},
});

export const DataProvider = ({ children }) => {
  const [dataArr, setDataArr] = useState([]);
  const [barOpen, setBarOpen] = useState(false);

  const barToggleHandler = () => setBarOpen(!barOpen);

  const fetch_api = async () => {
    const api = `https://api.facthunt.in/fostergem/v1/post/list/public`;
    const Data = await fetch(api).then((res) => res.json());
    setDataArr(Data.content);
    console.log(Data.content);
  };

  useEffect(() => {
    fetch_api();
  }, []);

  const value = { dataArr, barOpen, barToggleHandler };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
