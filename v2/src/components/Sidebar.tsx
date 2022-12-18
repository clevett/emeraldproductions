import {
  EuiImage,
  EuiListGroup,
  EuiListGroupItem,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { ftdList, sotdlList, shadowrunList } from "../routes";

import logo from "../imgs/logoLarge.png";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const getListItem = (list: typeof ftdList[0] | typeof shadowrunList[0]) => {
    const { label, href, iconType } = list;
    return (
      <Link to={href} key={`sidebar-${href}`}>
        <EuiListGroupItem
          label={label}
          iconType={iconType}
          isActive={pathname === href}
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
        <h1 key={0}>RPG Tools</h1>
      </EuiTitle>
      <hr />
      <EuiSpacer />
      <EuiTitle size="xs">
        <h2 key={1}>Five Torches Deep</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {ftdList.map((l) => getListItem(l))}
      </EuiListGroup>
      <EuiTitle size="xs">
        <h2 key={2}>Shadow of the Demon Lord</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {sotdlList.map((l) => getListItem(l))}
      </EuiListGroup>
      <EuiTitle size="xs">
        <h2 key={2}>Shadowrun 5th Edition</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {shadowrunList.map((l) => getListItem(l))}
      </EuiListGroup>
    </>
  );
};
