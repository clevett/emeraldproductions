import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSelect,
  EuiText,
  EuiTitle,
} from "@elastic/eui";

import displayModifier from "../helpers/displayModifier/displayModifier";
import { MonsterFTD } from "../types/ftdTypes";
import { ftdCatagories as catagories } from "../../../data/ftdCategories";

import { coinList } from "../../ShadowOfTheDemonLord/helpers/coinList";
import { useState } from "react";

import styles from "../styles.module.css";
import { CardPanel } from "../../CardPanel";
import { getDiceRollTotal } from "../../../helpers/getDiceRoll";

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

  const [category, setCategory] = useState(catagories[0]);
  const [hitPoints, setHitPoints] = useState(hp.total);
  const [damageTotal, setDamageTotal] = useState(roll(damage));
  const [treasure, setTreasure] = useState(coinList(goldRoll(hd)));

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
      <EuiText>
        <strong>{title}: </strong> {value}
      </EuiText>
    );
  };

  const showResist = immunities || resistances || vulnerabilities;

  return (
    <CardPanel>
      <EuiFlexGroup direction="column" gutterSize="s">
        <EuiFlexItem className="items-start">
          <EuiFlexGroup className="items-start w-full" gutterSize="s">
            <EuiFlexItem>
              <EuiTitle size="m" className="mr-4 grow">
                <h3>{name}</h3>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem className={`self-end ${styles.maxW100}`}>
              <EuiSelect
                className="self-end grow-0"
                options={catagories.map(({ name }) => ({
                  text: name,
                  value: name,
                }))}
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={category.name}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="m">
            <h4>{hd} HD</h4>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="m">
            <h4>
              {size}, {type}
            </h4>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <hr className="mt-4 mb-4" />
      {/* dmg & ac & base */}
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false} wrap>
        <EuiFlexItem>
          <EuiText>
            {subheader("To Hit", displayModifier(modifiers.normal))}
          </EuiText>
          <EuiText>
            <strong>Damage: </strong>
            <EuiButtonEmpty
              onClick={() => setDamageTotal(roll(damage))}
              size="m"
            >
              {damageTotal} ({damage})
            </EuiButtonEmpty>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>{subheader("AC", ac)}</EuiText>
          <EuiText>
            <strong>HP: </strong>
            <EuiButtonEmpty
              onClick={() => setHitPoints(roll(hp.dice))}
              size="m"
            >
              {hitPoints} ({hp.dice})
            </EuiButtonEmpty>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>
            {subheader("Base mod", displayModifier(modifiers.normal))}
          </EuiText>
          <EuiFlexItem>
            <EuiText>{subheader("Speed", speed)}</EuiText>
          </EuiFlexItem>
        </EuiFlexItem>
      </EuiFlexGroup>

      <hr className="mt-4 mb-4" />

      {/* immunities & resistances & vulnerabilities*/}
      {showResist && (
        <>
          <EuiFlexGroup direction="column" gutterSize="s">
            {immunities ? (
              <EuiFlexItem>{subheader("Immunities", immunities)}</EuiFlexItem>
            ) : null}
            {resistances ? (
              <EuiFlexItem>{subheader("Resistances", resistances)}</EuiFlexItem>
            ) : null}
            {vulnerabilities ? (
              <EuiFlexItem>
                {subheader("Vulnerabilities", vulnerabilities)}
              </EuiFlexItem>
            ) : null}
          </EuiFlexGroup>
          <EuiSpacer />
        </>
      )}

      {/* strong & weak */}
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText size="m" className="text-uppercase">
            <h4>Strong</h4>
          </EuiText>
          {subheader(category.strong.attributes.join("/"), modifiers.strong)}
          {subheader("Modifier", displayModifier(modifiers.strong))}
          {category.strong.skills.join(", ")}
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiText size="m" className="text-uppercase">
            <h4>Weak</h4>
          </EuiText>
          {subheader(category.weak.attributes.join("/"), modifiers.weak)}
          {subheader("Modifier", displayModifier(modifiers.weak))}
          {category.weak.skills.join(", ")}
        </EuiFlexItem>
      </EuiFlexGroup>

      <hr className="mt-4 mb-4" />

      {/* abilities */}
      {abilities && abilities?.length > 0 ? (
        <>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiText size="m" className="text-uppercase">
                <h4>Special Abilities</h4>
              </EuiText>
            </EuiFlexItem>

            {abilities.map(({ name, desc }, index: number) => {
              const description = desc.includes("saving throw")
                ? desc.replace(/saving throw/g, "check")
                : desc;

              return (
                <EuiFlexItem key={`ftd-${name}-${index}`}>
                  <EuiText>
                    <strong>
                      <em>{name}. </em>
                    </strong>
                    {description}
                  </EuiText>
                </EuiFlexItem>
              );
            })}
          </EuiFlexGroup>
          <hr className="mt-4 mb-4" />
        </>
      ) : null}

      {/* actions */}
      {actions && actions?.length > 0 ? (
        <>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiText size="m" className="text-uppercase">
                <h4>Actions</h4>
              </EuiText>
            </EuiFlexItem>

            {actions.map(({ name, desc }, index: number) => {
              return (
                <EuiFlexItem key={`ftd-${name}-${index}`}>
                  <EuiText>
                    <strong>
                      <em>{name}. </em>
                    </strong>
                    {desc}
                  </EuiText>
                </EuiFlexItem>
              );
            })}
          </EuiFlexGroup>
          <hr className="mt-4 mb-4" />
        </>
      ) : null}

      {/* gold */}
      <EuiFlexItem>
        <EuiText>
          <strong>Gold: </strong>
          <EuiButtonEmpty
            onClick={() => setTreasure(coinList(goldRoll(hd)))}
            size="m"
          >
            {treasure}
          </EuiButtonEmpty>
        </EuiText>
      </EuiFlexItem>
    </CardPanel>
  );
};
