import { EuiImage, EuiListGroup, EuiSpacer, EuiTitle } from "@elastic/eui";
import { ftdList, sotdlList, shadowrunList } from "../routes";

import logo from "../imgs/logoLarge.png";

export const Sidebar = () => {
  return (
    <>
      <EuiImage alt="Emerald Productions, LLC" src={logo} />
      <EuiSpacer />
      <EuiTitle size="s">
        <h1 key={0}>RPG Tools</h1>
      </EuiTitle>
      <hr />
      <EuiSpacer />
      <EuiTitle size="xs">
        <h2 key={1}>Five Torches Deep</h2>
      </EuiTitle>
      <EuiListGroup listItems={ftdList} color="primary" size="s" />
      <EuiTitle size="xs">
        <h2 key={2}>Shadow of the Demon Lord</h2>
      </EuiTitle>
      <EuiListGroup listItems={sotdlList} color="primary" size="s" />
      <EuiTitle size="xs">
        <h2 key={2}>Shadowrun 5th Edition</h2>
      </EuiTitle>
      <EuiListGroup listItems={shadowrunList} color="primary" size="s" />
    </>
  );
};
