import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { queryKey } from "./loader";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function Home() {
  const { data } = useQuery<any>({ queryKey });
  return <Container>{data}</Container>;
}

export default Home;
