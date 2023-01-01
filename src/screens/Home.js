import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native"; 
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      const res = await fetch(
        "https://corexlab-react-native-server.vercel.app/products"
      );
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
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
            style={[
              styles.dropDownLeft,
              styles.commonFlex,
              styles.commonBorder,
            ]}
          >
            <Text style={{ marginRight: 5 }}>Hair type</Text>
            <Image source={require("../../assets/icons/arrowDown.png")} />
          </View>
          <View
            style={[
              styles.dropDownRight,
              styles.commonFlex,
              styles.commonBorder,
            ]}
          >
            <Image source={require("../../assets/icons/home.png")} />
            <Text style={{ marginHorizontal: 5 }}>Home Salon</Text>
            <Image source={require("../../assets/icons/arrowDown.png")} />
          </View>
        </View>

        <View style={styles.productContainer}>
          <Text style={{ color: "#0000003d", marginBottom: 10 }}>
            100 results of 455
          </Text>

          {/* Products Container*/}
          {isLoading ? (
            <View>
              <ActivityIndicator style={{ height: 150 }} size="large" />
            </View>
          ) : (
            <FlatList
              data={products}
              showsVerticalScrollIndicator={false}
              keyExtractor={(key) => {
                return key._id;
              }}
              renderItem={({ item }) => {
                return <ProductCard item={item} />;
              }}
            />
          )}
        </View>
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
    paddingBottom: 180,
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
    marginBottom: 250,
  },
});
