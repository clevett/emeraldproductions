import { ZoneSector } from "../data/createTheZone";

import { Card } from "../../Card/Card";
import { EuiButtonIcon, EuiIcon } from "@elastic/eui";

import styles from "../styles.module.css";

const Footer = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={`${styles.footer}`}>
      <EuiButtonIcon
        className="justify-self-end"
        onClick={onClick}
        iconType="refresh"
        aria-label={`flip the card`}
      />
    </div>
  );
};

export const SectorCard = ({ sector }: { sector: ZoneSector }) => {
  const { rot, mood, ruin } = sector;
  const { environment } = sector.sector;
  const { threat, artifact } = sector;

  return (
    <Card>
      <div className={`grid ${styles.back} gap-2 content-start`}>
        <div className="grid justify-center items-center">
          <EuiIcon size="xxl" type={"cross"} />
        </div>

        <div className={`grid gap-2`}>
          <h4 className="text-2xl font-semibold">{environment}</h4>
          <div>
            <h5 className="text-xl font-semibold">Rot Level</h5>
            <p className="text-lg">{rot}</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Ruin</h5>
            <p className="text-lg">{ruin}</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">
              Threat {threat.count ? `(danger ${threat.count})` : null}
            </h5>
            <p className="text-lg">{threat.name}</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">
              Artifacts {artifact.count ? `(${artifact.count})` : null}
            </h5>
            <p className="text-lg">{artifact.name}</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Mood</h5>
            <p className={`text-lg`}>{mood}</p>
          </div>
        </div>
        <Footer onClick={() => console.log("CLICK FOOTER")} />
      </div>
    </Card>
  );
};
