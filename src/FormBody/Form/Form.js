import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Card, ListItem, Icon, Switch } from "react-native-elements";

const Form = () => {
  return (
    <View style={styles.form}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.coldevide}>
          <Card.Title
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "left",
              flex: 4,
            }}
          >
            Audience Q&A{" "}
          </Card.Title>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Switch color="green" />
          </View>
        </TouchableOpacity>
        <Card.Divider />

        <View containerStyle={{ padding: 0 }}>
          <View style={{ paddingLeft: 30 }}>
            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Moderation
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Labels
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Down Notes
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Replies
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Anoymous Questions
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.coldevide}>
              <View style={{ flex: 2 }}>
                <Card.Title
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Max Question Length
                </Card.Title>
                <Text
                  style={{ textAlign: "left", fontSize: 10, color: "grey" }}
                >
                  kjshksdh sdfsdkfsd akskasdask kasasj
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    type="outline"
                    title="160"
                    style={{
                      width: 50,
                      hight: 20,
                      color: "#6530a2",
                      backgroundColor: "white",
                      marginHorizontal: 2,
                    }}
                    
                  />
                  <Button
                    type="solid"
                    title="160"
                    style={{
                      width: 50,
                      hight: 20,
                      color: "#6530a2",
                      marginHorizontal: 2,
                    }}
                    color={"#6530a2"}
                  />
                  <Button
                    type="clear"
                    title="160"
                    style={{
                      width: 50,
                      hight: 20,
                      color: "#6530a2",
                      marginHorizontal: 2,
                    }}
                    
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Switch value={false} color="green" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flex: 4,
    height: 500,
    borderRadius: 10,
    justifyContent: "center",
    "box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.57)",
    "-webkit-box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.57)",
    "-moz-box-shadow": "0px 0px 10px 0px rgba(0,0,0,0.57)",
  },
  card: {
    display: "flex",
    textAlign: "left",
    paddingHorizontal: 30,
  },
  coldevide: {
    display: "flex",
    justifyContent: "spcace-between",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
    border: "none",
  },
});
