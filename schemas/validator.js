const fs = require("fs");
const path = require("path");
const tv4 = require("tv4");
const glob = require("glob");

function validateSchema(schemaName, filePattern) {
  console.log(`Validating ${schemaName}...`);
  const schemaPath = path.join(__dirname, `${schemaName}-schema.json`);

  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  const files = glob.sync(path.join(__dirname, "..", filePattern));

  if (files.length === 0) {
    console.warn(`⚠️ No files found matching pattern: ${filePattern}`);
    return true;
  }

  let isValid = true;

  files.forEach((file) => {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const result = tv4.validateMultiple(data, schema);

    if (result.valid) {
      console.log(`✅ Valid: ${file}`);
    } else {
      console.error(`❌ Invalid: ${file}`);
      result.errors.forEach((error) =>
        console.error(`  - ${error.message} at ${error.dataPath}`)
      );
      isValid = false;
    }
  });

  return isValid;
}

const modelsValid = validateSchema("models", "models/*/*/model.json");
const providersValid = validateSchema("providers", "providers/*/provider.json");

if (modelsValid && providersValid) {
  console.log("All schemas are valid! 🎉");
  process.exit(0);
} else {
  console.error("Schema validation failed.");
  process.exit(1);
}
