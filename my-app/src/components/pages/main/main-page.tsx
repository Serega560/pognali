import { useGetCatalogQuery, useGetPaginationQuery } from "../../../store/catalog-api";

function MainPage(): React.JSX.Element {

    const {data: catalog} = useGetCatalogQuery('');
    const {data: paginationData} = useGetPaginationQuery({page: 2, limit: 3});
    console.log(paginationData, 'pagination');
    console.log(catalog, 'catalog');
    return (
        <div>
            <h1>Main page</h1>
        </div>
    )
}

export default MainPage;
