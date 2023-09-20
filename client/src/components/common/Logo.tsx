const lgLogoSrc = "/finsinai_lg_logo.png";
const rdLogoSrc = "/finsinai_rd_logo.png";
import styled from "@emotion/styled";

let _sqlogo = styled("img")`
  width: 165px;
`;
let _rdlogo = styled("img")`
    width: 45px;
    height: 45px;
`;

export const SquardLogo = () => {
  return <_sqlogo src={lgLogoSrc} />;
};
export const RoundLogo = () => {
  return <_rdlogo src={rdLogoSrc} />;
};
