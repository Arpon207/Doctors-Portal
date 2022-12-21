import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../axios";

const useAdmin = (user) => {
  const email = user?.email;
  if (email) {
    const { data, isLoading } = useQuery(["CurrentUser"], () =>
      fetchData.get(`/users/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
    );
    return { data: data?.data, isLoading };
  }
};

export default useAdmin;
