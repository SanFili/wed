exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 6253:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__I5DID",
	"button_disabled": "Button_button_disabled__fmDyg"
};


/***/ }),

/***/ 8366:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Checkbox_wrapper__ZjA1p",
	"wrapper_disabled": "Checkbox_wrapper_disabled__fSTPp",
	"checkbox": "Checkbox_checkbox__Mm2vb",
	"checkbox_checked": "Checkbox_checkbox_checked__o5M1g",
	"checkbox_disabled": "Checkbox_checkbox_disabled__eqMfg",
	"checkbox__label": "Checkbox_checkbox__label__pTHxc",
	"checkbox__label_disabled": "Checkbox_checkbox__label_disabled__dvAEb"
};


/***/ }),

/***/ 1304:
/***/ ((module) => {

// Exports
module.exports = {
	"field": "Field_field__gewFT",
	"field__text": "Field_field__text__YQ5co",
	"field__text_disabled": "Field_field__text_disabled__uXLAh",
	"field__error": "Field_field__error__ohUVp",
	"field__error_visible": "Field_field__error_visible__NGrgB",
	"fieldEnter": "Field_fieldEnter__NUnvy",
	"fieldEnterActive": "Field_fieldEnterActive__MATkP",
	"fieldExit": "Field_fieldExit__v2TOg",
	"fieldExitActive": "Field_fieldExitActive__kWChU"
};


/***/ }),

/***/ 2448:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__EnlpF",
	"input_disabled": "Input_input_disabled__Y6urs"
};


/***/ }),

/***/ 9578:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__Ne8_J",
	"loader__text": "Loader_loader__text__JsrE2",
	"loader__spinner": "Loader_loader__spinner__inKLf",
	"rotation": "Loader_rotation__Ki7_B",
	"loader__dot": "Loader_loader__dot__GJBpg",
	"loader__dot_orange": "Loader_loader__dot_orange__7FCrd",
	"loader__dot_pink": "Loader_loader__dot_pink__3xPDv",
	"loader__dot_yellow": "Loader_loader__dot_yellow__VwKAJ"
};


/***/ }),

/***/ 9166:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "Modal_overlay__QeMdN",
	"overlayEnter": "Modal_overlayEnter__CYyCI",
	"overlayEnterActive": "Modal_overlayEnterActive__1ZOpA",
	"overlayExit": "Modal_overlayExit__wXTAb",
	"overlayExitActive": "Modal_overlayExitActive__JzWd3",
	"modal": "Modal_modal__i0TOf",
	"modal__text": "Modal_modal__text__KCUPe",
	"modalEnter": "Modal_modalEnter__Uodqz",
	"modalEnterActive": "Modal_modalEnterActive__oxtvH",
	"modalExit": "Modal_modalExit__fhnPa",
	"modalExitActive": "Modal_modalExitActive__qJNHY"
};


/***/ }),

/***/ 8718:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Radio_wrapper__Z3_br",
	"wrapper_button": "Radio_wrapper_button__kcJSt",
	"wrapper_button_checked": "Radio_wrapper_button_checked__QgdOG",
	"radio": "Radio_radio__O1uVC",
	"radio_checked": "Radio_radio_checked__Ln5wS",
	"radio_disabled": "Radio_radio_disabled__2VaRM",
	"radio__label": "Radio_radio__label__jzGOI",
	"radio__label_disabled": "Radio_radio__label_disabled__7P0_J"
};


/***/ }),

/***/ 3053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button_Button),
  "XZ": () => (/* reexport */ Checkbox_Checkbox),
  "gN": () => (/* reexport */ Field_Field),
  "II": () => (/* reexport */ Input_Input),
  "aN": () => (/* reexport */ Loader_Loader),
  "u_": () => (/* reexport */ Modal_Modal),
  "Y8": () => (/* reexport */ Radio_Radio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Button/Button.module.scss
var Button_module = __webpack_require__(6253);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/ui/Button/Button.tsx




const Button = ({ children , type ="button" , className , href , disabled , ...props })=>{
    const Element = href ? "a" : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Element, {
        type: type,
        className: external_classnames_default()((Button_module_default()).button, disabled && (Button_module_default()).button_disabled, className),
        href: href,
        disabled: disabled,
        ...props,
        children: children
    });
};
Button.displayName = "Button";
/* harmony default export */ const Button_Button = (/*#__PURE__*/(0,external_react_.memo)(Button));

// EXTERNAL MODULE: ./components/ui/Checkbox/Checkbox.module.scss
var Checkbox_module = __webpack_require__(8366);
var Checkbox_module_default = /*#__PURE__*/__webpack_require__.n(Checkbox_module);
;// CONCATENATED MODULE: ./components/ui/Checkbox/Checkbox.tsx




const Checkbox = ({ label , checked =false , className , onChange , disabled , name  })=>{
    const { 0: check , 1: setCheck  } = (0,external_react_.useState)(checked);
    const handleChangeCheckbox = ()=>{
        setCheck((prev)=>!prev
        );
    };
    (0,external_react_.useEffect)(()=>{
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name,
            value: check
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        check
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            className: external_classnames_default()((Checkbox_module_default()).wrapper, disabled && (Checkbox_module_default()).wrapper_disabled, className),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    checked: check,
                    onChange: handleChangeCheckbox,
                    className: external_classnames_default()((Checkbox_module_default()).checkbox, disabled && (Checkbox_module_default()).checkbox_disabled, check && (Checkbox_module_default()).checkbox_checked)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: external_classnames_default()((Checkbox_module_default()).checkbox__label, disabled && (Checkbox_module_default()).checkbox__label_disabled),
                    children: label
                })
            ]
        })
    });
};
/* harmony default export */ const Checkbox_Checkbox = (/*#__PURE__*/(0,external_react_.memo)(Checkbox));

// EXTERNAL MODULE: ./components/ui/Input/Input.module.scss
var Input_module = __webpack_require__(2448);
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);
;// CONCATENATED MODULE: ./components/ui/Input/Input.tsx




const Input = ({ onChange , className , disabled , placeholder , name  })=>{
    const handleChange = (event)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name: event.target.name,
            value: event.target.value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        name: name,
        placeholder: placeholder,
        className: external_classnames_default()((Input_module_default()).input, disabled && (Input_module_default()).input_disabled, className),
        onChange: handleChange
    });
};
/* harmony default export */ const Input_Input = (/*#__PURE__*/(0,external_react_.memo)(Input));

// EXTERNAL MODULE: ./components/ui/Radio/Radio.module.scss
var Radio_module = __webpack_require__(8718);
var Radio_module_default = /*#__PURE__*/__webpack_require__.n(Radio_module);
;// CONCATENATED MODULE: ./components/ui/Radio/Radio.tsx




const Radio = ({ label , className , checked , onChange , id , name , disabled  })=>{
    const handleChange = ()=>{
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name,
            value: id
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: external_classnames_default()((Radio_module_default()).wrapper, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "radio",
                className: external_classnames_default()((Radio_module_default()).radio, disabled && (Radio_module_default()).radio_disabled, checked && (Radio_module_default()).radio_checked),
                checked: checked,
                onChange: handleChange,
                id: id,
                name: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: external_classnames_default()((Radio_module_default()).radio__label, disabled && (Radio_module_default()).radio__label_disabled),
                children: label
            })
        ]
    });
};
/* harmony default export */ const Radio_Radio = (/*#__PURE__*/(0,external_react_.memo)(Radio));

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
// EXTERNAL MODULE: ./components/ui/Field/Field.module.scss
var Field_module = __webpack_require__(1304);
var Field_module_default = /*#__PURE__*/__webpack_require__.n(Field_module);
;// CONCATENATED MODULE: ./components/ui/Field/Field.tsx





const Field = ({ children , text , showError , errorText ="\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" , className , disabled  })=>{
    const fieldRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
        in: !disabled,
        timeout: 300,
        classNames: {
            enter: (Field_module_default()).fieldEnter,
            enterActive: (Field_module_default()).fieldEnterActive,
            exit: (Field_module_default()).fieldExit,
            exitActive: (Field_module_default()).fieldExitActive
        },
        mountOnEnter: true,
        unmountOnExit: true,
        nodeRef: fieldRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((Field_module_default()).field, className),
            ref: fieldRef,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: external_classnames_default()((Field_module_default()).field__text, disabled && (Field_module_default()).field__text_disabled),
                    children: text
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: external_classnames_default()((Field_module_default()).field__error, showError && (Field_module_default()).field__error_visible),
                    children: errorText
                })
            ]
        })
    });
};
/* harmony default export */ const Field_Field = (/*#__PURE__*/(0,external_react_.memo)(Field));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ui/Modal/Modal.module.scss
var Modal_module = __webpack_require__(9166);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./components/ui/Modal/Modal.tsx






const Modal = ({ type , text , isOpen , setIsOpen  })=>{
    const overlayRef = (0,external_react_.useRef)(null);
    const modalRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                in: isOpen,
                timeout: 300,
                classNames: {
                    enter: (Modal_module_default()).overlayEnter,
                    enterActive: (Modal_module_default()).overlayEnterActive,
                    exit: (Modal_module_default()).overlayExit,
                    exitActive: (Modal_module_default()).overlayExitActive
                },
                mountOnEnter: true,
                unmountOnExit: true,
                nodeRef: overlayRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Modal_module_default()).overlay,
                    ref: overlayRef
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                in: isOpen,
                timeout: 300,
                classNames: {
                    enter: (Modal_module_default()).modalEnter,
                    enterActive: (Modal_module_default()).modalEnterActive,
                    exit: (Modal_module_default()).modalExit,
                    exitActive: (Modal_module_default()).modalExitActive
                },
                mountOnEnter: true,
                unmountOnExit: true,
                nodeRef: modalRef,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Modal_module_default()).modal,
                    ref: modalRef,
                    children: [
                        type === "error" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/images/error.svg",
                                alt: "error",
                                title: "error",
                                width: "50",
                                height: "50"
                            })
                        }),
                        type === "info" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/images/heart.svg",
                                alt: "love",
                                title: "love",
                                width: "50",
                                height: "50"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Modal_module_default()).modal__text,
                            children: text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button_Button, {
                            onClick: ()=>setIsOpen(false)
                            ,
                            children: "\u041E\u043A\u0435\u0439"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

// EXTERNAL MODULE: ./components/ui/Loader/Loader.module.scss
var Loader_module = __webpack_require__(9578);
var Loader_module_default = /*#__PURE__*/__webpack_require__.n(Loader_module);
;// CONCATENATED MODULE: ./components/ui/Loader/Loader.tsx



const Loader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Loader_module_default()).loader,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Loader_module_default()).loader__text,
                children: "Loading..."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Loader_module_default()).loader__spinner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loader__dot, (Loader_module_default()).loader__dot_orange)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loader__dot, (Loader_module_default()).loader__dot_pink)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()((Loader_module_default()).loader__dot, (Loader_module_default()).loader__dot_yellow)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./components/ui/index.ts









/***/ })

};
;