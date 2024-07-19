import Catalog from "../../pages/catalog/catalog";
import "./page-wrapper.module.scss"

// Обёртка для контента страниц
function PageWrapper() {
    return (
      <>
        <main className="page-wrapper__main">
          <Catalog />
        </main>
      </>
    );
  }
  
  export default PageWrapper;