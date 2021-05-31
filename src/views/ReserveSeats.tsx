import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { seatsState } from "../app/seatsSlice";

import { Layout, Alert, Button } from "antd";
import Box, { BoxWithLabel } from "../components/Box";

type LocationState = {
  places: number;
  nextToEachOther: boolean;
};

const ReserveSeats = () => {
  const location = useLocation<LocationState>();
  const seats = useAppSelector(seatsState);
  const [, setPlaces] = useState(0);
  const [, setNextToEachOther] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    //validate if state is ok
    if (location.state) {
      setPlaces(location.state.places);
      setNextToEachOther(location.state.nextToEachOther);
    } else {
      setError(true);
    }
  }, [location.state]);

  return (
    <Layout style={{ width: "100%", height: "100vh", display: "flex" }}>
      {error ? (
        <>
          <Alert
            style={{ position: "absolute", width: "30%", alignSelf: "center" }}
            message="Error"
            description="Brak podanej liczby miejsc do rezerwacji. Wróć do strony głownej."
            type="error"
            showIcon
          />
          <Button type="link">
            <Link to="/">Strona główna</Link>
          </Button>
        </>
      ) : null}

      <div
        style={{
          height: "90%",
          padding: 16,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {seats.data.map((row) => {
          console.log(row);
          return (
            <div>
              {row.map((seat) => {
                return <Box id={seat.id || "empty"} />;
              })}
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <BoxWithLabel backgroundColor="white" label="Miejsca dostępne" />
        <BoxWithLabel
          backgroundColor="darkgray"
          label="Miejsca zarezerwowane"
        />
        <BoxWithLabel backgroundColor="orange" label="Twój wybór" />
        <Button style={{ height: "75%", width: "250px" }} size="large">
          Rezerwuj
        </Button>
      </div>
    </Layout>
  );
};

export default ReserveSeats;
