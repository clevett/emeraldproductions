import { EuiImage, EuiListGroup, EuiSpacer, EuiTitle } from "@elastic/eui";
import {
  ftdList,
  sotdlList,
  shadowrunList,
  myzList,
  tools,
} from "../../routes";
import { EuiListGroupItem } from "@elastic/eui";
import { Link, useLocation } from "react-router-dom";

import logo from "../../imgs/logoLarge.png";

export const Sidebar = () => {
  return (
    <>
      <EuiImage alt="Emerald Productions, LLC" src={logo} />
      <EuiSpacer />
      <EuiTitle size="s">
        <h1>RPG Tools</h1>
      </EuiTitle>
      <hr />

      <EuiSpacer />

      <List title="General" list={tools} />
      <List title="Five Torches Deep" list={ftdList} />
      <List title="Mutant Year Zero" list={myzList} />
      <List title="Shadow of the Demon Lord" list={sotdlList} />
      <List title="Shadowrun" list={shadowrunList} />
    </>
  );
};

export const List = ({
  title,
  list,
}: {
  title: string;
  list: typeof ftdList;
}) => {
  const getList = (list: typeof ftdList) =>
    list.map((e: typeof ftdList[0]) => <ListItem key={e.path} item={e} />);

  return (
    <>
      <EuiTitle size="xs">
        <h2>{title}</h2>
      </EuiTitle>
      <EuiListGroup color="primary" size="s">
        {getList(list)}
      </EuiListGroup>
    </>
  );
};

export const ListItem = ({ item }: { item: typeof ftdList[0] }) => {
  const { pathname } = useLocation();
  const { label, path, iconType } = item;

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
