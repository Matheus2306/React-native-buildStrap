import { StyleSheet } from "react-native";
import { useTheme } from "..";

export const createStyles = (customStyles) => {
  const {theme} = useTheme()

  const t = {
    background: theme.background ?? "#ffffff",
    text: theme.text ?? "#212529",
    primary: theme.primary ?? "#007bff",
    secondary: theme.secondary ?? "#6c757d",
    success: theme.success ?? "#28a745",
    danger: theme.danger ?? "#dc3545",
    warning: theme.warning ?? "#ffc107",
    info: theme.info ?? "#17a2b8",
    light: theme.light ?? "#f8f9fa",
    dark: theme.dark ?? "#343a40",
    white: theme.white ?? "#ffffff",
    muted: theme.muted ?? "#6c757d",
    transparent: "transparent",
    ...theme,
  };

  const base = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    // display
    dFlex: { display: "flex" },
    dNone: { display: "none" },

    // flex direction / wrap
    flexRow: { flexDirection: "row" },
    flexColumn: { flexDirection: "column" },
    flexWrap: { flexWrap: "wrap" },

    // justify-content
    justifyContentStart: { justifyContent: "flex-start" },
    justifyContentCenter: { justifyContent: "center" },
    justifyContentEnd: { justifyContent: "flex-end" },
    justifyContentBetween: { justifyContent: "space-between" },
    justifyContentAround: { justifyContent: "space-around" },
    justifyContentEvenly: { justifyContent: "space-evenly" },

    // align-items
    alignItemsStart: { alignItems: "flex-start" },
    alignItemsCenter: { alignItems: "center" },
    alignItemsEnd: { alignItems: "flex-end" },
    alignItemsStretch: { alignItems: "stretch" },

    //borderRadius
    rounded: { borderRadius: 10 },
    roundedCircle: { borderRadius: 9999 },
    rounded1: { borderRadius: 5 },
    rounded2: { borderRadius: 8 },
    rounded3: { borderRadius: 10 },
    rounded4: { borderRadius: 15 },

    // text align
    textLeft: { textAlign: "left" },
    textCenter: { textAlign: "center" },
    textRight: { textAlign: "right" },

    //text size
    fs1: { fontSize: 30 },
    fs2: { fontSize: 24 },
    fs3: { fontSize: 18 },
    fs4: { fontSize: 14 },
    fs5: { fontSize: 12 },
    fs6: { fontSize: 10 },

    // text colors
    textPrimary: { color: t.primary },
    textSecondary: { color: t.secondary },
    textSuccess: { color: t.success },
    textDanger: { color: t.danger },
    textWarning: { color: t.warning },
    textInfo: { color: t.info },
    textLight: { color: t.light },
    textDark: { color: t.dark },
    textMuted: { color: t.muted },

    // backgrounds
    bgPrimary: { backgroundColor: t.primary },
    bgSecondary: { backgroundColor: t.secondary },
    bgSuccess: { backgroundColor: t.success },
    bgDanger: { backgroundColor: t.danger },
    bgWarning: { backgroundColor: t.warning },
    bgInfo: { backgroundColor: t.info },
    bgLight: { backgroundColor: t.light },
    bgDark: { backgroundColor: t.dark },
    bgWhite: { backgroundColor: t.white },
    bgTransparent: { backgroundColor: t.transparent },

    // border radius / shadow
    rounded: { borderRadius: 4 },
    roundedCircle: { borderRadius: 9999 },
    roundedNone: { borderRadius: 0 },
    shadow: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },

    // simple grid
    row: { flexDirection: "row", flexWrap: "wrap" },
    col: { flex: 1 },
    colAuto: { width: "auto" },

    // buttons
    btn: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    btnPrimary: { backgroundColor: t.primary },
    btnSecondary: { backgroundColor: t.secondary },
    btnSuccess: { backgroundColor: t.success },
    btnDanger: { backgroundColor: t.danger },
    btnOutlinePrimary: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: t.primary,
    },
    btnBlock: { alignSelf: "stretch" },
    btnSmall: { paddingVertical: 6, paddingHorizontal: 8 },

//======================== spacing ========================//

    //padding
    p1: { padding: 10 },
    p2: { padding: 15 },
    p3: { padding: 20 },
    p4: { padding: 25 },
    p5: { padding: 30 },
    //paddingTop
    pt1: { paddingTop: 10 },
    pt2: { paddingTop: 15 },
    pt3: { paddingTop: 20 },
    pt4: { paddingTop: 25 },
    pt5: { paddingTop: 30 },
    //paddingHorizontal
    px1: { paddingHorizontal: 10 },
    px2: { paddingHorizontal: 15 },
    px3: { paddingHorizontal: 20 },
    px4: { paddingHorizontal: 25 },
    px5: { paddingHorizontal: 30 },
    //paddingVertical
    py1: { paddingVertical: 10 },
    py2: { paddingVertical: 15 },
    py3: { paddingVertical: 20 },
    py4: { paddingVertical: 25 },
    py5: { paddingVertical: 30 },
    //paddingbptton
    pb1: {paddingBottom: 10},
    pb2: {paddingBottom: 15},
    pb3: {paddingBottom: 20},
    pb4: {paddingBottom: 25},
    pb5: {paddingBottom: 30},

    //margin
    m1: { margin: 10 },
    m2: { margin: 15 },
    m3: { margin: 20 },
    m4: { margin: 25 },
    m5: { margin: 30 },
    //marginTop
    mt1: { marginTop: 10 },
    mt2: { marginTop: 15 },
    mt3: { marginTop: 20 },
    mt4: { marginTop: 25 },
    mt5: { marginTop: 30 },
    //marginHorizontal
    mx1: { marginHorizontal: 10 },
    mx2: { marginHorizontal: 15 },
    mx3: { marginHorizontal: 20 },
    mx4: { marginHorizontal: 25 },
    mx5: { marginHorizontal: 30 },
    //marginVertical
    my1: { marginVertical: 10 },
    my2: { marginVertical: 15 },
    my3: { marginVertical: 20 },
    my4: { marginVertical: 25 },
    my5: { marginVertical: 30 },
    //marginBottom
    mb1: {marginBottom: 10},
    mb2: {marginBottom: 15},
    mb3: {marginBottom: 20},
    mb4: {marginBottom: 25},
    mb5: {marginBottom: 30},

    gap1: { gap: 10 },
    gap2: { gap: 15 },
    gap3: { gap: 20 },
    gap4: { gap: 25 },
    gap5: { gap: 30 },
    //========================= toggle class ====================//
    textToggle:{
      color: theme.text,
    },
    bgToggle:{
      backgroundColor: theme.background,
    },
    btnToggle:{
      backgroundColor: theme.btn,
    },
    borderToggle: {
      borderColor: theme.border,
    },
    iconToggle: {
      fill: theme.icon,
    },
    linkToggle: {
      color: theme.link,
    },
    headerToggle: {
      backgroundColor: theme.headerBackground,
      color: theme.headerText,
    },
    footerToggle: {
      backgroundColor: theme.footerBackground,
      color: theme.footerText,
    },
    cardToggle: {
      backgroundColor: theme.cardBackground,
      color: theme.cardText,
    },
   
    
  };

    // Faz merge dos estilos base + estilos customizados do usuário
  const mergedStyles = {
    ...base,
    ...(customStyles ? Object.entries(customStyles).reduce((acc, [key, style]) => {
      acc[key] = { ...base[key], ...style };
      return acc;
    }, {}) : {}),
  };

  return StyleSheet.create(mergedStyles);
};
