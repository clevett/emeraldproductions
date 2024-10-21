"use client";
import { useState } from "react";
import { ftdCatagories as catagories } from "@/app/data/ftdCategories";
import { capitalize, getCoinList, getDiceRollTotal } from "@/app/tools/utils";
import { Button, Card, Heading, ReloadIcon } from "@/app/components";

import displayModifier from "../helpers/displayModifier/displayModifier";
import { MonsterFTD } from "../../types/ftdTypes";

export const MonsterCard = ({
  monster: {
    abilities,
    ac,
    actions,
    damage,
    hd,
    hp,
    immunities,
    name,
    modifiers,
    resistances,
    size,
    speed,
    type,
    vulnerabilities,
  },
}: {
  monster: MonsterFTD;
}) => {
  const roll = getDiceRollTotal();

  const goldRoll = (hd: number) =>
    hd < 1 ? hd * roll(`1d20`) : roll(`${hd}d20`);

  const coinList = getCoinList(goldRoll(hd));

  const [category, setCategory] = useState(catagories[0]);
  const [hitPoints, setHitPoints] = useState(hp.total);
  const [damageTotal, setDamageTotal] = useState(roll(damage));
  const [treasure, setTreasure] = useState(coinList);

  const handleCategoryChange = (value: string) => {
    const findCategory = catagories.find(
      ({ name }: { name: string }) => value === name
    );
    if (findCategory) {
      setCategory(findCategory);
    }
  };

  const subheader = (title: string, value: string | number | null) => {
    return (
      <p>
        <strong>{title}: </strong> {value}
      </p>
    );
  };

  const showResist = immunities || resistances || vulnerabilities;

  const getRerollButton = ({
    onClick,
    name,
  }: {
    name: string;
    onClick: () => void;
  }) => {
    return (
      <Button
        onClick={onClick}
        name={`${name}`}
        icon={<ReloadIcon height="10px" width="10px" />}
      />
    );
  };

  return (
    <div className="w-fit">
      <Card type="auto">
        <div className="px-4 py-2">
          <div className="grid gap-2">
            <div className="grid grid-flow-col items-start w-full">
              <Heading as="h3">{name}</Heading>
              <select
                className="justify-self-end w-fit"
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={category.name}
              >
                {catagories.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <Heading as="h4" size="3" weight="regular">
              {hd} HD, {size}, {capitalize(type)}
            </Heading>
          </div>
          <hr className="mt-4 mb-4" />
          {/* dmg & ac & base */}
          <div className="grid gap-4">
            <div className="grid gap-4 grid-flow-col items-center">
              {subheader("To Hit", displayModifier(modifiers.normal))}
              {subheader("AC", ac)}
              {subheader("Base mod", displayModifier(modifiers.normal))}
            </div>
            <div className="grid gap-4 grid-flow-col items-center">
              <div>
                <strong>Damage: </strong>
                {getRerollButton({
                  onClick: () => setDamageTotal(roll(damage)),
                  name: `${damageTotal} (${damage})`,
                })}
              </div>
              <div>
                <strong>HP: </strong>
                {getRerollButton({
                  onClick: () => setHitPoints(roll(hp.dice)),
                  name: `${hitPoints} (${hp.dice})`,
                })}
              </div>
            </div>
            <div>{subheader("Speed", speed)}</div>
          </div>

          <hr className="mt-4 mb-4" />

          {/* immunities & resistances & vulnerabilities*/}
          {showResist && (
            <>
              <div className="grid gap-4">
                {immunities ? (
                  <div>{subheader("Immunities", immunities)}</div>
                ) : null}
                {resistances ? (
                  <div>{subheader("Resistances", resistances)}</div>
                ) : null}
                {vulnerabilities ? (
                  <div>{subheader("Vulnerabilities", vulnerabilities)}</div>
                ) : null}
              </div>
            </>
          )}

          {/* strong & weak */}
          <div className="grid gap-4 grid-flow-col">
            <div className="grid gap-2">
              <Heading as="h4" size="3" className="underline uppercase">
                Strong
              </Heading>
              {subheader(
                category.strong.attributes.join("/"),
                modifiers.strong
              )}
              {subheader("Modifier", displayModifier(modifiers.strong))}
              {category.strong.skills.join(", ")}
            </div>
            <div className="grid gap-2">
              <Heading as="h4" size="3" className="underline uppercase">
                Weak
              </Heading>
              {subheader(category.weak.attributes.join("/"), modifiers.weak)}
              {subheader("Modifier", displayModifier(modifiers.weak))}
              {category.weak.skills.join(", ")}
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          {/* abilities */}
          {abilities && abilities?.length > 0 ? (
            <>
              <div className="grid gap-4">
                <Heading as="h4" size="3" className="underline uppercase">
                  Special Abilities
                </Heading>

                {abilities.map(({ name, desc }, index: number) => {
                  const description = desc.includes("saving throw")
                    ? desc.replace(/saving throw/g, "check")
                    : desc;

                  return (
                    <div key={`ftd-${name}-${index}`}>
                      <p>
                        <strong>
                          <em>{name}. </em>
                        </strong>
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-4 mb-4" />
            </>
          ) : null}

          {/* actions */}
          {actions && actions?.length > 0 ? (
            <>
              <div className="grid gap-4">
                <Heading as="h4" size="3" className="underline uppercase">
                  Actions
                </Heading>

                {actions.map(({ name, desc }, index: number) => {
                  return (
                    <div key={`ftd-${name}-${index}`}>
                      <p>
                        <strong>
                          <em>{name}. </em>
                        </strong>
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-4 mb-4" />
            </>
          ) : null}

          {/* gold */}
          <div>
            <strong>Gold: </strong>
            {getRerollButton({
              onClick: () => setTreasure(getCoinList(goldRoll(hd))),
              name: `${treasure}`,
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
