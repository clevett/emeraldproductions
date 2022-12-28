import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiPageBody,
  EuiPageTemplate,
  EuiSpacer,
} from "@elastic/eui";
import { Link } from "react-router-dom";

import logo from "../imgs/egIcon.png";
import { ContactOptions } from "./ContactOptions";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <EuiPageTemplate panelled={true} bottomBorder={true} grow={true}>
      <EuiPageTemplate.Sidebar>
        <Sidebar />
      </EuiPageTemplate.Sidebar>
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType={logo}>
                Emerald Productions
              </EuiHeaderLogo>,
              <EuiHeaderLinks aria-label="links">
                <EuiHeaderLink isActive>
                  <Link to="/">About</Link>
                </EuiHeaderLink>
              </EuiHeaderLinks>,
            ],
            borders: "right",
          },
          {
            items: ContactOptions,
            borders: "none",
          },
        ]}
      />
      <EuiSpacer />
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPageTemplate>
  );
};
