import MobileNumber from "@/app/myPages/mobileNumber";
import SignUpPage from "@/app/myPages/signUpPage";
import OtpVerification from "@/app/myPages/verificationPage";
import { Text, View } from "react-native";
import App from "./myPages/copy";
import HomePage from "./myPages/homePage";

export default function Index() {
  return(
    <View>
      <MobileNumber/>
      {/* <App/> */}
      {/* <HomePage/> */}
    </View>
  );
}
//<MobileNumber/>
//<SignUpPage/>
//<OtpVerification/>