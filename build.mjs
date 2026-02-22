import buildXml from "./plugins/build-xml.mjs";
import buildCss from "./plugins/build-css.mjs";
import inlineCss from "./plugins/inline-css.mjs";

const steps = [
    () => buildXml("src/index.xml", "dist/index.xml"),
    () => buildCss("src/input.css", "dist/output.css"),
    () => inlineCss("dist/index.xml", "dist/output.css"),
];

for (const run of steps) run();

