const menus = [
  {
    id: 0,
    name: { ja: "サラダ", en: "salad", zh: "沙拉" },
    price: 300,
    description: {
      ja:
        "生野菜やゆでた野菜をソースであえたもの。肉や魚介類を使うこともある。冷たくしたものが多いが，温かいサラダもある。",
      en:
        "Raw vegetables and boiled vegetables served with sauce. Sometimes I use meat and seafood. Many are chilled, but there is also a hot salad.",
      zh: "生蔬菜和煮蔬菜配酱。有时我用肉和海鲜。许多冷藏，但也有热沙拉。",
    },
    imgSrc: "./static/images/sample1.jpg",
  },
  {
    id: 1,
    name: { ja: "パスタ", en: "pasta", zh: "意大利面" },
    price: 500,
    description: {
      ja:
        "イタリア料理に使う、小麦粉をこねて作った食品の総称。スパゲッティ・マカロニなど。",
      en:
        "A generic term for foods made by kneading flour used in Italian cuisine. Spaghetti, macaroni, etc.",
      zh: "通过揉合意大利美食中的面粉制成的食品的通用术语。意大利面，通心粉等",
    },
    imgSrc: "./static/images/sample2.jpg.png",
  },
  {
    id: 3,
    name: { ja: "サラダ", en: "salad", zh: "沙拉" },
    price: 300,
    description: {
      ja:
        "生野菜やゆでた野菜をソースであえたもの。肉や魚介類を使うこともある。冷たくしたものが多いが，温かいサラダもある。",
      en:
        "Raw vegetables and boiled vegetables served with sauce. Sometimes I use meat and seafood. Many are chilled, but there is also a hot salad.",
      zh: "生蔬菜和煮蔬菜配酱。有时我用肉和海鲜。许多冷藏，但也有热沙拉。",
    },
    imgSrc: "./static/images/sample3.jpg",
  },
  {
    id: 4,
    name: { ja: "パスタ", en: "pasta", zh: "意大利面" },
    price: 500,
    description: {
      ja:
        "イタリア料理に使う、小麦粉をこねて作った食品の総称。スパゲッティ・マカロニなど。",
      en:
        "A generic term for foods made by kneading flour used in Italian cuisine. Spaghetti, macaroni, etc.",
      zh: "通过揉合意大利美食中的面粉制成的食品的通用术语。意大利面，通心粉等",
    },
    imgSrc: "./static/images/sample4.jpg",
  },
];

export const getMenuById = (id) =>
  menus.filter((menu) => {
    return menu.id == id;
  });
export default menus;
