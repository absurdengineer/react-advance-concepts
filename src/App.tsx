import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";
import Pagination from "./components/Pagination";
import { getPassengers } from "./services/passenger.service";
import { NoPropComponent } from "./types/component.types";
import { HandlePageChange } from "./types/function.types";
import { Passenger } from "./types/resource.types";

const initialPassengers: Passenger[] = [];
const initialPage: number = 1;
const initialTotalRecords: number = 0;
const initialTotalPages: number = 1;
const initialLoading: boolean = false;

const App: NoPropComponent = () => {
  const [passengers, setPassengers] = useState(initialPassengers);
  const [totalRecords, setTotalRecords] = useState(initialTotalRecords);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(initialLoading);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();
    (async () => {
      try {
        setLoading(true);
        const config = { cancelToken: source.token };
        const { data } = await getPassengers(page, config);
        if (!unmounted) {
          setPassengers(data.data);
          setTotalRecords(data.totalPassengers);
          setTotalPages(data.totalPages - 1);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled because of Unmounting");
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      unmounted = true;
      source.cancel();
    };
  }, [page]);

  const handlePageChange: HandlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl mb-4">Air Passengers : </h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {passengers.map((passenger) => (
              <Card key={passenger._id} data={passenger} />
            ))}
          </div>
        </>
      )}
      <Pagination
        currentPage={page}
        limit={15}
        maxPages={7}
        totalPages={totalPages}
        totalRecords={totalRecords}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
