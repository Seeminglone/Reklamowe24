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
      id: 1,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10100900.jpg",
      name: "Kolorowe okulary prz…",
      symbol: "10100900",
      price: "1,45",
    },

    {
      id: 2,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/10941855.jpg",
      name: "Niel automatyczny pa...",
      symbol: "10941855",
      price: "25,16",
    },

    {
      id: 3,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/21021101.jpg",
      name: "Notes Wiro",
      symbol: "21021101",
      price: "5,39",
    },
    {
      id: 4,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/38320492.jpg",
      name: "Damska kurtka type s...",
      symbol: "38320492",
      price: "119,28",
    },

    {
      id: 5,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/12421790.jpg",
      name: "Klawiatura do wieli ...",
      symbol: "12421790",
      price: "54,29",
    },
    {
      id: 6,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/13495800.jpg",
      name: "Gumowy głośnik cylin...",
      symbol: "13495800",
      price: "0,00",
    },
    {
      id: 7,
      image:
        "https://gadzety-reklamowe.com/media/cache/resolve/small/common/image/products/P437.103.jpg",
      name: "Kubek podróżny 900 m...",
      symbol: "P437103",
      price: "37,72",
    },
  ];
};

export const NewsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchNews = useCallback(async () => {
    //const { data } = await axiosInstance.get(`/races/${id}`);
    return getFakeNews();
  }, []);

  const loadNews = useCallback(
    async () => {
      // setTimeout(async () => {
      const news = await fetchNews();
      setPosts(news);
      // }, 3000);
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
