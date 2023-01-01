import {
  EuiImage,
  EuiListGroup,
  EuiListGroupItem,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { ftdList, sotdlList, shadowrunList, myzList } from "../../routes";

import logo from "../../imgs/logoLarge.png";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const getListItem = (list: typeof ftdList[0]) => {
    const { label, path, iconType } = list;
    return (
      <Link to={path} key={`sidebar-${path}`}>
        <EuiListGroupItem
          iconType={iconType}
          isActive={pathname === path}
          label={label}
        >
          {label}
        </EuiListGroupItem>
      </Link>
    );
  };

  return (
    <>
      <EuiImage alt="Emerald Productions, LLC" src={logo} />
      <EuiSpacer />
      <EuiTitle size="s">
        <h1>RPG Tools</h1>
      </EuiTitle>
      <hr />

      <EuiSpacer />
      <EuiTitle size="xs">
        <h2>Five Torches Deep</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {ftdList.map((l) => getListItem(l))}
      </EuiListGroup>

      <EuiTitle size="xs">
        <h2>Mutant Year Zero</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {myzList.map((l) => getListItem(l))}
      </EuiListGroup>

      <EuiTitle size="xs">
        <h2>Shadow of the Demon Lord</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {sotdlList.map((l) => getListItem(l))}
      </EuiListGroup>

      <EuiTitle size="xs">
        <h2>Shadowrun</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {shadowrunList.map((l) => getListItem(l))}
      </EuiListGroup>
    </>
  );
};
