import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import logoIcon from '../../img/logo-icon.png';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HistoryIcon from '@mui/icons-material/History';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.white[100],
        margin: "7% 0 0 0"
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        //"& .pro-inner-item": {
        //  padding: "5px 35px 5px 20px !important",
        //},
        "& .pro-inner-item:hover": {
          color: `${colors.yellowAccent[200]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.yellowAccent[300]} !important`,
        },
        
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" style={{margin: "0 0 0 0", padding: "0", display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"flex-start"}}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.primary[300],
              margin: "10px 0 20px 0"
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-around" alignItems="center" margin="0" padding="0">
              <Box>
                <img
                  alt="logo"
                  width="35px"
                  height="60px"
                  src={ logoIcon }
                  style={{ cursor: "pointer",
                  margin: "0 0 0 0"
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color={colors.white[100]}
                  fontWeight="bold"
                  sx={{ m: "0 0 0 0" }}
                >
                  illuminiq
                </Typography>
              </Box>
              <Box
              marginRight={isCollapsed ? undefined : "-2%"}
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
            
          )}
          </MenuItem>
          {/* MENU ITEMS*/}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="History"
              to="/history"
              icon={<HistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.yellowAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Lights Data Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sensors Data Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.yellowAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Message us"
              to="/form"
              icon={<FeedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />        
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;