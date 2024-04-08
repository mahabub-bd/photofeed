import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return <div className="container">{dictionary.followers}</div>;
}
