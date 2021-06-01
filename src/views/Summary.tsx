import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { SimplifiedSeat } from "../types";

import { Layout, Typography } from "antd";
const { Title, Text } = Typography;

const Summary = () => {
  const { state } = useLocation<SimplifiedSeat[]>();
  const history = useHistory();

  useEffect(() => {
    if (state === undefined) {
      return history.push("/");
    }
    return;
  }, [state, history]);

  return (
    <Layout
      style={{ width: "100%", height: "100vh", padding: 28, fontSize: 21 }}
    >
      <Title level={2}>Twoja rezerwacja przebiegła pomyślnie!</Title>
      <Text>Wybrałeś miejsca:</Text>
      {state?.map((seat) => (
        <Text
          key={seat.id}
        >{`- rząd x${seat.x}, miejsce y${seat.y} (${seat.id})`}</Text>
      ))}
      <Title level={3}>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </Title>
    </Layout>
  );
};

export default Summary;
