
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    const colors = {
      white: "#ffffff",
      black: "#000000",
      "red-50": "#ffebee",
      "red-100": "#ffcdd2",
      "red-200": "#ef9a9a",
      "red-300": "#e57373",
      "red-400": "#ef5350",
      "red-500": "#f44336",
      "red-600": "#e53935",
      "red-700": "#d32f2f",
      "red-800": "#c62828",
      "red-900": "#b71c1c",
      "red-a100": "#ff8a80",
      "red-a200": "#ff5252",
      "red-a400": "#ff1744",
      "red-a700": "#d50000",
      "pink-50": "#fce4ec",
      "pink-100": "#f8bbd0",
      "pink-200": "#f48fb1",
      "pink-300": "#f06292",
      "pink-400": "#ec407a",
      "pink-500": "#e91e63",
      "pink-600": "#d81b60",
      "pink-700": "#c2185b",
      "pink-800": "#ad1457",
      "pink-900": "#880e4f",
      "pink-a100": "#ff80ab",
      "pink-a200": "#ff4081",
      "pink-a400": "#f50057",
      "pink-a700": "#c51162",
      "purple-50": "#f3e5f5",
      "purple-100": "#e1bee7",
      "purple-200": "#ce93d8",
      "purple-300": "#ba68c8",
      "purple-400": "#ab47bc",
      "purple-500": "#9c27b0",
      "purple-600": "#8e24aa",
      "purple-700": "#7b1fa2",
      "purple-800": "#6a1b9a",
      "purple-900": "#4a148c",
      "purple-a100": "#ea80fc",
      "purple-a200": "#e040fb",
      "purple-a400": "#d500f9",
      "purple-a700": "#aa00ff",
      "deep-purple-50": "#ede7f6",
      "deep-purple-100": "#d1c4e9",
      "deep-purple-200": "#b39ddb",
      "deep-purple-300": "#9575cd",
      "deep-purple-400": "#7e57c2",
      "deep-purple-500": "#673ab7",
      "deep-purple-600": "#5e35b1",
      "deep-purple-700": "#512da8",
      "deep-purple-800": "#4527a0",
      "deep-purple-900": "#311b92",
      "deep-purple-a100": "#b388ff",
      "deep-purple-a200": "#7c4dff",
      "deep-purple-a400": "#651fff",
      "deep-purple-a700": "#6200ea",
      "indigo-50": "#e8eaf6",
      "indigo-100": "#c5cae9",
      "indigo-200": "#9fa8da",
      "indigo-300": "#7986cb",
      "indigo-400": "#5c6bc0",
      "indigo-500": "#3f51b5",
      "indigo-600": "#3949ab",
      "indigo-700": "#303f9f",
      "indigo-800": "#283593",
      "indigo-900": "#1a237e",
      "indigo-a100": "#8c9eff",
      "indigo-a200": "#536dfe",
      "indigo-a400": "#3d5afe",
      "indigo-a700": "#304ffe",
      "blue-50": "#e3f2fd",
      "blue-100": "#bbdefb",
      "blue-200": "#90caf9",
      "blue-300": "#64b5f6",
      "blue-400": "#42a5f5",
      "blue-500": "#2196f3",
      "blue-600": "#1e88e5",
      "blue-700": "#1976d2",
      "blue-800": "#1565c0",
      "blue-900": "#0d47a1",
      "blue-a100": "#82b1ff",
      "blue-a200": "#448aff",
      "blue-a400": "#2979ff",
      "blue-a700": "#2962ff",
      "light-blue-50": "#e1f5fe",
      "light-blue-100": "#b3e5fc",
      "light-blue-200": "#81d4fa",
      "light-blue-300": "#4fc3f7",
      "light-blue-400": "#29b6f6",
      "light-blue-500": "#03a9f4",
      "light-blue-600": "#039be5",
      "light-blue-700": "#0288d1",
      "light-blue-800": "#0277bd",
      "light-blue-900": "#01579b",
      "light-blue-a100": "#80d8ff",
      "light-blue-a200": "#40c4ff",
      "light-blue-a400": "#00b0ff",
      "light-blue-a700": "#0091ea",
      "cyan-50": "#e0f7fa",
      "cyan-100": "#b2ebf2",
      "cyan-200": "#80deea",
      "cyan-300": "#4dd0e1",
      "cyan-400": "#26c6da",
      "cyan-500": "#00bcd4",
      "cyan-600": "#00acc1",
      "cyan-700": "#0097a7",
      "cyan-800": "#00838f",
      "cyan-900": "#006064",
      "cyan-a100": "#84ffff",
      "cyan-a200": "#18ffff",
      "cyan-a400": "#00e5ff",
      "cyan-a700": "#00b8d4",
      "teal-50": "#e0f2f1",
      "teal-100": "#b2dfdb",
      "teal-200": "#80cbc4",
      "teal-300": "#4db6ac",
      "teal-400": "#26a69a",
      "teal-500": "#009688",
      "teal-600": "#00897b",
      "teal-700": "#00796b",
      "teal-800": "#00695c",
      "teal-900": "#004d40",
      "teal-a100": "#a7ffeb",
      "teal-a200": "#64ffda",
      "teal-a400": "#1de9b6",
      "teal-a700": "#00bfa5",
      "green-50": "#e8f5e9",
      "green-100": "#c8e6c9",
      "green-200": "#a5d6a7",
      "green-300": "#81c784",
      "green-400": "#66bb6a",
      "green-500": "#4caf50",
      "green-600": "#43a047",
      "green-700": "#388e3c",
      "green-800": "#2e7d32",
      "green-900": "#1b5e20",
      "green-a100": "#b9f6ca",
      "green-a200": "#69f0ae",
      "green-a400": "#00e676",
      "green-a700": "#00c853",
      "light-green-50": "#f1f8e9",
      "light-green-100": "#dcedc8",
      "light-green-200": "#c5e1a5",
      "light-green-300": "#aed581",
      "light-green-400": "#9ccc65",
      "light-green-500": "#8bc34a",
      "light-green-600": "#7cb342",
      "light-green-700": "#689f38",
      "light-green-800": "#558b2f",
      "light-green-900": "#33691e",
      "light-green-a100": "#ccff90",
      "light-green-a200": "#b2ff59",
      "light-green-a400": "#76ff03",
      "light-green-a700": "#64dd17",
      "lime-50": "#f9fbe7",
      "lime-100": "#f0f4c3",
      "lime-200": "#e6ee9c",
      "lime-300": "#dce775",
      "lime-400": "#d4e157",
      "lime-500": "#cddc39",
      "lime-600": "#c0ca33",
      "lime-700": "#afb42b",
      "lime-800": "#9e9d24",
      "lime-900": "#827717",
      "lime-a100": "#f4ff81",
      "lime-a200": "#eeff41",
      "lime-a400": "#c6ff00",
      "lime-a700": "#aeea00",
      "yellow-50": "#fffde7",
      "yellow-100": "#fff9c4",
      "yellow-200": "#fff59d",
      "yellow-300": "#fff176",
      "yellow-400": "#ffee58",
      "yellow-500": "#ffeb3b",
      "yellow-600": "#fdd835",
      "yellow-700": "#fbc02d",
      "yellow-800": "#f9a825",
      "yellow-900": "#f57f17",
      "yellow-a100": "#ffff8d",
      "yellow-a200": "#ffff00",
      "yellow-a400": "#ffea00",
      "yellow-a700": "#ffd600",
      "amber-50": "#fff8e1",
      "amber-100": "#ffecb3",
      "amber-200": "#ffe082",
      "amber-300": "#ffd54f",
      "amber-400": "#ffca28",
      "amber-500": "#ffc107",
      "amber-600": "#ffb300",
      "amber-700": "#ffa000",
      "amber-800": "#ff8f00",
      "amber-900": "#ff6f00",
      "amber-a100": "#ffe57f",
      "amber-a200": "#ffd740",
      "amber-a400": "#ffc400",
      "amber-a700": "#ffab00",
      "orange-50": "#fff3e0",
      "orange-100": "#ffe0b2",
      "orange-200": "#ffcc80",
      "orange-300": "#ffb74d",
      "orange-400": "#ffa726",
      "orange-500": "#ff9800",
      "orange-600": "#fb8c00",
      "orange-700": "#f57c00",
      "orange-800": "#ef6c00",
      "orange-900": "#e65100",
      "orange-a100": "#ffd180",
      "orange-a200": "#ffab40",
      "orange-a400": "#ff9100",
      "orange-a700": "#ff6d00",
      "deep-orange-50": "#fbe9e7",
      "deep-orange-100": "#ffccbc",
      "deep-orange-200": "#ffab91",
      "deep-orange-300": "#ff8a65",
      "deep-orange-400": "#ff7043",
      "deep-orange-500": "#ff5722",
      "deep-orange-600": "#f4511e",
      "deep-orange-700": "#e64a19",
      "deep-orange-800": "#d84315",
      "deep-orange-900": "#bf360c",
      "deep-orange-a100": "#ff9e80",
      "deep-orange-a200": "#ff6e40",
      "deep-orange-a400": "#ff3d00",
      "deep-orange-a700": "#dd2c00",
      "brown-50": "#efebe9",
      "brown-100": "#d7ccc8",
      "brown-200": "#bcaaa4",
      "brown-300": "#a1887f",
      "brown-400": "#8d6e63",
      "brown-500": "#795548",
      "brown-600": "#6d4c41",
      "brown-700": "#5d4037",
      "brown-800": "#4e342e",
      "brown-900": "#3e2723",
      "brown-a100": "#d7ccc8",
      "brown-a200": "#bcaaa4",
      "brown-a400": "#8d6e63",
      "brown-a700": "#5d4037",
      "grey-50": "#fafafa",
      "grey-100": "#f5f5f5",
      "grey-200": "#eeeeee",
      "grey-300": "#e0e0e0",
      "grey-400": "#bdbdbd",
      "grey-500": "#9e9e9e",
      "grey-600": "#757575",
      "grey-700": "#616161",
      "grey-800": "#424242",
      "grey-900": "#212121",
      "grey-1000": "#000000",
      "grey-a100": "#ffffff",
      "grey-a200": "#eeeeee",
      "grey-a400": "#bdbdbd",
      "grey-a700": "#616161",
      "blue-grey-50": "#eceff1",
      "blue-grey-100": "#cfd8dc",
      "blue-grey-200": "#b0bec5",
      "blue-grey-300": "#90a4ae",
      "blue-grey-400": "#78909c",
      "blue-grey-500": "#607d8b",
      "blue-grey-600": "#546e7a",
      "blue-grey-700": "#455a64",
      "blue-grey-800": "#37474f",
      "blue-grey-900": "#263238",
      "blue-grey-a100": "#cfd8dc",
      "blue-grey-a200": "#b0bec5",
      "blue-grey-a400": "#78909c",
      "blue-grey-a700": "#455a64",
    };
    colors.light = colors["grey-100"];
    colors.dark = colors["grey-900"];
    colors.default = colors["grey-900"];
    colors.primary = colors["blue-900"];
    colors.secondary = colors["pink-a700"];
    colors.info = colors["light-blue-a700"];
    colors.success = colors["green-700"];
    colors.warning = colors["amber-700"];
    colors.danger = colors["red-700"];
    const camelCasedColors = {};
    for (const i in colors) {
      camelCasedColors[_.camelCase(i)] = colors[i];
    }
    const config = {
      name: "Peak",
      colors: camelCasedColors,
    };
    if ($("html").hasClass("loading")) {
      const loaderTime = 1;
      let loaderColor = colors.primary;
      const htmlClass = $("html")
        .attr("class")
        .toString();
      if (htmlClass.match(/loading-secondary/gi)) {
        loaderColor = colors.secondary;
      } else if (htmlClass.match(/loading\-info/gi)) {
        loaderColor = colors.info;
      } else if (htmlClass.match(/loading\-success/gi)) {
        loaderColor = colors.success;
      } else if (htmlClass.match(/loading\-warning/gi)) {
        loaderColor = colors.warning;
      } else if (htmlClass.match(/loading\-danger/gi)) {
        loaderColor = colors.danger;
      } else {
        loaderColor = colors.primary;
      }
      $("#fakeloader").fakeLoader({
        timeToHide: loaderTime,
        zIndex: "99999", // Default zIndex
        spinner: "spinner1", // Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor: loaderColor,
      });
      setTimeout(function() {
        $("html").removeClass("loading");
      }, loaderTime);
    }
    $("body").bootstrapMaterialDesign({
      text: {
        selector: [
          `input:not([type=range]):not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])`,
        ],
      },
    });
    if ($.localStorage.isEmpty("config") || !$.localStorage.get("config")) {
      $.removeAllStorages();
      $.localStorage.set("config", config);
    }
    Mousetrap.bind("ctrl+1", function() {
      $.removeAllStorages();
    });
    Mousetrap.bind("ctrl+2", function() {
      const layout = $("body").data("layout");
      $("body").toggleClass("layout-collapsed");
      if (
        layout === "default-sidebar-2" &&
        $("body").hasClass("layout-collapsed")
      ) {
        $(".left-sidebar-backdrop").toggleClass("fade in");
      } else if (
        layout === "top-navigation-1" &&
        $("body").hasClass("layout-collapsed")
      ) {
        $(".left-sidebar-backdrop").toggleClass("fade in");
      } else if (
        layout === "top-navigation-2" &&
        $("body").hasClass("layout-collapsed")
      ) {
        $(".left-sidebar-backdrop").toggleClass("fade in");
      } else if (
        layout === "fixed-navbar-1" &&
        $("body").hasClass("layout-collapsed")
      ) {
        $(".left-sidebar-backdrop").toggleClass("fade in");
      } else {
        $(".left-sidebar-backdrop").removeClass("fade");
        $(".left-sidebar-backdrop").removeClass("in");
      }
    });
    Mousetrap.bind("ctrl+3", function() {
      $(".right-sidebar-outer").toggleClass("show-from-right");
      const layout = $("body").data("layout");
      if ($(".right-sidebar-outer").hasClass("show-from-right")) {
        $(".right-sidebar-backdrop").toggleClass("fade in");
      } else {
        $(".right-sidebar-backdrop").removeClass("fade");
        $(".right-sidebar-backdrop").removeClass("in");
      }
    });
    Mousetrap.bind("ctrl+4", function() {
      $(document).fullScreen(true);
    });
    Mousetrap.bind("ctrl+5", function() {
      $(".top-search").toggleClass("show-from-top");
    });
  });
})();
