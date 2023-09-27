export default {
    extensionsToTreatAsEsm: [".ts"],
    globals: { "ts-jest": { useESM: true } },
    moduleNameMapper: { "(.+)\\.js": "$1" },
    transform: { "\\.[jt]sx?$": "ts-jest" }
};
