import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  
  //import { axiosInstance } from "../utils/axios";
  
  const NewsContext = createContext({
    posts: [],
  });
  
  export const useNewsContext = () => {
    return useContext(NewsContext);
  };
  
  const getFakeNews = () => {
    return [
      {
        tags: ["Marko Yemets", "Red Bull", "Season 6", "Champion"],
        id: 1,
        link: "/news/1",
        date: "01/01/2024",
        title:
          "Юрій кравцов показує всім свій кубок. Сергій в захваті. Каленант молодець.",
        image:
          "https://media.discordapp.net/attachments/1037394210212552755/1211258407869480970/02.png?ex=65ed8b4c&is=65db164c&hm=f390237148ca0a9f025eee7d7afad4662cf02f5c03654f6b9dea9b74800faa56&=&format=webp&quality=lossless&width=1202&height=676",
        text: "Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Юрій Кравцов обганяє Реда в турнірній таблиці. Поато знову ДНФ. Орест перемагає гран прі Бахрейну.",
        type: "PODCAST",
      },
  
      {
        tags: ["Marko Yemets", "Red Bull", "Season 6", "Champion"],
        id: 2,
        link: "/news/2",
        date: "01/03/2024",
        title: "Результати етапу в Австрії. Виважена перемога Володимира Федя",
        image:
          "https://media.discordapp.net/attachments/1037394210212552755/1200475130925690941/18d468d687495-screenshotUrl.jpg?ex=65eb3a96&is=65d8c596&hm=a691dc530172a839080f4fc66b9115159e170e3e6da236bb23923f1762093693&=&format=webp&width=1465&height=824",
        text: "Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Юрій Кравцов обганяє Реда в турнірній таблиці. Поато знову ДНФ. Орест перемагає гран прі Бахрейну.",
        type: "LEAGUE",
      },
  
      {
        tags: ["Marko Yemets", "Red Bull", "Season 6", "Champion"],
        id: 3,
        link: "/news/3",
        date: "01/03/2024",
        title: "Орест покидає перегони! Останнє відео на каналі.",
        image: "https://i.ytimg.com/vi/eaLz4AT065I/hqdefault.jpg",
        text: "Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Юрій Кравцов обганяє Реда в турнірній таблиці. Поато знову ДНФ. Орест перемагає гран прі Бахрейну.",
        type: "GENERAL",
      },
      {
        tags: ["Marko Yemets", "Red Bull", "Season 6", "Champion"],
        id: 4,
        link: "/news/4",
        date: "01/03/2024",
        title: "Андрій Свинобой після лідирує після трьох етапів.",
        image:
          "https://media.discordapp.net/attachments/1037394210212552755/1182640580149395476/F1_23_photo_20231208_125350.png?ex=65eaf25e&is=65d87d5e&hm=fb5327bc9586359a15a300f2c98d838c804c6c4a2271879d5ad9c93a79f70b51&=&format=webp&quality=lossless&width=1465&height=824",
        text: "Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Юрій Кравцов обганяє Реда в турнірній таблиці. Поато знову ДНФ. Орест перемагає гран прі Бахрейну.",
        type: "LEAGUE",
      },
  
      {
        tags: ["Marko Yemets", "Red Bull", "Season 6", "Champion"],
        id: 5,
        link: "/news/5",
        date: "01/03/2024",
        title: '"Перехрестились, помолились і рушаймо!" - інженер Юліан Каленант',
        image:
          "https://media.discordapp.net/attachments/1037394210212552755/1208471246342332476/F1_23_photo_superres_20240217_195227.png?ex=65eca20d&is=65da2d0d&hm=263606ee604cf3f26d41172dc06390d23ed78a9cd74a3c1eaebee4ece339d5f4&=&format=webp&quality=lossless&width=1465&height=824",
        text: "Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Марко Ємець перемагає у спринті та радіє. Юрій Кравцов обганяє Реда в турнірній таблиці. Поато знову ДНФ. Орест перемагає гран прі Бахрейну.",
        type: "LEAGUE",
      },
    ];
  };
  
  export const NewsProvider = ({ children }) => {
    const [posts, setPosts] = useState({});
  
    const fetchNews = useCallback(async () => {
      //const { data } = await axiosInstance.get(`/races/${id}`);
      return getFakeNews();
    }, []);
  
    const loadNews = useCallback(
      async () => {
        setTimeout(async () => {
          const news = await fetchNews();
          setPosts(news);
        }, 3000);
      },
      // eslint-disable-next-line
      [fetchNews]
    );
  
    useEffect(() => {
      loadNews();
    }, [loadNews]);
  
    return (
      <NewsContext.Provider value={{ posts }}>{children}</NewsContext.Provider>
    );
  };
  