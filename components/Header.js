import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background: #222;
  color: #fff;
`;

export default () => (
  <Header>
    <h1>Header</h1>
  </Header>
);
