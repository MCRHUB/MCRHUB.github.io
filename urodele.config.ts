export const config = {
  github: {
    login: "MCRHUB", // github login name, not user name
    repo: "notebooks", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "MCRHUB",
    brand: "MCRHUB",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© MCRHUB",
    copyrightUrl: "#",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
