import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/CourseApi";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  console.log(id);

  const selectedCourse = Courses.find((element) => {
    return id === element.id;
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
        <Text style={styles.description}> {selectedCourse.description}</Text>
        <Text style={styles.courseDescrip}>{selectedCourse.course1}</Text>
        <Text style={styles.courseDescrip}>{selectedCourse.course2}</Text>
        <Text style={styles.courseDescrip}>{selectedCourse.course3}</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedCourse.price}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}
          >
            <Text style={styles.buttonText}> Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: "46%",
    // aspectRatio: 1,
    alignContent: "center",
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 20,
  },
  mainHeader: {
    fontSize: 19,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  description: {
    textAlign: "left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 14,
    color: "#7d7d7d",
    marginTop: 1,
  },
  courseDescrip: {
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 10,
    fontSize: 12,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "red",
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
});

export default CourseDetails;
