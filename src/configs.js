export const configs = {
  logoText: "Wasa Team",
  loadingText: "loading...",
  openUrlFailed: (url) => `Don't know how to open URI: ${url}`,
  userFileEntryText: "go to his github",
  baseURL: "https://api.github.com/",
  list: {
    itemsPerPage: 30,
  },
  navigator: {
    homePage: "homePage",
    UserList: "UserList",
    backgroundColor: "#000000",
    icon: {
      home: {
        name: "home",
      },
      list: {
        name: "list",
      },
      toggleTabButton: {
        name: "caret-up",
        type: "ionicon",
        color: "#517fa4",
      },
    },
  },
};
