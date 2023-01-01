import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductCard({ item }) {
  const { name, location, Category, rating, krh, krd, img } = item;
  return (
    <View style={styles.productContainer}>
      <View>
        <Image style={styles.productImg} source={{ uri: `${img}` }} />
      </View>
      <View style={[styles.productText, styles.commonFlex]}>
        <View>
          <Text style={styles.productName}>{name}</Text>
          <View style={styles.commonFlex}>
            <View style={styles.commonFlex}>
              <Image source={require("../../assets/icons/star.png")} />
              <Image source={require("../../assets/icons/star.png")} />
              <Image source={require("../../assets/icons/star.png")} />
              <Image source={require("../../assets/icons/star.png")} />
              <Image source={require("../../assets/icons/star.png")} />
            </View>
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>

        <View style={{}}>
          <Text
            style={{ textAlign: "right", color: "#BDBDBD", marginBottom: 5 }}
          >
            FORM
          </Text>
          <View style={styles.commonFlex}>
            <Text style={{ marginRight: 10 }}>
              Kr{krh}
              <Text style={{ color: "#BDBDBD" }}>/h</Text>
            </Text>
            <Text>
              Kr{krd}
              <Text style={{ color: "#BDBDBD" }}>/day</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.commonFlex, styles.ImgText]}>
        <View style={[styles.commonFlex, styles.location]}>
          <Image
            style={{ width: 10, height: 13, marginRight:5 }}
            source={require("../../assets/icons/location.png")}
          />
          <Text style={{ color: "#fff", fontSize: 12 }}>{location}m</Text>
        </View>

        <View style={styles.category}>
          <Text style={{ color: "#fff", fontSize: 12 }}>{Category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#00000021",
    borderRadius: 7,
    height: 268,
    overflow: "hidden",
  },
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productImg: {
    width: "100%",
    height: 205,
    marginTop: -3,
  },
  productText: {
    justifyContent: "space-between",
    height: 63,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productName: {
    fontSize: 16,
    color: "#282828",
    marginBottom: 5,
  },
  rating: {
    color: "#BDBDBD",
    marginLeft: 5,
  },
  ImgText: {
    position: "absolute",
    top: 10,
    right: 8,
    left: 8,
  },
  location: {
    backgroundColor: "#FFFFFF50",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginRight: "43%",
  },
  category: {
    backgroundColor: "#FFFFFF50",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
  },
});
