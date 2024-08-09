import MobileNumber from "@/app/myPages/mobileNumber";
import SignUpPage from "@/app/myPages/signUpPage";
import OtpVerification from "@/app/myPages/verificationPage";
import { Text, View } from "react-native";
// import App from "./myPages/copy";
import HomePage from "./tabs/homePage";
// import Copy from "./myPages/copy";
import ExplorePage from "./tabs/explorePage";


export default function Index() {
  return(
    <View>
      {/* <Copy/> */}
      {/* <ExplorePage/> */}
      <MobileNumber/>
      {/* <App/> */}
      {/* <HomePage/> */}
    </View>
  );
}
//<MobileNumber/>
//<SignUpPage/>
//<OtpVerification/>