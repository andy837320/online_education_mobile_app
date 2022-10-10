import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "Hey,Wassp!! This is my Online education channel,Please do visit to get more knowledge about Web Dev💻";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/mylogo.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome To</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 28,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {props.channelName}
        </Text>

        <Text style={styles.paraStyle}> {description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: "46%",
    width: "110%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 58,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 23,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 10,
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "green",
  },
});

export default Home;
