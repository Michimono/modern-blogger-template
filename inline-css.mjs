import fs from "fs";

const srcXml = "./src/index.xml";
const distXml = "./dist/index.xml";
const cssPath = "./dist/output.css";

const xml = fs.readFileSync(srcXml, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

xml = xml.replace(
    /<mono:include\s+file="(.+?)"\s*\/>/g,
    (_, filePath) => {
        const fullPath = `./src/${filePath}`;
        return fs.readFileSync(fullPath, "utf8");
    }
);

const skinBlock = `
<b:skin><![CDATA[
${css}
]]></b:skin>
`;

const output = xml.replace(
    /<link[^>]*rel=["']stylesheet["'][^>]*\/?>/i,
    skinBlock
);

fs.writeFileSync(distXml, output);
fs.unlinkSync(cssPath);
