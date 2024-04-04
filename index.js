const fs = require("fs");

const FILE_PATH = "./firebase-adminsdk.json";

const serviceAccountBuffer = fs.readFileSync(FILE_PATH);
const serviceAccount = serviceAccountBuffer.toString();

const formattedServiceAccountString = serviceAccountString
	.replace(/\n/g, "\\n")
	.replace(/\r/g, "");

console.log("Converted: ", formattedServiceAccountString);
