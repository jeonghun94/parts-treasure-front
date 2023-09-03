import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { queryKey } from "./loader";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function Home() {
  const { data } = useQuery<GetUsersResponse>({ queryKey });
  return (
    <Container>
      {data?.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </Container>
  );
}

export default Home;
