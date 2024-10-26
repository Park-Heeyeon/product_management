import { useState } from "react";

const useAdmin = (initialState: boolean) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(initialState);

  const toggleAdmin = () => {
    setIsAdmin((prev) => !prev);
  };
  return { isAdmin, toggleAdmin };
};
export default useAdmin;
