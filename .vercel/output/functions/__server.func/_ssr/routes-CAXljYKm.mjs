import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight, n as ChevronRight, r as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CAXljYKm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function box(variant) {
	if (variant === "carrot") return "0 0 160 460";
	if (variant === "columns") return "0 0 300 440";
	if (variant === "ring") return "0 0 320 150";
	if (variant === "jet") return "0 0 140 460";
	return "0 0 260 460";
}
function Sprite({ variant = "jellyfish", className = "", live = true }) {
	const gid = `s${(0, import_react.useId)().replace(/:/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: `sprite ${live ? "live" : ""} v-${variant} ${className}`,
		viewBox: box(variant),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${gid}-t`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--color-ember-hot)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "46%",
							stopColor: "var(--color-ember)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--color-tendril)"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: `${gid}-cap`,
					cx: "50%",
					cy: "42%",
					r: "58%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--color-ember-hot)",
							stopOpacity: "0.95"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "46%",
							stopColor: "var(--color-ember)",
							stopOpacity: "0.45"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--color-ember)",
							stopOpacity: "0"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${gid}-jet`,
					x1: "0",
					y1: "1",
					x2: "0",
					y2: "0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--color-tendril)",
							stopOpacity: "0.95"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "70%",
							stopColor: "var(--color-tendril)",
							stopOpacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--color-tendril)",
							stopOpacity: "0"
						})
					]
				})
			] }),
			variant === "jellyfish" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jellyfish, { id: gid }),
			variant === "carrot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carrot, { id: gid }),
			variant === "columns" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns, { id: gid }),
			variant === "ring" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, { id: gid }),
			variant === "jet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jet, { id: gid })
		]
	});
}
function Jellyfish({ id }) {
	const stroke = `url(#${id}-t)`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "flash",
		fill: "none",
		stroke,
		strokeLinecap: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "130",
				cy: "78",
				rx: "86",
				ry: "32",
				fill: `url(#${id}-cap)`,
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 92 C 58 150, 48 190, 70 250",
				strokeWidth: "1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 100 C 78 170, 96 230, 74 320",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 104 C 112 190, 92 260, 114 370",
				strokeWidth: "1.45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M132 108 C 128 200, 146 270, 124 400",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M156 104 C 162 190, 140 250, 168 360",
				strokeWidth: "1.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M178 98 C 188 160, 170 220, 186 300",
				strokeWidth: "1.15"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M198 90 C 206 140, 192 180, 208 236",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 210 C 88 240, 104 260, 90 290",
				strokeWidth: "0.7",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 230 C 160 270, 142 300, 166 340",
				strokeWidth: "0.7",
				opacity: "0.75"
			})
		]
	});
}
function Carrot({ id }) {
	const stroke = `url(#${id}-t)`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "flash",
		fill: "none",
		stroke,
		strokeLinecap: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "80",
				cy: "54",
				rx: "36",
				ry: "16",
				fill: `url(#${id}-cap)`,
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 66 C 78 140, 86 220, 76 340 C 74 380, 82 400, 78 430",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 120 C 58 150, 50 170, 46 196",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 150 C 104 182, 114 196, 120 214",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 210 C 56 236, 48 250, 42 272",
				strokeWidth: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 240 C 102 268, 112 286, 118 310",
				strokeWidth: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M77 300 C 60 322, 58 336, 64 352",
				strokeWidth: "0.8"
			})
		]
	});
}
function Columns({ id }) {
	const stroke = `url(#${id}-t)`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		className: "cols",
		fill: "none",
		stroke,
		strokeLinecap: "round",
		children: [
			"M40 70 C 36 160, 48 240, 34 340",
			"M90 40 C 86 150, 98 250, 82 400",
			"M140 58 C 146 170, 132 260, 148 390",
			"M190 48 C 184 160, 200 250, 186 410",
			"M240 80 C 246 170, 232 250, 248 330"
		].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: "col",
			d,
			strokeWidth: "1.35"
		}, d))
	});
}
function Ring({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "flash",
		fill: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "160",
			cy: "76",
			rx: "130",
			ry: "42",
			stroke: "var(--color-ember)",
			strokeWidth: "6",
			opacity: "0.35"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "160",
			cy: "76",
			rx: "108",
			ry: "30",
			stroke: `url(#${id}-t)`,
			strokeWidth: "1.4"
		})]
	});
}
function Jet({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		className: "flash",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M70 450 C 62 320, 66 180, 70 40 C 74 180, 78 320, 70 450 Z",
			fill: `url(#${id}-jet)`
		})
	});
}
var DeckContext = (0, import_react.createContext)({ go: () => {} });
function useDeck() {
	return (0, import_react.useContext)(DeckContext);
}
function Photo({ src, alt, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `photo-frame ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt
		})
	});
}
function Mark({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "kicker",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "kicker",
			children: label
		})]
	});
}
function OpenSlide() {
	const { go } = useDeck();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/hero.jpg",
					alt: "A tall night storm over a dark mountain line"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, {
				className: "hero-sprite",
				variant: "jellyfish"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "toplinks rise",
						"aria-label": "Jump",
						children: [
							{
								label: "The light",
								n: 1
							},
							{
								label: "The shapes",
								n: 4
							},
							{
								label: "Why rare",
								n: 7
							},
							{
								label: "First photo",
								n: 8
							}
						].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(link.n),
							children: link.label
						}, link.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display hero-title rise d2",
						children: [
							"Red",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Sprites"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-bottom",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rise d3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "kicker",
											children: "How long"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "live-dot",
											"aria-hidden": "true"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Shorter than a blink" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bar",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bar-fill" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This bar is slow. A real sprite is faster." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "welcome rise d4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"Welcome",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"to the high sky"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A sprite is a rare red light. It lives far above thunder clouds. Most people never see one." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "pill",
										type: "button",
										onClick: () => go(1),
										children: ["See the lights ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 16,
											"aria-hidden": "true"
										})]
									})
								]
							})
						]
					})
				]
			})
		]
	});
}
function WhatSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide split",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "split-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "02",
					label: "What it is"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display rise",
					children: [
						"Red",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Sprites"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d2",
					children: "A sprite is a real light. It is red. It shows above a big storm, then it is gone. It is not a plane. It is not a fire."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d3",
					children: "People gave it this name. In old stories, a sprite is a small, fast spirit. The light is fast. The name stayed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stats rise d4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stat-n",
								children: "50–90"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker",
								children: "km up"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Far above the cloud." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stat-n",
								children: "0.1s"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker",
								children: "or less"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shorter than a blink." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stat-n",
								children: "1989"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "kicker",
								children: "first film"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A camera caught one." })
						] })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shot rise d2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/art/prairie.jpg",
					alt: "A night storm over a dark field"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, {
					className: "shot-sprite",
					variant: "jellyfish"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inset",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/cloud.jpg",
						alt: "Close texture of a storm cloud"
					})
				})
			]
		})]
	});
}
function NeedsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide quad",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "quad-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				n: "03",
				label: "What you need"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "serif rise",
				children: "Four things. Miss one, and you see nothing."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "quad-grid",
			children: [
				{
					n: "01",
					title: "A big storm",
					text: "Small clouds almost never make a sprite.",
					src: "/art/prairie.jpg",
					alt: "A large storm cloud at night"
				},
				{
					n: "02",
					title: "A dark night",
					text: "The day sky is too bright. City lights hide it.",
					src: "/art/plains.jpg",
					alt: "A dark open plain under night clouds"
				},
				{
					n: "03",
					title: "A long view",
					text: "You must see the top of the storm, not the rain.",
					src: "/art/sea.jpg",
					alt: "A storm far across the sea"
				},
				{
					n: "04",
					title: "A fast eye",
					text: "It ends before a blink. A camera helps.",
					src: "/art/tripod.jpg",
					alt: "A camera on a tripod facing a storm"
				}
			].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `qcard rise d${i + 1}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: card.src,
					alt: card.alt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "qbody",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: card.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: card.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.text })
					]
				})]
			}, card.n))
		})]
	});
}
function LookSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide look",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "look-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "04",
					label: "How they look"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "serif rise",
					children: [
						"Red fingers",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"in a black sky"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d2",
					children: "The light is thin. It can look like branches, or a jellyfish, or a tall carrot."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d3",
					children: "The top is red. The lower tips can turn blue. Then the whole shape is gone."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mosaic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "big photo-frame rise d2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/hero.jpg",
						alt: "Open night sky above a thundercloud"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, { variant: "jellyfish" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					className: "rise d3",
					src: "/art/aerial.jpg",
					alt: "Storm tops seen from above"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					className: "rise d4",
					src: "/art/cloud.jpg",
					alt: "A storm cloud lit from inside"
				})
			]
		})]
	});
}
function ShapesSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide shapes",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				n: "05",
				label: "Three shapes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "serif rise",
				children: "Same light. Three faces."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shape-grid",
				children: [
					{
						variant: "carrot",
						name: "Carrot",
						text: "One tall red body. Small arms on the side.",
						src: "/art/hero.jpg"
					},
					{
						variant: "jellyfish",
						name: "Jellyfish",
						text: "A wide top. Many long legs under it.",
						src: "/art/prairie.jpg"
					},
					{
						variant: "columns",
						name: "Columns",
						text: "Straight lines. They often come in a group.",
						src: "/art/sea.jpg"
					}
				].map((shape, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `shape rise d${i + 2}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: shape.src,
								alt: ""
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shade" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, { variant: shape.variant }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "kicker",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: shape.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: shape.text })
							]
						})
					]
				}, shape.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "watermark",
				"aria-hidden": "true",
				children: "Sprites"
			})
		]
	});
}
function StartSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide path",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "steps",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				n: "06",
				label: "How it starts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "serif rise",
				children: "From the bolt to the red sky"
			})] }), [
				{
					title: "The bolt",
					text: "A strong lightning bolt hits the ground."
				},
				{
					title: "The change",
					text: "The air above the cloud changes very fast."
				},
				{
					title: "The red light",
					text: "High air turns red for a short moment."
				},
				{
					title: "The dark",
					text: "Then the sky is black again."
				}
			].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "step",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bullet",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })] })]
			}, step.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "orbs",
			"aria-hidden": "true",
			children: [
				{
					src: "/art/cloud.jpg",
					alt: "Lit storm cloud"
				},
				{
					src: "/art/aerial.jpg",
					alt: "Cloud tops at night"
				},
				{
					src: "/art/hero.jpg",
					alt: "Sky above a storm"
				},
				{
					src: "/art/burst.jpg",
					alt: "One storm cloud in a black sky"
				}
			].map((orb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: orb.src,
					alt: orb.alt
				})
			}, orb.src))
		})]
	});
}
function FamilySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide family",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				n: "07",
				label: "A small family"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "serif rise",
				children: "Not only sprites"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "family-grid",
				children: [[
					{
						n: "01",
						variant: "jellyfish",
						title: "Sprites",
						text: "Red light, high above the cloud. Many shapes."
					},
					{
						n: "02",
						variant: "jet",
						title: "Blue jets",
						text: "Blue light. It starts at the cloud top and goes up."
					},
					{
						n: "03",
						variant: "ring",
						title: "Elves",
						text: "A huge dim ring. Even faster than a sprite."
					},
					{
						n: "04",
						variant: "carrot",
						title: "Halos",
						text: "A soft red disk. It can come just before a sprite."
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `fcell rise d${i + 1}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: item.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "plate",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, { variant: item.variant })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
					]
				}, item.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "note",
					children: "A gigantic jet is rarer still. It is a tall bridge of light, from the cloud to the high sky."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "watermark",
				"aria-hidden": "true",
				children: "Family"
			})
		]
	});
}
function RareSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide asset",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "08",
					label: "Why they hide"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "serif rise",
					children: "Easy to miss"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bullets",
					children: [
						{
							title: "Too fast",
							text: "It ends before a blink."
						},
						{
							title: "Too high",
							text: "It sits 50 to 90 kilometers up."
						},
						{
							title: "Too shy",
							text: "City lights wash the red away."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bullet-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bullet",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })] })]
					}, item.title))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "orb-lg rise d2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/art/burst.jpg",
					alt: "A single storm cloud flashing at night"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, { variant: "columns" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "notes",
				children: [
					{
						title: "Long nights",
						text: "You can watch for hours and see none."
					},
					{
						title: "That is normal",
						text: "Rare means rare. You did not fail."
					},
					{
						title: "Look above",
						text: "Stand far from the rain. Watch the cloud top."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bullet",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text })] })]
				}, item.title))
			})
		]
	});
}
function FilmSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide story",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "story-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "09",
					label: "The first clear film"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display year rise",
					children: "1989"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d2",
					children: "A team pointed a low-light camera at the stars. A storm got in the way. The tape showed a red flash."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d3",
					children: "Pilots had told this story for years. Many people did not believe them. The tape made the story true."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "fine rise d4",
					children: "Minnesota, United States. One summer night."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			className: "rise d2",
			src: "/art/tripod.jpg",
			alt: "A camera waits on a ridge while lightning flashes far away"
		})]
	});
}
function ColorSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "plate-stage rise",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tag red",
					children: "Red top"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tag blue",
					children: "Blue tips"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, { variant: "jellyfish" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "colors-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "10",
					label: "The colors"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "serif rise",
					children: "The air lights up. It is not fire."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body rise d2",
					children: "A gas in the high air makes the red. A little lower, the air can glow blue. No wood. No lamp. Just air, for a moment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "swatches rise d3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "swatch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip red",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Red" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The top, and most of the body." })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "swatch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip blue",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The thin tips, nearer the cloud." })] })]
					})]
				})
			]
		})]
	});
}
function WatchSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide watch",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "watch-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "11",
					label: "How to watch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "serif rise",
					children: "A quiet plan"
				}),
				[
					{
						n: "01",
						title: "Stand far away",
						text: "About 100 kilometers from the storm, or more. You want the top, not the rain."
					},
					{
						n: "02",
						title: "Find real dark",
						text: "Leave city lights behind. Give your eyes twenty minutes."
					},
					{
						n: "03",
						title: "Look above the cloud",
						text: "The sprite is in the clear sky over the storm."
					},
					{
						n: "04",
						title: "Use a camera",
						text: "A fast camera sees more than eyes. Point it at the high sky."
					}
				].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "numstep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: step.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: step.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })] })]
				}, step.n))
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: "/art/tripod.jpg",
			alt: "Tripod and a small warm lamp on a hill, storm on the horizon"
		})]
	});
}
function WhereSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide places",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			n: "12",
			label: "Where to look"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "serif rise",
			children: "Big storms, dark ground"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "place-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "place wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/plains.jpg",
						alt: "A dirt track across wide night plains"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "kicker",
							children: "01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Wide plains" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Big summer storms. The middle of the United States is famous for them." })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "place",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/sea.jpg",
						alt: "Lightning over a dark sea"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Over the sea" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dark water. A clear view of the cloud top." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "place",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/slope.jpg",
						alt: "A dark mountain under a wide night sky"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "High land" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A ridge can give you a long, clear view." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "place",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/aerial.jpg",
						alt: "Thunderstorm tops seen from a plane"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "From above" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Planes and space crews see the cloud tops." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "place",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/prairie.jpg",
						alt: "A distant night storm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Many countries" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Europe, Asia, and South America see them too." })] })]
				})
			]
		})]
	});
}
function SafeSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide safe",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "safe-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					n: "13",
					label: "Stay safe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "serif rise",
					children: "Safe from the sprite. Not from the storm."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "A sprite is 50 kilometers above you, or more. It does not hit houses. It does not hit people on the ground."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "warn",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Lightning does." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "If you hear thunder, go inside. Do not stand in a field to hunt a sprite. Watch a storm that is far away."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: "/art/sea.jpg",
			alt: "A storm staying far out over the water"
		})]
	});
}
function QuietSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide quiet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				n: "14",
				label: "Why it matters"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "rise",
				children: [
					"One blink.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Then you wait." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "quiet-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sprites matter. A storm near the ground can light the high sky. Weather below. Thin air above. We still miss most of them." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/hero.jpg",
						alt: "Night sky over a storm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/aerial.jpg",
						alt: "Cloud tops"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/art/cloud.jpg",
						alt: "Storm cloud"
					})
				]
			})
		]
	});
}
function CloseSlide() {
	const { go } = useDeck();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "slide close",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "close-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/tripod.jpg",
					alt: "A camera on a dark ridge under a lightning storm"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "close-shade" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprite, {
				className: "close-sprite",
				variant: "carrot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "close-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "kicker",
						children: "15 / 15"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display rise",
						children: [
							"Ready to",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"look up?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sub rise d2",
						children: "Find a dark place. Find a far storm. Let your eyes rest. Most nights are quiet. One night, the sky may answer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "pill rise d3",
						type: "button",
						onClick: () => go(0),
						children: ["Back to the start ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 16,
							"aria-hidden": "true"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "close-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Red sprites" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50 to 90 km up" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shorter than a blink" })
						]
					})
				]
			})
		]
	});
}
var SLIDES = [
	{
		id: "open",
		title: "Red Sprites",
		line: "A rare red light",
		image: "/art/hero.jpg",
		View: OpenSlide
	},
	{
		id: "what",
		title: "What it is",
		line: "Real light, fast name",
		image: "/art/prairie.jpg",
		View: WhatSlide
	},
	{
		id: "needs",
		title: "Four things",
		line: "Storm, night, view, speed",
		image: "/art/sea.jpg",
		View: NeedsSlide
	},
	{
		id: "look",
		title: "How they look",
		line: "Red fingers in the sky",
		image: "/art/hero.jpg",
		View: LookSlide
	},
	{
		id: "shapes",
		title: "Three shapes",
		line: "Carrot, jellyfish, columns",
		image: "/art/prairie.jpg",
		View: ShapesSlide
	},
	{
		id: "start",
		title: "How it starts",
		line: "From bolt to red sky",
		image: "/art/cloud.jpg",
		View: StartSlide
	},
	{
		id: "family",
		title: "The family",
		line: "Jets, elves, halos",
		image: "/art/aerial.jpg",
		View: FamilySlide
	},
	{
		id: "rare",
		title: "Why they hide",
		line: "Fast, high, and shy",
		image: "/art/burst.jpg",
		View: RareSlide
	},
	{
		id: "film",
		title: "First film",
		line: "A tape from 1989",
		image: "/art/tripod.jpg",
		View: FilmSlide
	},
	{
		id: "color",
		title: "Two colors",
		line: "Red top, blue tips",
		image: "/art/hero.jpg",
		View: ColorSlide
	},
	{
		id: "watch",
		title: "How to watch",
		line: "Far, dark, and patient",
		image: "/art/tripod.jpg",
		View: WatchSlide
	},
	{
		id: "where",
		title: "Where to look",
		line: "Plains, sea, high land",
		image: "/art/plains.jpg",
		View: WhereSlide
	},
	{
		id: "safe",
		title: "Stay safe",
		line: "Fear the storm, not the sprite",
		image: "/art/sea.jpg",
		View: SafeSlide
	},
	{
		id: "quiet",
		title: "Why it matters",
		line: "A storm can touch the high sky",
		image: "/art/aerial.jpg",
		View: QuietSlide
	},
	{
		id: "close",
		title: "Look up",
		line: "Most nights are quiet",
		image: "/art/tripod.jpg",
		View: CloseSlide
	}
];
function pad(n) {
	return String(n).padStart(2, "0");
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [board, setBoard] = (0, import_react.useState)(false);
	const [back, setBack] = (0, import_react.useState)(false);
	const indexRef = (0, import_react.useRef)(0);
	const startX = (0, import_react.useRef)(0);
	const startY = (0, import_react.useRef)(0);
	const go = (0, import_react.useCallback)((n) => {
		const next = Math.max(0, Math.min(SLIDES.length - 1, n));
		setBack(next < indexRef.current);
		indexRef.current = next;
		setIndex(next);
		setBoard(false);
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (tag === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
			if (e.key === "Escape") {
				setBoard((open) => !open);
				return;
			}
			if (board) return;
			if (e.key === "ArrowRight" || e.key === "PageDown") {
				e.preventDefault();
				go(indexRef.current + 1);
			} else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") {
				e.preventDefault();
				go(indexRef.current - 1);
			} else if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				go(indexRef.current + 1);
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(SLIDES.length - 1);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [board, go]);
	function onTouchStart(e) {
		startX.current = e.touches[0].clientX;
		startY.current = e.touches[0].clientY;
	}
	function onTouchEnd(e) {
		if (board) return;
		const dx = e.changedTouches[0].clientX - startX.current;
		const dy = e.changedTouches[0].clientY - startY.current;
		if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
		go(indexRef.current + (dx < 0 ? 1 : -1));
	}
	function onStageClick(e) {
		if (board) return;
		if (e.target.closest("button, a")) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		if (x < rect.width * .18) go(index - 1);
		else if (x > rect.width * .82) go(index + 1);
	}
	const slide = SLIDES[index];
	const View = slide.View;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeckContext.Provider, {
		value: { go },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A night lecture · rare lights above storms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fifteen slides" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `stage ${board ? "is-board" : ""}`,
					onClick: onStageClick,
					onTouchStart,
					onTouchEnd,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "frame-ui",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "word",
									type: "button",
									onClick: () => go(0),
									children: "Red Sprites"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "kicker frame-line",
									children: board ? "All slides" : slide.line
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-btn",
									type: "button",
									onClick: () => setBoard((open) => !open),
									children: board ? "One slide" : "All slides"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "count",
									children: [
										pad(index + 1),
										" / ",
										pad(SLIDES.length)
									]
								})
							]
						}),
						board ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "board",
							children: SLIDES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: `board-card ${i === 0 || i === SLIDES.length - 1 ? "wide" : ""}`,
								onClick: () => go(i),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: ""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shade" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "meta",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "kicker",
												children: pad(i + 1)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: item.line })
										]
									})
								]
							}, item.id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `slide-in ${back ? "back" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})
						}, slide.id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "nav-btn prev",
							type: "button",
							"aria-label": "Previous slide",
							disabled: !board && index === 0,
							onClick: () => go(index - 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								size: 18,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "nav-btn next",
							type: "button",
							"aria-label": "Next slide",
							disabled: !board && index === SLIDES.length - 1,
							onClick: () => go(index + 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 18,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ticks",
							role: "tablist",
							"aria-label": "Slides",
							children: SLIDES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `tick ${i === index ? "on" : ""} ${i < index ? "done" : ""}`,
								role: "tab",
								"aria-selected": i === index,
								"aria-label": item.title,
								onClick: () => go(i)
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "sr",
							"aria-live": "polite",
							children: [
								"Slide ",
								index + 1,
								" of ",
								SLIDES.length,
								". ",
								slide.title,
								". ",
								slide.line
							]
						})
					]
				})]
			})
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
