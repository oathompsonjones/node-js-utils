export default {
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: { "(.+)\\.js": "$1" },
    transform: { "\\.[jt]sx?$": ["ts-jest", { useESM: true }] }
};
