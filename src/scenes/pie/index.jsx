import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";


function Pie({sensorCount}) {
  // Ovdje pretpostavljamo da imate podatke za graf spremljene u state varijabli "sensorCount"

  return (
    <Box m="20px">
    <Header title="Activation counter" subtitle="A graph that displays how many times each light is activated." />
      <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: "65vh", width: "50%" }}>
        <PieChart data={sensorCount} />
      </Box>
    </Box>
  );
}

export default Pie;