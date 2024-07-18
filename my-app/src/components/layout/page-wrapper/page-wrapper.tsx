import Catalog from "../../pages/catalog/catalog";
import "./page-wrapper.module.scss"

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
    return (
      <>
        <main className="page-wrapper__main">
          <Catalog {...prop} />
        </main>
      </>
    );
  }
  
  export default PageWrapper;