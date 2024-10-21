"use client";
import { toPng } from "html-to-image";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRef, useCallback } from "react";
import Image from "next/image";

import { Card, Heading } from "@/app/components";

import { Footer } from "./Footer";
import { getImg, getSector } from "../helpers";
import { selectSectorById, threatLevelAtom } from "../recoil";
import { ZoneSector } from "../data";
import styles from "./SectorCard.module.css";

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
    <div className="w-fit" ref={ref}>
      <Card type="long">
        <div className={`${styles.cardLayout} gap-2`}>
          <div className={styles.header}>
            <h4 className="text-2xl font-semibold">{environment}</h4>
            <Image alt={environment} src={getImg(environment)} />
          </div>

          <div className={`grid ${styles.content} gap-1 content-start`}>
            <div className="grid gap-1">
              <div>
                <Heading as="h5">Rot Level</Heading>
                <p className="text-m">{rot}</p>
              </div>
              <div>
                <Heading as="h5">Ruin</Heading>
                <p className="text-m">{ruin}</p>
              </div>
              <div>
                <Heading as="h5">
                  Threat {threat.count ? `(danger ${threat.count})` : null}
                </Heading>
                <p className="text-m">{threat.name}</p>
              </div>
              <div>
                <Heading as="h5">
                  Artifacts {artifact.count ? `(${artifact.count})` : null}
                </Heading>
                <p className="text-m">{artifact.name}</p>
              </div>
              <div>
                <Heading as="h5">Mood</Heading>
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
