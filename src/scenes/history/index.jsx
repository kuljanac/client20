import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const History = ({ data = [] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Group sensor data by sensor name
  const groupedData = data.reduce((acc, curr) => {
    if (curr.sensorName && curr.sensorName.startsWith('PIR')) {  // Include only 'PIR' sensors
      acc[curr.sensorName] = acc[curr.sensorName] || [];
      acc[curr.sensorName].push(curr);
    }
    return acc;
  }, {});

  // Create ordered list of keys
  const orderedKeys = Object.keys(groupedData).sort((a, b) => parseInt(a.replace('PIR', '')) - parseInt(b.replace('PIR', '')));

  // Format the timestamp
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth is zero-indexed.
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  }

  return (
    <Box m="20px">
      <Header title="History" subtitle="History logs of every lamp." />

      {orderedKeys.map((sensorName, index) => (
        <Accordion defaultExpanded key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.yellowAccent[500]} variant="h4">
              {`Light ${sensorName.replace("PIR", "")}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {groupedData[sensorName]
                .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
                .map((log, index) => (
                  <p key={index}>
                    {`${log.sensorName} ${log.sensorState} at ${formatTimestamp(log.timestamp)}`}
                  </p>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default History;
