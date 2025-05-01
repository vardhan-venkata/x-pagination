import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CustomTable from "./components/CustomTable/CustomTable";
import PageNavigation from "./components/PageNavigation/PageNavigation";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextpage = () => {
    setCurrentPage((prevVal) => prevVal + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevVal) => Math.max(1, prevVal - 1));
  };

  const fetchEmployeeData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
      );

      setEmployeeData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      alert("failed to fetch data");
      console.log("error", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <div className="App">
      <h1> Employee Data Table</h1>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <CustomTable empData={employeeData} currentPage={currentPage} />
        </div>
      )}
      <PageNavigation
        currentPage={currentPage}
        handlePrevButton={handlePrevPage}
        handleNextButton={handleNextpage}
      />
    </div>
  );
}

export default App;

/*
Data Fetching & Table Rendering

Fetch Data: Load data from the API (e.g., the provided URL) and ensure it populates a table.
Row Count: Ensure the table displays at least 10 rows of data.
Pagination Controls

Visibility: Render both "Previous" and "Next" buttons.
Navigation Logic:
Next Button: On clicking "Next," the table should update to show data for the next page (e.g., an element with page number “2” should be visible).
Previous Button: After navigating forward, clicking "Previous" should bring the user back to the first page (e.g., an element with page number “1” should be visible).
Error Handling

API Failure: Implement error handling for the data fetch.
Alert: If the API request fails (e.g., a 500 error), display an alert with a message that includes “failed to fetch data” (case-insensitive).
*/
