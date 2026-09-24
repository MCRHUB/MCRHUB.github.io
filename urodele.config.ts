export const config = {
  github: {
    login: "MCRHUB", // github login name, not user name
    repo: "MCRHUB.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "",
    brand: "行到水穷处，坐看云起时",
    description: "记录、分享、思考",
     base: "/notebooks", // 加上这一行，解决样式丢失问题
  },
  footer: {
    copyright: "© 2026 MCRHUB 版权所有",
    copyrightUrl: "",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
