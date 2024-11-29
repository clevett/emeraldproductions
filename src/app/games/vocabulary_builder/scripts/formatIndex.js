import fs from "fs";
import path from "path";

const dir = "../wordlists";
const files = fs.readdirSync(dir).filter((file) => file.endsWith(".json"));

let index = {};

files.forEach((file) => {
  const content = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
  const [lang, category] = file.split("_");

  const data = {
    name: category.split(".")[0],
    list: content,
  };

  if (index[lang]) {
    index[lang].push(data);
  } else {
    index[lang] = [data];
  }
});

fs.writeFileSync(
  path.join(dir, "index.ts"),
  `export const list = ${JSON.stringify(index, null, 2)};`
);
