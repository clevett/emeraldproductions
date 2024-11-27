import Image from "next/image";

import { useRecoilState } from "recoil";

import { Option, Options } from "@/data";
import { capitalize } from "@/utils";
import { IconButton, Card, Heading, ReloadIcon } from "@/components";
import { cross, gift, office, infinity, hipster, yen } from "@/images";

import { selectMission } from "../recoil";
import { getOption } from "../helpers";

type MissionCardProps = {
  item: Option;
};

export const MissionCard = ({ item }: MissionCardProps) => {
  const [selected, setSelected] = useRecoilState(selectMission(item));

  const getIcon = (option: Option) => {
    switch (option) {
      case Options.EMPLOYER:
        return hipster;
      case Options.LOCATION:
        return office;
      case Options.JOB:
        return yen;
      case Options.MACGUFFIN:
        return gift;
      case Options.TWIST:
        return infinity;
      default:
        return cross;
    }
  };

  const handleClick = () => {
    const result = getOption(item);
    if (result) {
      setSelected(result);
    }
  };

  const note = selected?.note;

  return (
    <Card type="business">
      <div className="grid gap-4 py-4 px-6 content-center justify-items-center w-full h-full text-center">
        <Image
          alt=""
          src={getIcon(item)}
          height={40}
          width={40}
          style={{
            filter:
              "invert(100%) sepia(100%) saturate(2%) hue-rotate(79deg) brightness(106%) contrast(101%)",
          }}
        />
        <Heading as="h3">{capitalize(item)}</Heading>
        <p>{selected?.description}</p>
        <span>{note}</span>
        <IconButton onClick={handleClick} label={`roll for a new ${item}`}>
          <ReloadIcon />
        </IconButton>
      </div>
    </Card>
  );
};
