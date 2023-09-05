import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

function SignalRComponent({ children }: { children: React.ReactNode }) {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://lapka-api-dev.azurewebsites.net/chathub")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("Connected with signalR server");
        newConnection.on("ReceiveMessage", (newMessage: string) => {
          console.log(newMessage);
        });
      })
      .catch((error) => console.error(error));

    setConnection(newConnection);

    return () => {
      if (newConnection) {
        newConnection.stop();
      }
    };
  }, []);

  return <>{children}</>;
}

export default SignalRComponent;
