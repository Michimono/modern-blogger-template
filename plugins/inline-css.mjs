import fs from "fs";

export default function inlineCss(dist, cssPath) {
    let xml = fs.readFileSync(dist, "utf8");
    const css = fs.readFileSync(cssPath, "utf8");

    xml = xml.replace(
        /<link[^>]*rel=["']stylesheet["'][^>]*\/?>/i,
        `<b:skin><![CDATA[\n${css}\n]]></b:skin>`
    );

    fs.writeFileSync(dist, xml);
    fs.unlinkSync(cssPath);
}
