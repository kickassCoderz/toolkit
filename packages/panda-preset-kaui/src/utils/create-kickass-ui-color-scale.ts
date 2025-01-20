import type { KickassUIBaseColorScale } from "../types";

type CreateKickassUIColorScaleReturnType<
    TScaleName extends string,
    TBaseScale extends KickassUIBaseColorScale,
> = {
    name: TScaleName;
    scale: TBaseScale & {
        surface: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        1: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        2: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        3: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        4: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        5: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        6: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        7: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        8: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        9: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        10: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        11: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        12: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a1: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a2: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a3: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a4: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a5: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a6: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a7: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a8: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a9: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a10: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a11: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
        a12: {
            value: {
                base: string;
                _light: string;
                _osLight: string;
                _dark: string;
                _osDark: string;
            };
        };
    };
};

type CreateKickassUIColorScaleOptions<
    TScaleName extends string,
    TBaseScale extends KickassUIBaseColorScale,
> = {
    name: TScaleName;
    baseScale: TBaseScale;
};

export function createKickassUIColorScale<
    TScaleName extends string,
    TBaseScale extends KickassUIBaseColorScale,
>({
    name,
    baseScale,
}: CreateKickassUIColorScaleOptions<TScaleName, TBaseScale>): CreateKickassUIColorScaleReturnType<
    TScaleName,
    TBaseScale
> {
    return {
        name,
        scale: {
            ...baseScale,
            surface: {
                value: {
                    base: `{colors.${name}.light.surface}`,
                    _light: `{colors.${name}.light.surface}`,
                    _osLight: `{colors.${name}.light.surface}`,
                    _dark: `{colors.${name}.dark.surface}`,
                    _osDark: `{colors.${name}.dark.surface}`,
                },
            },
            1: {
                value: {
                    base: `{colors.${name}.light.1}`,
                    _light: `{colors.${name}.light.1}`,
                    _osLight: `{colors.${name}.light.1}`,
                    _dark: `{colors.${name}.dark.1}`,
                    _osDark: `{colors.${name}.dark.1}`,
                },
            },
            2: {
                value: {
                    base: `{colors.${name}.light.2}`,
                    _light: `{colors.${name}.light.2}`,
                    _osLight: `{colors.${name}.light.2}`,
                    _dark: `{colors.${name}.dark.2}`,
                    _osDark: `{colors.${name}.dark.2}`,
                },
            },
            3: {
                value: {
                    base: `{colors.${name}.light.3}`,
                    _light: `{colors.${name}.light.3}`,
                    _osLight: `{colors.${name}.light.3}`,
                    _dark: `{colors.${name}.dark.3}`,
                    _osDark: `{colors.${name}.dark.3}`,
                },
            },
            4: {
                value: {
                    base: `{colors.${name}.light.4}`,
                    _light: `{colors.${name}.light.4}`,
                    _osLight: `{colors.${name}.light.4}`,
                    _dark: `{colors.${name}.dark.4}`,
                    _osDark: `{colors.${name}.dark.4}`,
                },
            },
            5: {
                value: {
                    base: `{colors.${name}.light.5}`,
                    _light: `{colors.${name}.light.5}`,
                    _osLight: `{colors.${name}.light.5}`,
                    _dark: `{colors.${name}.dark.5}`,
                    _osDark: `{colors.${name}.dark.5}`,
                },
            },
            6: {
                value: {
                    base: `{colors.${name}.light.6}`,
                    _light: `{colors.${name}.light.6}`,
                    _osLight: `{colors.${name}.light.6}`,
                    _dark: `{colors.${name}.dark.6}`,
                    _osDark: `{colors.${name}.dark.6}`,
                },
            },
            7: {
                value: {
                    base: `{colors.${name}.light.7}`,
                    _light: `{colors.${name}.light.7}`,
                    _osLight: `{colors.${name}.light.7}`,
                    _dark: `{colors.${name}.dark.7}`,
                    _osDark: `{colors.${name}.dark.7}`,
                },
            },
            8: {
                value: {
                    base: `{colors.${name}.light.8}`,
                    _light: `{colors.${name}.light.8}`,
                    _osLight: `{colors.${name}.light.8}`,
                    _dark: `{colors.${name}.dark.8}`,
                    _osDark: `{colors.${name}.dark.8}`,
                },
            },
            9: {
                value: {
                    base: `{colors.${name}.light.9}`,
                    _light: `{colors.${name}.light.9}`,
                    _osLight: `{colors.${name}.light.9}`,
                    _dark: `{colors.${name}.dark.9}`,
                    _osDark: `{colors.${name}.dark.9}`,
                },
            },
            10: {
                value: {
                    base: `{colors.${name}.light.10}`,
                    _light: `{colors.${name}.light.10}`,
                    _osLight: `{colors.${name}.light.10}`,
                    _dark: `{colors.${name}.dark.10}`,
                    _osDark: `{colors.${name}.dark.10}`,
                },
            },
            11: {
                value: {
                    base: `{colors.${name}.light.11}`,
                    _light: `{colors.${name}.light.11}`,
                    _osLight: `{colors.${name}.light.11}`,
                    _dark: `{colors.${name}.dark.11}`,
                    _osDark: `{colors.${name}.dark.11}`,
                },
            },
            12: {
                value: {
                    base: `{colors.${name}.light.12}`,
                    _light: `{colors.${name}.light.12}`,
                    _osLight: `{colors.${name}.light.12}`,
                    _dark: `{colors.${name}.dark.12}`,
                    _osDark: `{colors.${name}.dark.12}`,
                },
            },
            a1: {
                value: {
                    base: `{colors.${name}.light.a1}`,
                    _light: `{colors.${name}.light.a1}`,
                    _osLight: `{colors.${name}.light.a1}`,
                    _dark: `{colors.${name}.dark.a1}`,
                    _osDark: `{colors.${name}.dark.a1}`,
                },
            },
            a2: {
                value: {
                    base: `{colors.${name}.light.a2}`,
                    _light: `{colors.${name}.light.a2}`,
                    _osLight: `{colors.${name}.light.a2}`,
                    _dark: `{colors.${name}.dark.a2}`,
                    _osDark: `{colors.${name}.dark.a2}`,
                },
            },
            a3: {
                value: {
                    base: `{colors.${name}.light.a3}`,
                    _light: `{colors.${name}.light.a3}`,
                    _osLight: `{colors.${name}.light.a3}`,
                    _dark: `{colors.${name}.dark.a3}`,
                    _osDark: `{colors.${name}.dark.a3}`,
                },
            },
            a4: {
                value: {
                    base: `{colors.${name}.light.a4}`,
                    _light: `{colors.${name}.light.a4}`,
                    _osLight: `{colors.${name}.light.a4}`,
                    _dark: `{colors.${name}.dark.a4}`,
                    _osDark: `{colors.${name}.dark.a4}`,
                },
            },
            a5: {
                value: {
                    base: `{colors.${name}.light.a5}`,
                    _light: `{colors.${name}.light.a5}`,
                    _osLight: `{colors.${name}.light.a5}`,
                    _dark: `{colors.${name}.dark.a5}`,
                    _osDark: `{colors.${name}.dark.a5}`,
                },
            },
            a6: {
                value: {
                    base: `{colors.${name}.light.a6}`,
                    _light: `{colors.${name}.light.a6}`,
                    _osLight: `{colors.${name}.light.a6}`,
                    _dark: `{colors.${name}.dark.a6}`,
                    _osDark: `{colors.${name}.dark.a6}`,
                },
            },
            a7: {
                value: {
                    base: `{colors.${name}.light.a7}`,
                    _light: `{colors.${name}.light.a7}`,
                    _osLight: `{colors.${name}.light.a7}`,
                    _dark: `{colors.${name}.dark.a7}`,
                    _osDark: `{colors.${name}.dark.a7}`,
                },
            },
            a8: {
                value: {
                    base: `{colors.${name}.light.a8}`,
                    _light: `{colors.${name}.light.a8}`,
                    _osLight: `{colors.${name}.light.a8}`,
                    _dark: `{colors.${name}.dark.a8}`,
                    _osDark: `{colors.${name}.dark.a8}`,
                },
            },
            a9: {
                value: {
                    base: `{colors.${name}.light.a9}`,
                    _light: `{colors.${name}.light.a9}`,
                    _osLight: `{colors.${name}.light.a9}`,
                    _dark: `{colors.${name}.dark.a9}`,
                    _osDark: `{colors.${name}.dark.a9}`,
                },
            },
            a10: {
                value: {
                    base: `{colors.${name}.light.a10}`,
                    _light: `{colors.${name}.light.a10}`,
                    _osLight: `{colors.${name}.light.a10}`,
                    _dark: `{colors.${name}.dark.a10}`,
                    _osDark: `{colors.${name}.dark.a10}`,
                },
            },
            a11: {
                value: {
                    base: `{colors.${name}.light.a11}`,
                    _light: `{colors.${name}.light.a11}`,
                    _osLight: `{colors.${name}.light.a11}`,
                    _dark: `{colors.${name}.dark.a11}`,
                    _osDark: `{colors.${name}.dark.a11}`,
                },
            },
            a12: {
                value: {
                    base: `{colors.${name}.light.a12}`,
                    _light: `{colors.${name}.light.a12}`,
                    _osLight: `{colors.${name}.light.a12}`,
                    _dark: `{colors.${name}.dark.a12}`,
                    _osDark: `{colors.${name}.dark.a12}`,
                },
            },
        },
    } as const;
}
