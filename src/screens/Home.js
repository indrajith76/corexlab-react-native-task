import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
    
  return (
    <View style={styles.MainContainer}>
      {/* Header section */}
      <View style={[styles.header, styles.commonFlex, styles.commonBorder]}>
        {/* Right side */}
        <View style={styles.headerRight}>
          <Image source={require("../../assets/icons/location.png")} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{}}>Gamle Oslo</Text>
            <Text style={{ fontSize: 10, color: "#0000003d" }}>NO</Text>
          </View>
        </View>
        {/* Left side */}
        <View style={styles.headerLeft}>
          <Image
            style={{ marginRight: 8 }}
            source={require("../../assets/icons/lineV.png")}
          />
          <Image
            style={{ marginRight: 8 }}
            source={require("../../assets/icons/calander.png")}
          />
          <Text style={{ color: "#0000003d" }}>When?</Text>
        </View>
      </View>

      {/* DropDown Section */}
      <View style={[styles.dropDownContainer, styles.commonFlex]}>
        <View
          style={[styles.dropDownLeft, styles.commonFlex, styles.commonBorder]}
        >
          <Text style={{ marginRight: 5 }}>Hair type</Text>
          <Image source={require("../../assets/icons/arrowDown.png")} />
        </View>
        <View
          style={[styles.dropDownRight, styles.commonFlex, styles.commonBorder]}
        >
          <Image source={require("../../assets/icons/home.png")} />
          <Text style={{ marginHorizontal: 5 }}>Home Salon</Text>
          <Image source={require("../../assets/icons/arrowDown.png")} />
        </View>
      </View>

      <View style={styles.productContainer}>
        <Text style={{ color: "#0000003d" }}>100 results of 455</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Common styles
  MainContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  commonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commonBorder: {
    borderWidth: 1,
    borderColor: "#00000021",
  },
  header: {
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dropDownContainer: {
    justifyContent: "center",
    marginTop: 13,
  },
  dropDownLeft: {
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginRight: 10,
  },
  dropDownRight: {
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginLeft: 10,
  },
  productContainer: {
    marginTop: 17,
  },
});
