import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-buildstrap";
import { createStyles } from "react-native-buildstrap/hook/CreateStyles";

const { width } = Dimensions.get("window");

export const Carousel = ({
  data = [],
  autoPlay,
  interval,
  showIndicators = true,
  TextToggle
}) => {
  const { theme } = useTheme();
  const styles = createStyles();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // calcula um delay válido; se interval não for número válido/positivo, usa 3000
  const delay = (typeof interval === "number" && Number.isFinite(interval) && interval > 0) ? interval : 3000;

  // autoplay estável (não recria o intervalo a cada incremento)
  useEffect(() => {
    if (!autoPlay || data.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % data.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [autoPlay, data.length, delay]);

  const renderItem = ({ item }) => (
    <View
      style={[styles.alignItemsCenter, styles.justifyContentCenter, { width }]}
    >
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={[
            styles.rounded4,
            styles.shadow,
            { width: width * 0.85, height: 200, resizeMode: "cover" },
          ]}
        />
      )}
      {item.title && (
        <Text
          style={[
            styles.fs3,
            styles.mt2,
            styles.textToggle,
            { fontWeight: "bold" },
          ]}
        >
          {item.title}
        </Text>
      )}
      {item.description && (
        <Text
          style={[
            styles.fs4,
            TextToggle ? styles.textToggle : styles.textMuted,
            styles.textCenter,
            styles.mt1,
            { maxWidth: "85%" },
          ]}
        >
          {item.description}
        </Text>
      )}
    </View>
  );

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={[ styles.mt5, styles.bgToggle, { height: 300 }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(_, i) => i.toString()}
        onScroll={handleScroll}
        ref={flatListRef}
        style={{ flexGrow: 0 }}
      />

      {/* indicadores */}
      {showIndicators && (
        <View
          style={[
            styles.flexRow,
            styles.justifyContentCenter,
            styles.mt2,
            styles.gap1,
          ]}
        >
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.roundedCircle,
                {
                  width: 10,
                  height: 10,
                  backgroundColor:
                    currentIndex === index ? theme.primary : theme.muted,
                },
              ]}
              onPress={() => {
                flatListRef.current?.scrollToIndex({ index, animated: true });
                setCurrentIndex(index);
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};
