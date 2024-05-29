import fs from "fs";
import path from "path";

export const getFeatures = () => {
  const featuresDir = path.join(process.cwd(), "features");
  const featureNames = fs
    .readdirSync(featuresDir)
    .filter((file) => fs.statSync(path.join(featuresDir, file)).isDirectory());
  return featureNames;
};
