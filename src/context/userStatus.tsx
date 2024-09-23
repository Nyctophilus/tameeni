import { userStatus } from "@/lib/actions";
import { createContext, useEffect, useState } from "react";

export const UserStatusContext = createContext<any>(null);

export const UserStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await userStatus();

      const { isLoggedIn } = res.data;

      setIsLoggedIn(isLoggedIn);
    })();
  }, []);

  return (
    <UserStatusContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserStatusContext.Provider>
  );
};
