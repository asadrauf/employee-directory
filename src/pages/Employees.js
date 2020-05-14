import React, {useState} from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
// where I learned about context https://www.youtube.com/watch?v=lhMKvyLRWo0
import { GlobalContext } from "../utils/GlobalContext";

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [displayedEmployees, setDisplayedEmployees] = useState([])
    return (
        <div>
        <GlobalContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        <Wrapper>
        <div className="search" style={{ marginTop: 10 }}></div>
                <Search />
        <Table />
        </Wrapper>
      </GlobalContext.Provider>
      <Footer />
        </div>
    )
}

