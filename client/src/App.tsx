import { RecoilRoot } from "recoil";

import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About/About";
import { Layout } from "./components/Layout";

import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <EuiProvider colorMode="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<About />} />
              {routes.map(({ path, element }, index) => (
                <Route
                  element={element}
                  key={`route-${path}-${index}`}
                  path={path}
                />
              ))}
            </Routes>
          </Layout>
        </EuiProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
