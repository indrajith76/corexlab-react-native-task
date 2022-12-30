import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.MainContainer}>
      <Image
        style={styles.loginImg}
        source={require("../../assets/login-img.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>

        <View style={[styles.inputContainer, { marginTop: 30 }]}>
          <Image
            style={styles.labelIconImg}
            source={require("../../assets/icons/email.png")}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyles}
            placeholder="E-mail ID"
          />
        </View>

        <View style={[styles.inputContainer, { marginTop: 50 }]}>
          <Image
            style={styles.labelIconImg}
            source={require("../../assets/icons/lock.png")}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyles}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <Text style={styles.forgotPass}>Forgot Password?</Text>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginImg: {
    width: 230,
    height: 220,
    marginLeft: "auto",
    marginRight: "auto",
  },
  formContainer: {
    paddingTop: 35,
  },
  heading: {
    fontSize: 18,
    color: "#282828",
    fontWeight: "800",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  labelIconImg: {
    width: 12,
    marginRight: 10,
  },
  inputStyles: {
    width: "93%",
    borderBottomWidth: 1,
    height: 35,
    borderColor: "#00000021",
  },
  forgotPass: {
    marginTop: 25,
    fontSize: 12,
    textAlign: "right",
    color: "#1616163b",
  },
  loginBtn: {
    backgroundColor: "#282828",
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 40,
  },
  loginBtnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
