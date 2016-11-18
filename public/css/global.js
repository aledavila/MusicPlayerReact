import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "*:before": {
        "boxSizing": "border-box"
    },
    "*:after": {
        "boxSizing": "border-box"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'Exo 2', sans-serif"
    },
    "scotch_music": {
        "position": "relative"
    },
    "search div": {
        "width": "100%"
    },
    "search input": {
        "width": "100%",
        "border": "none",
        "borderBottom": "2px solid rgb(243, 139, 114)",
        "outline": "none",
        "background": "rgba(255, 255, 255, 0.8)",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "details h3": {
        "textAlign": "center",
        "paddingTop": 50,
        "paddingRight": 10,
        "paddingBottom": 50,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "white"
    },
    "player": {
        "textAlign": "center",
        "marginTop": 60
    },
    "player div": {
        "display": "inline-block",
        "marginLeft": 10,
        "marginRight": 10
    },
    "player player__backward button": {
        "background": "transparent",
        "border": "1px solid rgb(243, 139, 114)",
        "color": "rgb(243, 139, 114)",
        "width": 75,
        "height": 75,
        "borderRadius": "100%",
        "fontSize": 35,
        "outline": "none",
        "borderLeft": "none"
    },
    "player player__forward button": {
        "background": "transparent",
        "border": "1px solid rgb(243, 139, 114)",
        "color": "rgb(243, 139, 114)",
        "width": 75,
        "height": 75,
        "borderRadius": "100%",
        "fontSize": 35,
        "outline": "none",
        "borderRight": "none"
    },
    "player player__main button:hover": {
        "color": "rgba(243, 139, 114, 0.7)",
        "border": "1px solid rgba(243, 139, 114, 0.7)"
    },
    "player player__backward button:hover": {
        "color": "rgba(243, 139, 114, 0.7)",
        "border": "1px solid rgba(243, 139, 114, 0.7)"
    },
    "player player__forward button:hover": {
        "color": "rgba(243, 139, 114, 0.7)",
        "border": "1px solid rgba(243, 139, 114, 0.7)"
    },
    "player player__main": {
        "border": "1px solid rgb(243, 139, 114)"
    },
    "player player__main button": {
        "color": "rgb(243, 139, 114)",
        "background": "transparent",
        "width": 75,
        "height": 75,
        "border": "none",
        "fontSize": 35,
        "outline": "none"
    },
    "progress": {
        "textAlign": "center",
        "marginTop": 100,
        "color": "white"
    },
    "progress progress[value]": {
        "WebkitAppearance": "none",
        "appearance": "none",
        "width": 390,
        "height": 20,
        "marginLeft": 4,
        "marginRight": 4
    },
    "progress progress[value]::-webkit-progress-bar": {
        "backgroundColor": "#eee",
        "borderRadius": 2,
        "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.25) inset"
    },
    "progress progress[value]::-webkit-progress-value": {
        "backgroundColor": "rgb(243, 139, 114)",
        "borderRadius": 2,
        "backgroundSize": "35px 20px, 100% 100%, 100% 100%"
    },
    "footer": {
        "color": "white",
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "background": "#524C4C"
    },
    "footer p": {
        "textAlign": "center"
    },
    "footer logo": {
        "height": 25,
        "width": "auto"
    },
    "footer soundcloud": {
        "height": 25,
        "width": "auto"
    }
});