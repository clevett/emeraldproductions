import { toPng } from "html-to-image";
import { useRecoilState, useRecoilValue } from "recoil";

import { ZoneSector } from "../data/createTheZone";

import { Card } from "../../../Card/Card";

import styles from "../styles.module.css";
import { getImg, getSector } from "../helpers";
import { selectSectorById, threatLevelAtom } from "../recoil";
import { Footer } from "./Footer";
import { useRef, useCallback } from "react";

export const SectorCard = ({ id }: { id: ZoneSector["id"] }) => {
  const [sector, setSector] = useRecoilState(selectSectorById(id));
  const threatLevel = useRecoilValue(threatLevelAtom);

  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    const filter = (node: { tagName: string }) => node.tagName !== "BUTTON";

    toPng(ref.current, { cacheBust: true, filter })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `myz_${sector?.sector.environment
          .replace(/ /g, "_")
          .toLowerCase()}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sector?.sector.environment]);

  if (!sector) {
    return <span>Sector not found</span>;
  }

  const { rot, mood, ruin } = sector;
  const { environment } = sector.sector;
  const { threat, artifact } = sector;

  return (
    <div ref={ref}>
      <Card>
        <div className={`${styles.cardLayout}`}>
          <div className={`${styles.header}`}>
            <img alt={environment} src={getImg(environment)} />
          </div>

          <div className={`grid ${styles.content} gap-2 content-start`}>
            <div className={`grid gap-2`}>
              <h4 className="text-2xl font-semibold">{environment}</h4>
              <div>
                <h5 className="text-lg font-semibold">Rot Level</h5>
                <p className="text-m">{rot}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold">Ruin</h5>
                <p className="text-m">{ruin}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold">
                  Threat {threat.count ? `(danger ${threat.count})` : null}
                </h5>
                <p className="text-m">{threat.name}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold">
                  Artifacts {artifact.count ? `(${artifact.count})` : null}
                </h5>
                <p className="text-m">{artifact.name}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold">Mood</h5>
                <p className={`text-m`}>{mood}</p>
              </div>
            </div>
            <Footer
              onRefresh={() => setSector(getSector(sector.id, threatLevel))}
              onDelete={() => setSector(undefined)}
              onDownload={onButtonClick}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
