import fs from "node:fs";
import path from "node:path";

const routes = [
  "start",
  "start/onboarding",
];

const html = fs.readFileSync("dist/index.html", "utf8");

for (const route of routes) {
  const directory = path.join("dist", route);

  fs.mkdirSync(directory, { recursive: true });

  fs.writeFileSync(
    path.join(directory, "index.html"),
    html
  );

  console.log(`Created /${route}/`);
}
