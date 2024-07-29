import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";


export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      withCredentials: true,
      extraHeaders: {
        "Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_URL
      }
    });
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
