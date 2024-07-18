import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./app.module.scss"
import cardList from "../../mocks/cardList";

export default function App() {
  return <PageWrapper cards={cardList} />;
}
