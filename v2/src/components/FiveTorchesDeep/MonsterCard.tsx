import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useState } from "react";

import Select from "../Select";
import displayModifier from "./helpers/displayModifier/displayModifier";
import { MonsterFTD } from "./types/ftdTypes";
import { ftdCatagories as catagories } from "../../data/ftdCategories";

import { coinList } from "./helpers/coinList";

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
  const roll = (notation: string): number => new DiceRoll(notation).total;

  const goldRoll = (hd: number) => {
    return hd < 1 ? hd * roll(`1d20`) : roll(`${hd}d20`);
  };

  const [category, setCategory] = useState(catagories[0]);
  const [hitPoints, setHitPoints] = useState(hp.total);
  const [damageTotal, setDamageTotal] = useState(roll(damage));
  const [treasure, setTreasure] = useState(coinList(goldRoll(hd)));

  const monsterCategories = catagories.map(
    ({ name }: { name: string }) => name
  );
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
    <EuiPanel hasBorder paddingSize="m">
      <EuiFlexGroup direction="column" gutterSize="s">
        <EuiFlexItem className="items-center">
          <EuiFlexGroup gutterSize="s">
            <EuiTitle size="m" className="mr-4">
              <h3>
                {name}, {hd} HD
              </h3>
            </EuiTitle>
            <Select
              label="Select monster category"
              onSelectValueChange={handleCategoryChange}
              options={monsterCategories}
              selected={monsterCategories[0]}
            />
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiSpacer />
        <EuiFlexItem>
          <EuiText size="m">
            <h4>
              {size}, {type}
            </h4>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

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
              {damageTotal}
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

      <EuiSpacer />
      <hr />

      {/* immunities & resistances & vulnerabilities*/}
      {showResist && (
        <>
          <EuiSpacer />
          <EuiFlexGroup direction="column" gutterSize="s">
            {immunities ? (
              <EuiFlexItem>
                <EuiText>
                  <strong>Immunities</strong>: {immunities}
                </EuiText>
              </EuiFlexItem>
            ) : null}
            {resistances ? (
              <EuiFlexItem>
                <EuiText>
                  <strong>Resistances</strong>: {resistances}
                </EuiText>
              </EuiFlexItem>
            ) : null}
            {vulnerabilities ? (
              <EuiFlexItem>
                <EuiText>
                  <strong>Vulnerabilities</strong>: {vulnerabilities}
                </EuiText>
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

      <EuiSpacer />
      <hr />
      <EuiSpacer />

      {/* abilities */}
      {abilities && abilities?.length > 0 ? (
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
      ) : null}

      {/* actions */}
      {actions && actions?.length > 0 ? (
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiText size="m" className="text-uppercase">
              <h4>Actions</h4>
            </EuiText>
          </EuiFlexItem>

          {actions.map(({ name, desc }, index: number) => {
            console.log(actions);
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
      ) : null}

      <EuiSpacer />
      <hr />
      <EuiSpacer />

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
    </EuiPanel>
  );
};
