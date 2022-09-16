import type { NextPage } from "next";
import HeaderItem from "../components/pages/home/HeaderItem";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
export interface IHeaderItem {
  id: number;
  title: string;
  select: string;
  options: IOption[];
}
interface IOption {
  name: string;
  value: string | number;
}

const getNews = () => {
  const options = {
    method: "GET",
    url: "https://gaialens-esg-news.p.rapidapi.com/news",
    params: { companyname: "Apple Inc." },
    headers: {
      "X-RapidAPI-Key": "a3f84fc8f4msh10b500b9516143cp1039b7jsn7fc28ed05dbe",
      "X-RapidAPI-Host": "gaialens-esg-news.p.rapidapi.com",
    },
  };
  return axios(options);
};

const postNews = async (data: any) => {
  try {
    const resp = await axios.post("http://localhost:3000/api/store-news", data);
    console.log("response after storing news", resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["news_data"], () => getNews(), {
    onSuccess({ data }) {
      postNews(data[0]);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <div className="rounded-lg bg-slate-800 text-white p-11 w-4/5">
        <div className="header flex">
          {headerOptions.map((item) => (
            <HeaderItem key={item.id} item={item} />
          ))}
        </div>

        <div className="container my-2">
          <div className="news-item bg-gray-600 rounded-md p-3">
            <h6 className=" text-blue-700">
              News | Tuesday, September 6th 2022
            </h6>
            <h5>Brazil orders Apple to suspend iPhone</h5>
            <a href="#" className=" underline text-gray-400">
              https://www.facebook.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const headerOptions: IHeaderItem[] = [
  {
    id: 1,
    title: "Content Search",
    select: "Select",
    options: [
      {
        name: "One",
        value: 1,
      },
      {
        name: "Two",
        value: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Date Published",
    select: "Select a date range",
    options: [
      {
        name: "One",
        value: 1,
      },
      {
        name: "Two",
        value: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Source Search",
    select: "Select",
    options: [
      {
        name: "One",
        value: 1,
      },
      {
        name: "Two",
        value: 2,
      },
    ],
  },
];
