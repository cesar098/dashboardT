import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import SideBar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contact from "./scenes/contact/contact";
import Invoice from "./scenes/invoice";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Liner from "./scenes/liner";
import Geography from "./scenes/geo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/invoices" element={<Invoice />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Liner />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
