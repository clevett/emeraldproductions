import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";
import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About/About";
import { Layout } from "./components/Layout";
import { VocabularyGame } from "./components/Vocab/VocabularyGame";

import { routes, tools } from "./routes";

ReactGA.initialize(`${process.env.GA}`);
ReactGA.pageview(window.location.pathname + window.location.search);

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
              <Route path={tools[0].path} element={tools[0].element} />
              <Route path="/vocabulary-game" element={<VocabularyGame />} />
            </Routes>
          </Layout>
        </EuiProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
