import { createContext, useContext } from "react";

const SearchContext = createContext(null);

const useSearchValue = () => useContext(SearchContext);
export { SearchContext, useSearchValue };
