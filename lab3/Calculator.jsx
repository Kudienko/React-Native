import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
var stringMath = require("string-math");

export default function Calculator() {
  const [fontsLoaded] = useFonts({
    "San Francisco": require("./assets/fonts/regular.ttf"),
    "San Francisco thin": require("./assets/fonts/thin.ttf"),
  });
  const Row = ({ children }) => <View style={styles.row}>{children}</View>;
  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };
  const [total, setTotal] = useState("0");
  const [textColor, setTextColor] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const massOperator = ["*", "/", "+", "-"];

  const handleDeleteClick = () => {
    setTextColor("");
    setTotal("0");
    setResult("");
  };

  const handlePmClick = () => {
    if (total === '0') {
      setTotal('-0')
    } else if ( total === '-0'){
      setTotal('0')
    } else {
      setTotal(total * -1);
    }
  };

  const handlePercentClick = () => {
    setTotal((total / 100).toString());
  };

  const handleOperationClick = (operation) => {
    setResult(result + operation);
    setTextColor(operation);
    setOperator(operation);
  };
  const handleNumberClick = (number) => {
    setTextColor("");
    if (total !== "0" && !operator && result !== '') {
      setResult(result + number);
      setTotal(total + number);
      console.log("1");
    } else if (massOperator.includes(operator)) {
      setResult(result + number);
      setTotal("");
      setTotal(number);
      setOperator("");
      console.log("2");
    } else {
      setResult(result + number);
      setTotal(number);
      console.log("3");
    }
  };
  const HandleEqualClick = () => {
    setResult('(' + (result) + ')' );
    console.log(result);
    try {
      setTotal(stringMath(result));
    } catch {
      setTotal('Ошибка')
    }

  };
  const handleDotClick = () => {
    setTotal(total + ',')
    setResult(result + '.')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screen_text}>{total}</Text>
      </View>
      <View style={styles.buttons_container}>
        <Row>
          <Col numRows={1}>
            <TouchableOpacity
              style={styles.gray_button}
              onPress={() => handleDeleteClick()}
            >
              <Text style={styles.black_text}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("7")}
            >
              <Text style={styles.button_text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("4")}
            >
              <Text style={styles.button_text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("1")}
            >
              <Text style={styles.button_text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.zero_button}
              onPress={() => handleNumberClick("0")}
            >
              <Text style={styles.zero_text}>0</Text>
            </TouchableOpacity>
          </Col>
          <Col numRows={1}>
            <TouchableOpacity
              style={styles.gray_button}
              onPress={() => handlePmClick()}
            >
              <Text style={styles.black_text}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("8")}
            >
              <Text style={styles.button_text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("5")}
            >
              <Text style={styles.button_text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("2")}
            >
              <Text style={styles.button_text}>2</Text>
            </TouchableOpacity>
          </Col>
          <Col numRows={1}>
            <TouchableOpacity
              style={styles.gray_button}
              onPress={() => handlePercentClick()}
            >
              <Text style={styles.black_text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("9")}
            >
              <Text style={styles.button_text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("6")}
            >
              <Text style={styles.button_text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.black_button}
              onPress={() => handleNumberClick("3")}
            >
              <Text style={styles.button_text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.black_button}
              onPress={() => handleDotClick(".")}>
              <Text style={styles.button_text}>,</Text>
            </TouchableOpacity>
          </Col>
          <Col numRows={1}>
            <TouchableOpacity
              style={
                !(textColor === "/")
                  ? styles.yellow_button
                  : styles.white_button
              }
              onPress={() => handleOperationClick("/")}
            >
              <Text
                style={
                  !(textColor === "/")
                    ? styles.operation_text_white
                    : styles.operation_text_yellow
                }
              >
                ÷
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                !(textColor === "*")
                  ? styles.yellow_button
                  : styles.white_button
              }
              onPress={() => handleOperationClick("*")}
            >
              <Text
                style={
                  !(textColor === "*")
                    ? styles.operation_text_white
                    : styles.operation_text_yellow
                }
              >
                ×
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                !(textColor === "-")
                  ? styles.yellow_button
                  : styles.white_button
              }
              onPress={() => handleOperationClick("-")}
            >
              <Text
                style={
                  !(textColor === "-")
                    ? styles.operation_text_white
                    : styles.operation_text_yellow
                }
              >
                −
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                !(textColor === "+")
                  ? styles.yellow_button
                  : styles.white_button
              }
              onPress={() => handleOperationClick("+")}
            >
              <Text
                style={
                  !(textColor === "+")
                    ? styles.operation_text_white
                    : styles.operation_text_yellow
                }
              >
                ＋
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.yellow_button}
              onPress={() => HandleEqualClick()}
            >
              <Text style={styles.button_text}>=</Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    flex: 1,
  },
  screen: {
    paddingTop: 90,
    paddingRight: 23,
    width: "100%",
    height: 200,
  },
  screen_text: {
    fontFamily: "San Francisco thin",
    color: "white",
    textAlign: "right",
    fontSize: 100,
  },
  buttons_container: {
    flex: 4,
  },
  yellow_button: {
    margin: 5,
    display: "flex",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#f1a33c",
    justifyContent: "center",
    alignItems: "center",
  },
  gray_button: {
    margin: 5,
    display: "flex",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
  },
  black_button: {
    margin: 5,
    display: "flex",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  zero_button: {
    margin: 5,
    display: "flex",
    width: 175,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#333",
    justifyContent: "center",
  },
  zero_text: {
    fontFamily: "San Francisco",
    color: "white",
    fontSize: 35,
    marginLeft: 25,
    width: 180,
  },
  button_text: {
    fontFamily: "San Francisco",
    color: "white",
    fontSize: 35,
  },
  white_button: {
    fontFamily: "San Francisco",
    margin: 5,
    display: "flex",
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  black_text: {
    fontFamily: "San Francisco",
    color: "black",
    fontSize: 30,
  },
  operation_text_white: {
    fontFamily: "San Francisco",
    color: "white",
    fontSize: 45,
  },
  operation_text_yellow: {
    fontFamily: "San Francisco",
    color: "#f1a33c",
    fontSize: 45,
  },
});
