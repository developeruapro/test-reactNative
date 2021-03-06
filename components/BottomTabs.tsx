import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBottomTabs {
    state: any;
    descriptors: any;
    navigation: any;
}

export const BottomTabs = ({ state, descriptors, navigation }:IBottomTabs) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const { bottom } = useSafeAreaInsets();
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    const getTab = (routeName: string) => {
      switch (routeName) {
        case "Medications":
          return <Icon name="search" />;
        case "TestButton":
          return <Icon name="home" />;
        default:
          return null;
      }
    };
  
    return (
      <View style={[styles.container, { paddingBottom: bottom }]}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key
            });
          };
  
          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabContainer}
            >
              {getTab(label)}
              <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderTopColor: "#bbbbbb",
      borderTopWidth: 1,
      paddingVertical: 10,
      backgroundColor: "white"
    },
    tabContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });
  