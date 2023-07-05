import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import LightMap from './scenes/lightmap/LightMap';
import History from "./scenes/history";
import Team from "./scenes/team";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [sensorCount, setSensorCount] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  useEffect(() => {
    // Fetch sensor count
    fetch('http://localhost:3001/count')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Received count data: ", data);
    setSensorCount(data);
  })
  .catch(error => console.error('Error:', error));

    // Fetch timestamps
    fetch('http://localhost:3001/total-duration')
    .then(res => res.json())
    .then(data => setTimestamps(data))
    .catch(error => console.error('Error:', error));
    // Create a WebSocket connection
    const ws = new WebSocket('ws://localhost:8080');
  
    // Define the onopen event handler
    ws.onopen = () => {
      console.log("WebSocket connection opened");
      setSocket(ws);
    };
  
    // Define the onmessage event handler
    ws.onmessage = (event) => {
      console.log("Raw event data: ", event.data);
      try {
        const receivedData = JSON.parse(event.data);
        setData(prevData => [...prevData, receivedData]);
      } catch (error) {
        console.error("Failed to parse event data:", error);
      }
    };
  
    // Define the onerror event handler
    ws.onerror = (error) => {
      console.log(`WebSocket error: ${error}`);
    };
  
    // Define the onclose event handler
    ws.onclose = (event) => {
      console.log(`WebSocket connection closed: ${event}`);
      setSocket(null);
    };

    
  
    // Clean up the WebSocket connection on unmount
    return () => {
      if(ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);
  const handleDataChange = (newData) => {
    setData(prevData => [...prevData, newData]);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<LightMap data={data} handleDataChange={handleDataChange} sensorCount={sensorCount} timestamps={timestamps}/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/history" element={<History data={data} />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie sensorCount={sensorCount}/>} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} /> 
            </Routes>
          </main>
        </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

