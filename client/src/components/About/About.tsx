import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiPageHeader,
  EuiPanel,
} from "@elastic/eui";

import { Cards } from "./Cards";

import portrait from "../../imgs/takedown.png";

import "./About.css";

export const About = () => {
  return (
    <EuiPanel>
      <EuiFlexItem grow={false}>
        <EuiFlexGroup className="AboutCenter" justifyContent="spaceEvenly">
          <EuiFlexItem grow={false}>
            <EuiImage
              className="portrait"
              allowFullScreen
              alt="A woman with short hair wearing a jacket over a super hero costume looks to the sky"
              hasShadow
              size="l"
              src={portrait}
              style={{ borderRadius: "2rem", border: "2px solid #131317" }}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false} className="description">
            <EuiPageHeader
              description="Front-end developer specializing in software for table role playing games. I have an interest in accessibility, user experience, and project management. As a member of a team of engineers, I use my well-developed information organization and communications skills to compliment team members with a passion for technological solutions."
              paddingSize="l"
              pageTitle="Cassie Levett"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiSpacer size="xxl" />
      <EuiFlexItem grow={false} style={{ minWidth: "50%" }}>
        <Cards />
      </EuiFlexItem>
    </EuiPanel>
  );
};
