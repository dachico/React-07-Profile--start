import { useEffect, useState } from "react";
import { List } from "./list";
import { Filter } from "./filter";
import { Profile } from "./profile";

import styled from "styled-components";

export function App() {
  const [robotsList, setRobotsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [pickRobot, setPickRobot] = useState(null);
  const [firstRobot, setFirstRobot] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(data_url);
        const data = await response.json();
        // console.table(data);
        // console.log(`${data.length} items loaded`);
        setRobotsList(data.map((item) => ({ ...item, show: true })));

        const firstItem = data[0];
        setFirstRobot(firstItem);
      } catch (error) {
        setErrorMsg(`fetch operation failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  // useEffect(() => { tried to use effect for the first robot and somehow wait for the async robot list to load but it didnt work (added it to the getData useEffect)
  //   if (robotsList.length > 0 && !isLoading) {
  //     let firstItem = robotsList.find((robot) => robot.id === 1);
  //     if (firstItem) setFirstRobot(firstItem);
  //   }
  // }, []);
  console.log(firstRobot);

  return (
    <Div>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="load-label">Loading...</h1>
      ) : (
        <>
          <Split>
            <Profile pickRobot={pickRobot} firstRobot={firstRobot} />
            <Filter listData={robotsList} onFilter={setRobotsList} />
            <List listData={robotsList} onPick={setPickRobot} />
          </Split>
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  background: Cornsilk;
  padding: 10rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  /* height: 85vh; */

  & > h1 {
    font-family: "Expletus Sans";
    font-size: 3.5rem;
    font-weight: 400;
    color: maroon;
  }
`;

const Split = styled.div`
  display: flex;
`;
