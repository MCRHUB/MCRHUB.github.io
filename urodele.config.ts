export const config = {
  github: {
    login: "MCRHUB", // github login name, not user name
    repo: "MCRHUB.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "MCRHUB",
    brand: "MCRHUB",
    description: "记录、分享、思考",
     base: "/notebooks", // 加上这一行，解决样式丢失问题
  },
  footer: {
    copyright: "© MCRHUB",
    copyrightUrl: "",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
