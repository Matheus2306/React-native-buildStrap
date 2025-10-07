import { StyleSheet } from "react-native";

export const createStyles = (theme = {}) => {
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

    //padding
    p1: { padding: 16 },
    p2: { padding: 32 },
    p3: { padding: 48 },
    p4: { padding: 64 },
    p5: { padding: 80 },
    //paddingTop
    pt1: { paddingTop: 16 },
    pt2: { paddingTop: 32 },
    pt3: { paddingTop: 48 },
    pt4: { paddingTop: 64 },
    pt5: { paddingTop: 80 },
    //paddingHorizontal
    px1: { paddingHorizontal: 16 },
    px2: { paddingHorizontal: 32 },
    px3: { paddingHorizontal: 48 },
    px4: { paddingHorizontal: 64 },
    px5: { paddingHorizontal: 80 },
    //paddingVertical
    py1: { paddingVertical: 16 },
    py2: { paddingVertical: 32 },
    py3: { paddingVertical: 48 },
    py4: { paddingVertical: 64 },
    py5: { paddingVertical: 80 },
    //paddingbptton
    pb1: {paddingBottom: 16},
    pb2: {paddingBottom: 32},
    pb3: {paddingBottom: 48},
    pb4: {paddingBottom: 64},
    pb5: {paddingBottom: 80},

    //margin
    m1: { padding: 16 },
    m2: { padding: 32 },
    m3: { padding: 48 },
    m4: { padding: 64 },
    m5: { padding: 80 },
    //marginTop
    mt1: { marginTop: 16 },
    mt2: { marginTop: 32 },
    mt3: { marginTop: 48 },
    mt4: { marginTop: 64 },
    mt5: { marginTop: 80 },
    //marginHorizontal
    mx1: { marginHorizontal: 16 },
    mx2: { marginHorizontal: 32 },
    mx3: { marginHorizontal: 48 },
    mx4: { marginHorizontal: 64 },
    mx5: { marginHorizontal: 80 },
    //marginVertical
    my1: { marginVertical: 16 },
    my2: { marginVertical: 32 },
    my3: { marginVertical: 48 },
    my4: { marginVertical: 64 },
    my5: { marginVertical: 80 },
    //marginBottom
    mb1: {marginBottom: 16},
    mb2: {marginBottom: 32},
    mb3: {marginBottom: 48},
    mb4: {marginBottom: 64},
    mb5: {marginBottom: 80},

    //toggle class
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
    shadowToggle: {
      boxShadow: `0px 4px 6px ${theme.shadow}`,
    },
    hoverToggle: {
      ':hover': {
        backgroundColor: theme.hoverBackground,
        color: theme.hoverText,
      },
    },
    
  };

  return StyleSheet.create(base);
};
