import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { seatsState } from "../app/seatsSlice";

import {
  Layout,
  Space,
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
} from "antd";

const { Text } = Typography;

const App = () => {
  const history = useHistory();
  const seats = useAppSelector(seatsState);

  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{ places: "", nextToEachOther: false }}
        validationSchema={Yup.object().shape({
          places: Yup.number()
            .typeError("Podaj poprawną liczbę")
            .required("Podaj liczbę miejsc")
            .moreThan(0, "Liczba miejsc powinna być większa od zera"),
        })}
        onSubmit={({ places, nextToEachOther }) => {
          // checks if enough left to reserve
          if (Number(places) > seats.free.length) {
            return alert(
              `Obecnie dostępne jest tylko ${seats.free.length} miejsc`
            );
          }
          return history.push("/reserve", {
            places: Number(places),
            nextToEachOther,
          });
        }}
      >
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Space style={{ display: "flex" }} size="middle">
            <Text style={{ fontSize: 16 }}>Liczba miejsc:</Text>
            <Field as={Input} id="places" name="places" />
          </Space>

          <Field
            as={Checkbox}
            children="Czy miejsca mają być obok siebie?"
            id="nextToEachOther"
            name="nextToEachOther"
            style={{ paddingTop: 16, paddingBottom: 16 }}
          />

          <ErrorMessage name="places">
            {(error) => (
              <Alert
                style={{ marginBottom: 16 }}
                message={error}
                type="error"
                showIcon
              />
            )}
          </ErrorMessage>

          <Button htmlType="submit" size="large">
            Wybierz miejsca
          </Button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default App;
