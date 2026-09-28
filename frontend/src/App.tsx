import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // @ts-expect-error => there might be an error
    socket.send(message)
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    
    // @ts-expect-error => there might be an error
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message..."
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default App;
