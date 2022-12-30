import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Login() {
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <Image
          style={styles.loginImg}
          source={require("../../assets/login-img.png")}
        />
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Login</Text>

          <View style={[styles.inputContainer, { marginTop: 20 }]}>
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

          <View style={[styles.inputContainer, { marginTop: 20 }]}>
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

        {/* Horizontal Rule */}
        <View style={styles.hr}>
          <Image
            style={styles.hrLine}
            source={require("../../assets/icons/line.png")}
          />
          <View style={{ paddingHorizontal: 6 }}>
            <Text style={{ fontSize: 13, color: "#1616163b" }}>OR</Text>
          </View>
          <Image
            style={styles.hrLine}
            source={require("../../assets/icons/line.png")}
          />
        </View>

        <TouchableOpacity style={styles.googleLoginBtn}>
          <Image source={require("../../assets/icons/google.png")} />
          <Text style={styles.googleLoginBtnText}>Login with Google</Text>
        </TouchableOpacity>

        <View style={styles.signUpNavigator}>
          <Text style={styles.navigatorText1}>Don’t have account? </Text>
          <Text style={styles.navigatorText2}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
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
  hr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40,
  },
  hrLine: {
    width: "45%",
  },
  googleLoginBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#00000021",
    paddingVertical: 10,
    borderRadius: 6,
  },
  googleLoginBtnText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#282828",
  },
  signUpNavigator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  navigatorText1: {
    color: "#1616163b",
    fontSize: 13,
  },
  navigatorText2: {
    color: "#282828",
  },
});
