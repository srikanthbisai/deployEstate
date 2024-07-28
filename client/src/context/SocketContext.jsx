import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const newSocket = io("https://try2-socket.onrender.com");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);


  useEffect(()=>{
   currentUser && socket?.emit("newUser", currentUser.id);
  }, [currentUser, socket]);


  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
