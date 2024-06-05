import { Button } from "@fluentui/react-components";
import { useTheme } from "@providers/ProvideTheme";
import styled from "styled-components";
import { teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import { useCallback, useState } from "react";

const Main = styled.div`
  width: 99vw;
  height: 99vh;
  border: solid red;
`;

function Start() {
  let { theme, toggleTheme } = useTheme();
  let [boolFlag, setBoolFlag] = useState<boolean>(true);

  const changeTheme = useCallback(() => {
    setBoolFlag(!boolFlag);
    toggleTheme(boolFlag);
  }, [boolFlag]);
  


  return (
    <Main>
      <Button appearance="primary" onClick={changeTheme}>
        Toggle Theme
      </Button>
    </Main>
  );
}

export default Start;
