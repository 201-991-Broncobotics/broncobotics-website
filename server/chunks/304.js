"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 6571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/yt_icon.png
/* harmony default export */ const yt_icon = ({"src":"/_next/static/media/yt_icon.f1f1068c.png","height":518,"width":518,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUpKSkgICAmJiZEREQtLS1aWlpzc3M0NDT7+/ve3t7Nzc2dwDDLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVQImSWKSQ7AQAzCDGTW/z94lPaAsDBkFdQKsgVfMiUAZd/hH87oSZn9wFjuqtZQDxYDAIuAIpOVAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/slack.png
/* harmony default export */ const slack = ({"src":"/_next/static/media/slack.d3750360.png","height":1600,"width":1600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAAABMaXEAAAAAAAAAAAAAAAAAAADXKPiVAAAAB3RSTlOKAKvczplwecAMZwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUCJkVy8EBwEAIwzCbBPYf+Vr9hc4yikKjTELDQHsHy8JdC0NKMmjKX3TYrz8S2ACFryD/WAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer.tsx





const Footer = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-50  p-4 sm:p-6 ".concat(props.currentPage === "Footer" ? "-mt-10" : ""),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "justify-between sm:flex sm:items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "inline whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/logo.svg",
                                alt: "BroncoBotics logo",
                                className: "mr-3 inline h-12 justify-between whitespace-nowrap"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "inline whitespace-nowrap text-2xl font-semibold",
                                style: {
                                    fontFamily: "DM Serif Text"
                                },
                                children: "BroncoBotics"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-4 flex space-x-6 sm:mt-0 sm:justify-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://www.youtube.com/channel/UC4-iVzitzOrSvx6bt9QqJWA/videos",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "h-5 w-5 hover:opacity-60 ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: yt_icon,
                                    alt: "youtube logo",
                                    className: "rounded-lg",
                                    layout: "intrinsic",
                                    objectFit: "fill"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://brophyrobotics.slack.com",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "h-5 w-5 hover:opacity-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: slack,
                                    alt: "slack logo",
                                    className: "object-cover ",
                                    layout: "intrinsic"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://www.instagram.com/broncobotics/?hl=en",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:opacity-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                        clipRule: "evenodd"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://twitter.com/broncobotics?lang=en",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:opacity-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://github.com/201-991-Broncobotics",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "hover:opacity-60",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "h-5 w-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                        clipRule: "evenodd"
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/header-bg-opacity.png
/* harmony default export */ const header_bg_opacity = ({"src":"/_next/static/media/header-bg-opacity.96d77c0d.png","height":768,"width":2880,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEVkX2NIQUVKRUlRTVFRSE2uMSNDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAF0lEQVQImWNgYGBiYWBhAAFGRkYmBgYAAK0AEJndlggAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar.tsx





const Navbar = (props)=>{
    let { 0: menuButton , 1: setMenuButton  } = (0,external_react_.useState)(true);
    let a = [
        {
            url: "/about",
            name: "About Broncobotics",
            setMenuButton: setMenuButton,
            currentPage: props.currentPage
        },
        {
            url: "/members",
            name: "Our Members",
            setMenuButton: setMenuButton,
            currentPage: props.currentPage
        },
        {
            url: "/robots",
            name: "Our Robots",
            setMenuButton: setMenuButton,
            currentPage: props.currentPage
        },
        {
            url: "/socials",
            name: "Social Media",
            setMenuButton: setMenuButton,
            currentPage: props.currentPage
        },
        {
            url: "/brophy",
            name: "About Our School",
            setMenuButton: setMenuButton,
            currentPage: props.currentPage
        }, 
    ];
    let homeClass = props.currentPage === "home" ? "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(" text-red-500 hover:text-[#d63838] ") : "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(" hover:text-gray-300 text-white");
    let menuSvg = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "h-6 w-6",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                    clipRule: "evenodd"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "hidden h-6 w-6",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "text-red-500 ",
        style: {
            backgroundImage: `url(\"${header_bg_opacity.src}\")`,
            height: "26rem",
            width: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative"
        },
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-inherit px-1 py-2.5 sm:px-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto flex flex-wrap items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center",
                                onClick: ()=>{
                                    setMenuButton(false);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/logo.svg",
                                        className: "mr-3 h-6 sm:h-10",
                                        alt: "BroncoBotics Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: homeClass.concat(" text-2xl"),
                                        style: {
                                            fontFamily: "DM Serif Text"
                                        },
                                        children: "BroncoBotics"
                                    }),
                                    " "
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            "data-collapse-toggle": "mobile-menu",
                            type: "button",
                            className: "ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
                            "aria-controls": "mobile-menu-2",
                            "aria-expanded": "false",
                            onClick: ()=>{
                                setMenuButton(!menuButton);
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Open main menu"
                                }),
                                menuSvg
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " w-full md:block md:w-auto ".concat(menuButton ? " hidden" : " block"),
                            id: "mobile-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "relative left-[50%] mt-4 -mr-2 flex w-[50%] flex-col bg-gray-600/70 object-right text-right font-semibold md:left-0 md:mt-0 md:w-full md:flex-row md:space-x-4 md:bg-inherit md:text-sm md:font-medium ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {
                                        url: "/",
                                        home: true,
                                        name: "Home",
                                        setMenuButton: setMenuButton,
                                        currentPage: props.currentPage
                                    }),
                                    a.map((b, index)=>{
                                        return /*#__PURE__*/ (0,external_react_.createElement)(NavButton, {
                                            ...b,
                                            key: index
                                        });
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-inherit",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden text-center text-white md:block",
                        style: {
                            marginTop: "3rem",
                            fontFamily: "Martel",
                            fontSize: "7.5rem"
                        },
                        children: "BroncoBotics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center text-white md:hidden ".concat(menuButton ? " block" : " hidden"),
                        style: {
                            fontFamily: "Martel",
                            marginTop: "3rem",
                            maxWidth: "100%",
                            fontSize: "3.5rem"
                        },
                        children: "BroncoBotics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden text-center text-white md:block ",
                        style: {
                            marginTop: "-.75rem",
                            fontFamily: "Martel",
                            fontSize: "3rem"
                        },
                        children: "Together to Create"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center text-white md:hidden ".concat(menuButton ? " block" : " hidden"),
                        style: {
                            fontFamily: "Martel",
                            marginTop: "-.75rem",
                            maxWidth: "100%",
                            fontSize: "2.5rem"
                        },
                        children: "Together to Create"
                    })
                ]
            })
        ]
    });
};
let NavButton = (props)=>{
    let defaulClassName = " block py-2 pl-2 text-base  whitespace-nowrap ";
    let otherPage = " hover:text-gray-300 text-white ";
    let choosePage = " text-red-500 hover:text-[#d63838] ";
    let a;
    if (!props.home) {
        a = props.currentPage === props.url.substring(1) ? choosePage + defaulClassName : defaulClassName + otherPage;
    } else {
        a = props.currentPage === "home" ? choosePage + defaulClassName + " md:hidden" : defaulClassName + otherPage + " md:hidden";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: props.url,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: a,
                style: {
                    fontFamily: "DM Serif Text"
                },
                onClick: ()=>{
                    props.setMenuButton(true);
                },
                children: props.name
            })
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Header.tsx



function Header(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "BroncoBotics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Brophy Robotics BroncoBotics FTC team 201 FRC team 991"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                currentPage: props.currentPage
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;