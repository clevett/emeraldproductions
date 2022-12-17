import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiPageBody,
  EuiPageTemplate,
  EuiSpacer,
} from "@elastic/eui";

import logo from "../imgs/egIcon.png";
import { ContactOptions } from "./ContactOptions";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <EuiPageTemplate
      direction="row"
      pageSideBar={<Sidebar />}
      fullHeight={true}
      restrictWidth={false}
    >
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType={logo}>
                Emerald Productions
              </EuiHeaderLogo>,
              <EuiHeaderLinks aria-label="links">
                <EuiHeaderLink isActive>About</EuiHeaderLink>
                <EuiHeaderLink>Tools</EuiHeaderLink>
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
