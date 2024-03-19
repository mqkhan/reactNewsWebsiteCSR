import Layout from "./componenets/Layout";
import News from "./componenets/news";

export default function Sports() {
  return (
    <>
      <h1 className="bg-slate-200">Chas Sports</h1>

      <News category="sports" />
    </>
  );
}
