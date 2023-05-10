import { Input } from 'antd';


const { Search } = Input;

const onSearch = (value: any) => console.log(value);

const SearchModel = () => (
    <Search
        placeholder="搜索商品"
        allowClear
        enterButton="搜索"
        size="large"
        onSearch={onSearch}
    />
);
export default SearchModel;