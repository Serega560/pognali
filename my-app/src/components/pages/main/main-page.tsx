import { useGetCatalogQuery } from "../../../store/catalog-api";

function MainPage(): React.JSX.Element {

    const {data: catalog} = useGetCatalogQuery('');
    console.log(catalog, 'catalog');
    return (
        <div>
            <h1>Main page</h1>
        </div>
    )
}

export default MainPage;
