import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Lights Data Chart" subtitle="Displays data for each street light." />
      <Box height="74vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
