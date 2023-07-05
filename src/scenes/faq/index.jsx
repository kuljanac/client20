import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.yellowAccent[500]} variant="h4">
            1. What is illuminiq?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          illuminiq is a state-of-the-art, energy-efficient street lighting system that employs smart LED lighting. It uses advanced Radio Frequency (RF) sensors to detect movement and adjust light intensity accordingly. This results in considerable energy savings and provides a highly responsive lighting solution for public spaces.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.yellowAccent[500]} variant="h4">
            2. How does illuminiq save energy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          illuminiq smart street lights are designed to decrease their intensity when there is no activity detected in the area. When an RF sensor detects movement, such as a pedestrian or vehicle, the intensity of the light increases. This smart, responsive system ensures that full brightness is only used when needed, thus saving energy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.yellowAccent[500]} variant="h4">
          3. Are illuminiq street lights weather-resistant?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, illuminiq street lights are designed to withstand different weather conditions. They are IP65 rated, which means they are protected against dust and low-pressure water jets from any direction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.yellowAccent[500]} variant="h4">
          4. What kind of maintenance does the illuminiq system require?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The LED lights used in illuminiq have a long lifespan and require minimal maintenance compared to traditional street lights. The system is also designed to alert city management teams when maintenance is required, further simplifying upkeep.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.yellowAccent[500]} variant="h4">
          5. How much energy can a city save by using the illuminiq system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The exact energy savings can vary depending on factors such as the size of the city, the number of street lights, and the amount of nighttime activity. However, cities can typically expect to see energy reductions of up to 60-80% compared to traditional street lighting systems.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
