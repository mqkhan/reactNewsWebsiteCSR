import Layout from "./componenets/Layout";
import News from "./componenets/news";

export default function Business() {
  return (
    <>
      <h1 className="bg-slate-200">Chas Business</h1>
      <News category="business" />
    </>
  );
}
