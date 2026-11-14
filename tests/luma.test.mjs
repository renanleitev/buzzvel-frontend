import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("All static assets referenced in lumaData exist and are non-empty", () => {
  const dataFile = fs.readFileSync(
    path.join(process.cwd(), "src/data/lumaData.ts"),
    "utf8"
  );
  const assetMatches = [...dataFile.matchAll(/["'](\/assets\/[^"']+)["']/g)];
  assert.ok(assetMatches.length > 0, "Expected asset paths in lumaData.ts");

  for (const match of assetMatches) {
    const relativeAssetPath = match[1];
    const fullPath = path.join(process.cwd(), "public", relativeAssetPath);
    assert.ok(
      fs.existsSync(fullPath),
      `Asset file missing on disk: ${relativeAssetPath}`
    );
    const stats = fs.statSync(fullPath);
    assert.ok(
      stats.size > 0,
      `Asset file is empty (0 bytes): ${relativeAssetPath}`
    );
  }
});

test("All component SVG/PNG assets exist on disk and are non-empty", () => {
  const componentsDir = path.join(process.cwd(), "src/components");
  const files = fs
    .readdirSync(componentsDir)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(componentsDir, file), "utf8");
    const matches = [...content.matchAll(/["'](\/assets\/[^"']+)["']/g)];
    for (const match of matches) {
      const assetPath = path.join(process.cwd(), "public", match[1]);
      assert.ok(
        fs.existsSync(assetPath),
        `Missing asset ${match[1]} referenced in ${file}`
      );
      assert.ok(
        fs.statSync(assetPath).size > 0,
        `Empty asset ${match[1]} referenced in ${file}`
      );
    }
  }
});
