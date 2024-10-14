import React, { useRef, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";



import images from "@/constants/images"; // Import your images here

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Trusted by millions of people, part of one part",
    image: images.shield,
    buttonText: "Next",
  },
  {
    id: "2",
    title: "Spend money, and track your expense",
    image: images.clip,
    buttonText: "Sign-in",
  },
];

const Onboarding = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
    else {

    }
  };

  const renderItem = ({ item }: any) => (
    <View style={{ width, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Image source={item.image} style={{ width: 200, height: 200 }} resizeMode="contain" />
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center", marginTop: 60, alignContent: "space-between" }}>
        {item.title}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#00ADEF",
          padding: 15,
          width: "80%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20
        }}
        onPress={handleNext}
      >
        <Text style={{ color: "white", fontSize: 16 }}>{item.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
        <FlatList
          data={slides}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false} // Disable manual scroll to control it with the button
          ref={flatListRef}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Onboarding;

