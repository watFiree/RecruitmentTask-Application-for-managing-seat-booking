import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { seatsState, reserveSeats } from '../app/seatsSlice';
import { makeReservation } from '../app/reservationsSlice';
import useReserveSeat from '../hooks/useReserveSeat';

import { Layout, Alert, Button } from 'antd';
import Box from '../components/Box';
import Seat from '../components/Seat';

const ReserveSeats = () => {
  const { state } = useLocation<LocationState>();
  const history = useHistory();
  const seats = useAppSelector(seatsState);
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const [seatsChoosen, handleSeatClick] = useReserveSeat(state?.tickets || 0, state?.nextToEachOther || false);

  useEffect(() => {
    if (state === undefined) {
      setError(true);
    }
  }, [state]);

  const handleReserve = () => {
    history.push('/summary', seatsChoosen);
    dispatch(reserveSeats(seatsChoosen));
    dispatch(makeReservation(seatsChoosen));
  };

  return (
    <Layout
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {error ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 16,
          }}
        >
          <Alert
            style={{ width: '30%' }}
            message="Błąd"
            description="Brak podanej liczby miejsc do rezerwacji. Wróć do strony głownej."
            type="error"
            showIcon
          />
          <Button type="link">
            <Link to="/">Strona główna</Link>
          </Button>
        </div>
      ) : (
        <>
          <div
            style={{
              height: 'calc(100% - 100px)',
              width: '100%',
              paddingBottom: 16,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {seats.data.map((row, rowIndex) => (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                key={rowIndex}
              >
                {row.map((seat, seatIndex) => {
                  const chosenIds = seatsChoosen.map(seat => seat?.id);
                  const backgroundColor = seat?.reserved
                    ? 'darkgray'
                    : chosenIds.includes(seat?.id)
                    ? 'orange'
                    : 'white';
                  return (
                    <Seat
                      key={seat?.id || String(rowIndex) + String(seatIndex)}
                      id={seat?.id || undefined}
                      x={seat?.cords?.x || 0}
                      y={seat?.cords?.y || 0}
                      reserved={seat?.reserved || false}
                      backgroundColor={backgroundColor}
                      handleClick={handleSeatClick}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div
            style={{
              width: '100%',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Box backgroundColor="white" label="Miejsca dostępne" />
            <Box backgroundColor="darkgray" label="Miejsca zarezerwowane" />
            <Box backgroundColor="orange" label="Twój wybór" />
            <Button
              style={{ height: '75%', width: '15%' }}
              size="large"
              disabled={seatsChoosen.length !== state?.tickets}
              onClick={handleReserve}
            >
              Rezerwuj
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
};

type LocationState = {
  tickets: number;
  nextToEachOther: boolean;
};

export default ReserveSeats;
