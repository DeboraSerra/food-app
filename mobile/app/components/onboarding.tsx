import { ChevronRight } from "lucide-react-native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const onBoardingSteps = [
  {
    image: require("../../assets/images/order.png"),
    icon: require("../../assets/images/Transfer-icon.png"),
    title: "Order for Food",
    desc: "Easily explore a wide variety of meals and place your order in just a few clicks.",
  },
  {
    image: require("../../assets/images/payment.png"),
    icon: require("../../assets/images/Card-icon.png"),
    title: "Easy Payment",
    desc: "Pay with ease and confidence using our secure payment methods",
  },
  {
    image: require("../../assets/images/order.png"),
    icon: require("../../assets/images/Transfer-icon.png"),
    title: "Fast Delivery",
    desc: "Get your food delivered quickly and fresh, straight to your door",
  },
];

const Onboarding = ({
  setShowOnboarding,
}: {
  setShowOnboarding: (val: boolean) => void;
}) => {
  const [step, setStep] = useState(0);
  const currStep = onBoardingSteps[step];

  return (
    <View style={s.view}>
      <TouchableOpacity onPress={() => setShowOnboarding(false)} style={s.skip}>
        <Text style={s.skipText}>Skip</Text>
        <ChevronRight size={20} color='#E58480' />
      </TouchableOpacity>
      <Image source={currStep.image} />
      <View style={s.content}>
        <Image source={currStep.icon} />
        <Text style={s.contentTitle}>{currStep.title}</Text>
        <Text style={s.contentDesc}>{currStep.desc}</Text>
        <View style={s.steps}>
          <View
            style={step === 0 ? { ...s.step, ...s.activeStep } : s.step}
          ></View>
          <View
            style={step === 1 ? { ...s.step, ...s.activeStep } : s.step}
          ></View>
          <View
            style={step === 2 ? { ...s.step, ...s.activeStep } : s.step}
          ></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            step < onBoardingSteps.length - 1
              ? setStep(step + 1)
              : setShowOnboarding(false);
          }}
          style={s.button}
        >
          <Text style={s.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
    height: 100,
  },
  skip: {
    backgroundColor: "#F8EDD1",
    borderRadius: 30,
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
    alignSelf: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  skipText: {
    fontSize: 14,
    fontFamily: "semibold",
    color: "#E58480",
  },
  content: {
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    marginTop: -50,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingBottom: 40,
    gap: 8,
  },
  contentTitle: {
    color: "#E58480",
    fontSize: 24,
    fontFamily: "semibold",
    textAlign: "center",
  },
  contentDesc: {
    color: "#391713",
    fontSize: 14,
    fontFamily: "medium",
    textAlign: "center",
  },
  steps: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    marginTop: 30,
  },
  step: {
    backgroundColor: "#F8EDD1",
    width: 20,
    height: 4,
    borderRadius: 12,
  },
  activeStep: {
    backgroundColor: "#E58480",
  },
  button: {
    backgroundColor: "#E58480",
    padding: 8,
    borderRadius: 30,
    width: 260,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "regular",
  },
});

export default Onboarding;
