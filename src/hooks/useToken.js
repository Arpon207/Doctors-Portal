import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "./../axios";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const userData = {
      name: user?.user?.displayName,
      email: user?.user?.email,
    };
    if (email) {
      const getToken = async () => {
        const { data } = await fetchData.put(`/users/${email}`, userData);
        if (data) {
          setToken(data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
        }
      };
      getToken();
    }
  }, [user]);
  return [token];
};

export default useToken;
