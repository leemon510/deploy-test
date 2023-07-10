module.exports = {
  debug:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "local",
  i18n: {
    locales: ["ko-KR", "ja-JP"],
    defaultLocale: "ko-KR",
  },

  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  //   reloadOnPrerender: process.env.NODE_ENV === 'development',
};
