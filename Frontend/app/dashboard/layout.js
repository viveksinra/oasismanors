"use client";
import React, { useState, Suspense } from "react";
import "./dashboardStyle.css";
import {
  styled,
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  Collapse,
  Menu,
  Avatar,
  MenuItem,
  Tooltip,
} from "@mui/material/";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import {
  FcMenu,
  FcLeft,
  FcHome,
  FcImport,
  FcStatistics,
  FcAdvertising,
  FcPlanner,
  FcCalendar,
  FcConferenceCall,
  FcComboChart,
  FcBusinessman,
  FcRightUp,
  FcDataRecovery,
  FcExpand,
  FcAddressBook,
  FcCollapse,
  FcPlus,
  FcLeftDown,
  FcTodoList,
  FcInspection,
  FcDocument,
  FcFlowChart,
  FcContacts,
  FcCalculator,
  FcBriefcase,
} from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "../Components/Loading/Loading";
import { MdQrCodeScanner } from "react-icons/md";
import { useLogout } from "../hooks/auth/uselogout";
import { authService } from "../services";
import { canAccess } from "../acs/common";

export const drawerWidth = 240;

const DrawerData = ({ open, setMobileOpen }) => {
  const router = useRouter();
  const { logout } = useLogout();
  const [masterOpen, setMas] = useState(false);
  const [reportOpen, setRO] = useState(false);
  const [dashList1, setDashList] = useState([
    {
      title: "Dashboard",
      active: true,
      link: "/dashboard",
      icon: <FcComboChart />,
    },
    {
      title: "Prospect",
      active: false,
      link: "/dashboard/prospect",
      icon: <FcConferenceCall />,
    },
    {
      title: "Residents",
      active: false,
      link: "/dashboard/residents",
      icon: <FcHome />,
    },
    {
      title: "Attendance",
      active: false,
      link: "/dashboard/attendance",
      icon: <FcCalendar />,
    },
    {
      title: "Payment",
      active: false,
      link: "/dashboard/payment",
      icon: <FcRightUp />,
      hide: !canAccess("Payment", "view"),
    },
    {
      title: "Receipt",
      active: false,
      link: "/dashboard/receipt",
      icon: <FcLeftDown />,
    },
    {
      title: "Invoice",
      active: false,
      link: "/dashboard/invoice",
      icon: <FcDocument />,
    },
    {
      title: "All Tasks",
      active: false,
      link: "/dashboard/task",
      icon: <FcTodoList />,
    },
    {
      title: "All Notes",
      active: false,
      link: "/dashboard/notes",
      icon: <FcInspection />,
    },
    {
      title: "Employee",
      active: false,
      link: "/dashboard/employee",
      icon: <FcBusinessman />,
      
    },
    {
      title: "My Contacts",
      active: false,
      link: "/dashboard/mycontacts",
      icon: <FcAddressBook  />,
    },
    {
      title: "All Forms",
      active: false,
      link: "/dashboard/forms",
      icon: <FcBriefcase />,
    },
    // {
    //   title: "Roles & Policies",
    //   active: false,
    //   link: "/dashboard/policies",
    //   icon: <FaUniversalAccess />,
    // },
  ]);
  const [reports, setReports] = useState([
    {
      title: "Day Book",
      active: false,
      link: "/dashboard/reports/daybook",
      icon: <FcPlanner />,
    },
    {
      title: "Ledger Book",
      active: false,
      link: "/dashboard/reports/ledgerbook",
      icon: <FcContacts />,
    },
    {
      title: "Trial Balance",
      active: false,
      link: "/dashboard/reports/trialbalance",
      icon: <FcCalculator />,
    },
  ]);
  const [masterList, setMasterList] = useState([
    {
      title: "Create New Contact",
      active: false,
      link: "/dashboard/master/ledger",
      icon: <FcPlus />,
    },
    {
      title: "Create Contact Group",
      active: false,
      link: "/dashboard/master/group",
      icon: <FcPlus />,
    },
    {
      title: "Create Prospect Source",
      active: false,
      link: "/dashboard/master/prospectsource",
      icon: <FcAdvertising />,
    },
    {
      title: "Create Building Layout",
      active: false,
      link: "/dashboard/master/buildinglayout",
      icon: <FcFlowChart />,
    },
  ]);
  const handleLink = (v, n, Ar) => {
    if (Ar === "Ar1") {
      let newArr = dashList1.map((obj, j) => {
        if (n === j) {
          return { ...obj, active: true };
        } else {
          return { ...obj, active: false };
        }
      });
      setDashList(newArr);
      setReports(
        reports.map((r) => {
          return { ...r, active: false };
        })
      );
      setRO(false);
      setMasterList(
        masterList.map((m) => {
          return { ...m, active: false };
        })
      );
      setMas(false);
    } else if (Ar === "Ar2") {
      let newArr = reports.map((obj, j) => {
        if (n === j) {
          return { ...obj, active: true };
        } else {
          return { ...obj, active: false };
        }
      });
      setReports(newArr);
      setDashList(
        dashList1.map((r) => {
          return { ...r, active: false };
        })
      );
      setMasterList(
        masterList.map((m) => {
          return { ...m, active: false };
        })
      );
      setMas(false);
    } else if (Ar === "Ar3") {
      let newArr = masterList.map((obj, j) => {
        if (n === j) {
          return { ...obj, active: true };
        } else {
          return { ...obj, active: false };
        }
      });
      setMasterList(newArr);
      setDashList(
        dashList1.map((r) => {
          return { ...r, active: false };
        })
      );
      setReports(
        reports.map((r) => {
          return { ...r, active: false };
        })
      );
      setRO(false);
    }

    router.push(v.link);
    if (setMobileOpen) {
      setMobileOpen();
    }
  };
  return (
    <div>
      <List>
        {dashList1.map((v, n) => (
          <ListItem
            key={n}
            onClick={() => handleLink(v, n, "Ar1")}
            disablePadding
            className={v?.active ? "activeLink" : ""}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  fontSize: 24,
                  justifyContent: "center",
                }}
              >
                {v.icon}
              </ListItemIcon>
              <ListItemText primary={v.title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List disablePadding>
        <ListItemButton
          onClick={() => setRO(!reportOpen)}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              fontSize: 24,
              justifyContent: "center",
            }}
          >
            <FcStatistics />
          </ListItemIcon>
          <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
          {reportOpen ? <FcCollapse /> : <FcExpand />}
        </ListItemButton>
        <Collapse in={reportOpen} timeout="auto" unmountOnExit>
          <List component="div" dense disablePadding>
            {reports.map((t, i) => (
              <ListItem
                key={i}
                onClick={() => handleLink(t, i, "Ar2")}
                disablePadding
                className={t.active ? "activeLink" : ""}
              >
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemIcon sx={{ minWidth: "40px", fontSize: 20 }}>
                    {t.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={t.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />

      <List disablePadding>
        <ListItemButton
          onClick={() => setMas(!masterOpen)}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              fontSize: 24,
              justifyContent: "center",
            }}
          >
            <FcDataRecovery />
          </ListItemIcon>
          <ListItemText primary="Master" sx={{ opacity: open ? 1 : 0 }} />
          {masterOpen ? <FcCollapse /> : <FcExpand />}
        </ListItemButton>
        <Collapse in={masterOpen} timeout="auto" unmountOnExit>
          <List component="div" dense disablePadding>
            {masterList.map((t, i) => (
              <ListItem
                key={i}
                onClick={() => handleLink(t, i, "Ar3")}
                disablePadding
                className={t?.active ? "activeLink" : ""}
              >
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemIcon sx={{ minWidth: "40px", fontSize: 20 }}>
                    {t.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={t.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
     
      <List
        sx={{
          display: { xs: "none", md: "block" },
          // position: "absolute",
          // bottom: 0,
          width: "100%",
        }}
      >
        <ListItem
          onClick={() => {
            logout();
            router.push("/login");
          }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                fontSize: 24,
                justifyContent: "center",
              }}
            >
              <FcImport />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

function DashboardLayout({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const { logout } = useLogout();
  const openProfile = Boolean(anchorElProfile);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex",background:"#fff" }}>
      <CssBaseline />
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              display: { xs: "none", sm: "block" },
              ...(open && { display: "none" }),
            }}
          >
            <FcMenu />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Mobile Drawer"
            onClick={() => setMobileOpen(!mobileOpen)}
            edge="start"
            sx={{
              marginRight: 2,
              marginLeft: 1,
              display: { xs: "block", sm: "none" },
            }}
          >
            <FcMenu />
          </IconButton>
          <Image
            priority
            width={160}
            height={60}
            src="https://res.cloudinary.com/qualifier/image/upload/v1705684670/OasisLogo_kngpov.svg"
            alt="Oasis Manor"
          />
          <span style={{ flexGrow: 1 }} />
          <Tooltip title="Scan Attendance" arrow>
            <IconButton
              onClick={() => router.push("/dashboard/attendance/scan")}
            >
              <MdQrCodeScanner />
            </IconButton>
          </Tooltip>

          <Menu
            id="profile-menu"
            anchorEl={anchorElProfile}
            open={openProfile}
            onClose={() => setAnchorElProfile(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button-profile",
            }}
          >
            <MenuItem disabled>
              Hi {authService.getLoggedInUser()?.lastName ?? "User"} !
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
              cursor: "pointer",
            }}
            id="basic-button-profile"
            aria-controls={openProfile ? "profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            alt="User"
            src={authService.getLoggedInUser()?.userImage}
            onClick={(e) => setAnchorElProfile(e.currentTarget)}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawer}
            sx={{
              ...(!open && { display: "none" }),
            }}
          >
            <FcLeft />
          </IconButton>
        </DrawerHeader>
        <DrawerData open={open} />
        <Divider />
      </Drawer>
      <SwipeableDrawer
        open={mobileOpen}
        onOpen={() => setMobileOpen(true)}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          zIndex: 2200,
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerData
          open={mobileOpen}
          setMobileOpen={() => setMobileOpen(!mobileOpen)}
        />
      </SwipeableDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Box>
    </Box>
  );
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default DashboardLayout;
