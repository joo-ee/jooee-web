import getContactHref from "#utils/Contact";

export const SiteConfig = {
  url: "",
  pathPrefix: "/",
  title: "jooee",
  subtitle: "jooee",
  disqusShortname: "",
  postsPerPage: 5,
  googleAnalyticsId: "G-ND58S24JBX",
  useKatex: false,
  menu: [
    {
      label: "about",
      path: "/about",
    },
  ],
  author: {
    name: "jooee",
    photo: "/profile.png",
    bio: "frontend engineer",
    contacts: {
      email: "vkdlfl0224@gmail.com",
      facebook: "",
      telegram: "",
      github: getContactHref("github", "joo-ee"),
      rss: "",
      linkedin: "",
      instagram: "",
      line: "",
      gitlab: "",
      codepen: "",
      youtube: "",
      soundcloud: "",
    },
  },
};
