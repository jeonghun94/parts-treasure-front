import { QueryClient } from "@tanstack/react-query";
export const queryKey = ["users"];

export const loader = (queryClient: QueryClient) => async (): Promise<GetUsersResponse> => {
  return (
    queryClient.getQueryData<GetUsersResponse>(queryKey) ?? (await queryClient.fetchQuery<GetUsersResponse>(queryKey))
  );
};
