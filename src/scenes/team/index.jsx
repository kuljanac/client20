import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Box sx={{ m: "20px" }}>
      <Header title="Our Team" subtitle="Contact information" />
      <Box sx={{ display: "flex", gap: "40px", justifyContent: 'center', alignItems: 'center' }}>
        {/* First team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px" color={colors.yellowAccent[500]}>
            Marino Kuljanac
          </Typography>
          <Typography variant="body1" mb="10px">
           
          </Typography>
          <Typography variant="subtitle2" mb="5px">
           
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: marino.kuljanac@tvz.hr
          </Typography>
          <Typography variant="body2">Phone: +385 91 9442 013</Typography>
        </Box>
        {/* Second team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px" color={colors.yellowAccent[500]}>
            Krunoslav Matić
          </Typography>
          <Typography variant="body1" mb="10px">
           
          </Typography>
          <Typography variant="subtitle2" mb="5px">
           
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: krunoslav.matic@tvz.hr
          </Typography>
          <Typography variant="body2">Phone: +385 95 5276 077</Typography>
        </Box>
        {/* Third team member */}
        <Box sx={{ maxWidth: "400px" }}>
          <Typography variant="h2" mb="10px" color={colors.yellowAccent[500]}>
            Mislav Penić
          </Typography>
          <Typography variant="body1" mb="10px">
          
          </Typography>
          <Typography variant="subtitle2" mb="5px">
            
          </Typography>
          <Typography variant="body2" mb="5px">
            Email: mislav.penic@tvz.hr
          </Typography>
          <Typography variant="body2">Phone: +385 99 4805 332</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
