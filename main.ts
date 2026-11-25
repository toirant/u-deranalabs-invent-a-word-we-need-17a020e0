// showergument — an entry for make.fun "Invent a Word We Need".
//
// The whole entry is one invented word plus a one-line definition,
// written to /output/entry.txt. The gate requires UTF-8 text of
// 1 to 140 characters, a single line, and not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "showergument (n.): the perfect comeback you finally think of, hours too late, in the shower.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry is ${text.length} characters, must be 1-140`);
  }
  if (!text.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // The entry must be a coined word plus its definition.
  if (!text.includes("(n.):")) {
    throw new Error("entry must be a coined word followed by its definition");
  }
  // The coined word itself must be one lowercase alphabetic token at
  // the start of the line, before the part-of-speech marker.
  const head = text.split(" (n.):")[0];
  if (!/^[a-z]+$/.test(head)) {
    throw new Error(`coined word must be a single lowercase word, got: ${head}`);
  }
  // The definition must carry real content after the marker.
  const definition = text.split("(n.):")[1]?.trim() ?? "";
  if (definition.length < 10) {
    throw new Error("definition is too short to be self-contained");
  }
}

mkdirSync("/output", { recursive: true });
validate(ENTRY);
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and re-validate it, so a write failure or
// encoding surprise is caught here instead of at the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip check failed: /output/entry.txt differs from the entry");
}
validate(written);
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
console.log(ENTRY);
