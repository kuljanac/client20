import { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import "../../../node_modules/leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
function LightMap({data, sensorCount = [], timestamps = []}) {
// Here we use sensorCount and timestamps 
console.log("Sensor Counts: ", sensorCount);
console.log("Timestamps: ", timestamps);

const [lightStatus, setLightStatus] = useState({
  lamp1: true,
  lamp2: true,
  lamp3: true,
  lamp4: true,
  lamp5: true
});
/*useEffect(() => {
  // Simulate changing status
  setTimeout(() => {
    setLightStatus(prevStatus => ({
      ...prevStatus,
      lamp1: !prevStatus.lamp1
    }));
  }, 1000);
}, [lightStatus]);*/

  const lights = [
    { id: 1, name: "Light 1", location: "Location 1", lat: 45.810825, lng: 16.041033 },
    { id: 3, name: "Light 3", location: "Location 3", lat: 45.811390, lng: 16.040999 },
    { id: 5, name: "Light 5", location: "Location 5", lat: 45.811200, lng: 16.041915 },
    { id: 4, name: "Light 4", location: "Location 4", lat: 45.812063, lng: 16.041007 },
    { id: 2, name: "Light 2", location: "Location 2", lat: 45.812067, lng: 16.041702 },
  ];

  const customIconOn= new Icon({
    iconUrl: require("../../img/logo-icon.png"),
    iconSize: [21, 37]
  })
  
  const customIconOff = new Icon({
    iconUrl: require("../../img/logo-icon-off.png"),
    iconSize: [21, 37]
  });

  const latestStates = data.reduce((acc, curr) => {
    if (curr && curr.sensorName) {
    const sensorId = parseInt(curr.sensorName.replace('PIR', ''));
    acc[sensorId] = curr.sensorState === "Deactivated" ? "OFF" : "ON";
    }
    return acc;
  }, {});

  const updatedLights = lights.map(light => {
    const state = latestStates[light.id] || "OFF";
    const icon = state === "ON" ? customIconOn : customIconOff;
    return { ...light, state, icon };
  });

  const relevantLogs = data.filter(log => log && log.sensorName && log.sensorName.startsWith('PIR'));
  // Sort logs by timestamp (newest first)
  relevantLogs.sort((a, b) => b.timestamp - a.timestamp);
  // Get the last 7 relevant logs
  const reversedLogs = relevantLogs.reverse();
  const lastSevenLogs = reversedLogs.slice(0, 7); 
  //Format into correct timestamp
  function formatTimestamp(timestampStr) {
    const date = new Date(timestampStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth is zero-indexed.
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  }
  return (
    <div>
      <MapContainer center={[45.811515, 16.041591]} zoom={22} scrollWheelZoom={false} attributionControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {updatedLights && updatedLights.map(light => (
          <Marker key={light.id} position={[light.lat, light.lng]} icon={light.icon}>
            <Popup>
              <div>
                <h3>{light.name}</h3>
                <p>{light.location}</p>
                <p>{light.state}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Box m="0 0 10px 20px">
      <h3>Data Count: {data.length}</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sensor ID</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastSevenLogs.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.sensorName}
                  </TableCell>
                  <TableCell align="right">{row.sensorState === "Deactivated" ? "OFF" : "ON"}</TableCell>
                  <TableCell align="right">{formatTimestamp(row.timestamp)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
export default LightMap;