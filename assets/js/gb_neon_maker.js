/*
 *
 * neon maker front end Javascript
 *
 * @since 1.0.0
 *
 */
var GbNeonmaker;
(function ($) {
    var $this,slideIndex = 1;
    var lines = 2;
    var price = Number(NeonMaker_ajax.default_price);
    var neonConfigurations = {"font": "ModernTalking-Regular", "text":NeonMaker_ajax.default_value, "size": "small", "color": "#2C2E3F", "onoffswitch": "false", "price": price};
    GbNeonmaker = {
        settings: {
            configurations : {
                a: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 12.55, 'height' : 7.15, 'length' : 6.85},
                        'medium' : {'text' : 15.68, 'height' : 8.95, 'length' : 8.56},
                        'large': {'text' : 19.60, 'height' : 11.98, 'length' : 10.75}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'medium' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'large': {'text' : 12, 'height' : 12, 'length' : 12}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'medium' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'large': {'text' : 12, 'height' : 12, 'length' : 12}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'medium' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'large': {'text' : 12, 'height' : 12, 'length' : 12}
                    },
                    'ShaimusOutline-Regular' : {
                        'small' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'medium' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'large': {'text' : 12, 'height' : 12, 'length' : 12}
                    },
                    'RoadCrew-Regular' : {
                        'small' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'medium' : {'text' : 12, 'height' : 12, 'length' : 12},
                        'large': {'text' : 12, 'height' : 12, 'length' : 12}
                    }
                },
                b: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.22, 'height' : 15.40, 'length' : 6.82},
                        'medium' : {'text' : 25.28, 'height' : 19.26, 'length' : 8.53},
                        'large': {'text' : 31.59, 'height' : 24.07, 'length' : 10.66}
                    },
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                c: {
                   'ModernTalking-Regular' : {
                        'small' : {'text' : 8.35, 'height' : 6.29, 'length' : 6.74},
                        'medium' : {'text' : 10.44, 'height' : 7.87, 'length' : 8.43},
                        'large': {'text' : 13.05, 'height' : 9.83, 'length' : 10.66}
                    },
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                d: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.09, 'height' : 12.52, 'length' : 8.79},
                        'medium' : {'text' : 25.11, 'height' : 15.65, 'length' : 10.99},
                        'large': {'text' : 31.39, 'height' : 19.56, 'length' : 13.74}
                    },
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                e: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                f: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                g: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                e: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                f: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                g: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                h: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                i: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                j: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                k: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                m: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                n: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                o: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                p: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                q: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                r: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                s: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                t: {
                    'ModernTalking-Regular' : {'small' : 66, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                u: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                v: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                w: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                x: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                y: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                0: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                1: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                2: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                3: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                4: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                5: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                6: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                7: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                8: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                9: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                ' ': {
                    'ModernTalking-Regular' : {'small' : 11, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                }
            }
        },
        initilaize: function () {
            $this = GbNeonmaker;
            $(document).ready(function () {
                $this.onInitMethods();
            });
        },
        onInitMethods: function () {
            $this.sideBarEvents(slideIndex);
            $this.showSlides(slideIndex);
            $this.calculation();
            $this.onOffswitch();
        },
        sideBarEvents: function () {
            $('.sbt_menu_items>li').click(function () {
                $('.sbt_menu_items>li').removeClass('active');
                $(this).addClass('active');
                var gt_tab = $(this).attr('data-tab');
                $('.result_tabs .tab_ct').removeClass('active');
                $('#' + gt_tab).addClass('active');
            });
        },
        changeNeonText: function(elem) {
            newLines = $(elem).val().split("\n").length;
            if (newLines > lines) {
                //$("#gb_default_value").prop('disabled', true);
            } else {
                //$("#gb_default_value").prop('disabled', false);
            }
            $("#gb_neon_text").text($(elem).val());
            neonConfigurations.price = price;
            neonConfigurations.text = $(elem).val();
            $this.calculation();
        },
        changeFont: function(elem,fontType) {
            //alert(fontType);

            $("#gb_neon_text").css("font-family", `'${fontType}.woff'`);
            $('.sbt_font_options ul li').removeClass('active_font');
            $(elem).parents('li').addClass('active_font');
            neonConfigurations.price = price;
            neonConfigurations.font = fontType;
            $this.calculation();
        },
        changeColor: function(elem,fontColor) {
            var onoffswitch = $('#gb_myonoffswitch').prop("checked");
            if(onoffswitch == true) {
                var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+fontColor+' 0px 0px 20px, '+fontColor+' 0px 0px 30px, '+fontColor+' 0px 0px 40px, '+fontColor+' 0px 0px 55px, '+fontColor+' 0px 0px 75px';
                $('#gb_neon_text').css({"text-shadow": shadow_color, "color":"#fff"});
            }else {
                $("#gb_neon_text").css("color", fontColor);
            }

            $('.sbt_font_options ul li').removeClass('active_color');
            $(elem).parents('li').addClass('active_color');
            neonConfigurations.color = fontColor;
        },
        changeSize: function(elem,size) {
            neonConfigurations.price = price;
            neonConfigurations.size = size;
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
            $this.calculation();
        },
        changeBacking: function(elem,backingsize) {
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
        },
        changeFixture: function(elem,fixture) {
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
        },
        changeDelivery: function(elem,delivery) {
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
        },
        showSlides:function(n)
        {
            var i;
            var slides = document.getElementsByClassName("gb_slides");
            if(slides.length>0){
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block";
            }
        },
        plusSlides:function(n)
        {
            $this.showSlides(slideIndex += n);
        },
        onOffswitch:function(elem)
        {
            var sel = $(elem).prop("checked");
            var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+neonConfigurations.color+' 0px 0px 20px, '+neonConfigurations.color+' 0px 0px 30px, '+neonConfigurations.color+' 0px 0px 40px, '+neonConfigurations.color+' 0px 0px 55px, '+neonConfigurations.color+' 0px 0px 75px';
            if(sel == true){
                $('#gb_neon_text').css({"text-shadow": shadow_color, "color":"#fff"});
            }else {
                $('#gb_neon_text').removeAttr('style');
                $("#gb_neon_text").css("color", neonConfigurations.color);
            }
            neonConfigurations.onOffswitch = sel;
        },
        calculation:function() {
            var i;
            var font = neonConfigurations.font;
            var string = neonConfigurations.text;
            var size = neonConfigurations.size;
            var price = 0, maxHeight = 0, length = 0;
            for(i = 0; i < string.length; i++) {
                var char = string[i];
                height = $this.getPrice(char, font, size, 'height');
                maxHeight = ( height > maxHeight ) ? height : maxHeight;
                length = length + $this.getPrice(char, font, size, 'length');
                price = price + $this.getPrice(char, font, size, 'text');
            }

            /* getting volume Formula used: (((MaxHeight +10) + (Length + 10)) * 10 ) / 5000*/
            var getVol = ((maxHeight +10) * (length + 10) * 10 ) / 5000;
            var volume = $this.round_to_precision(getVol, 0.5);

            /* formula used : ((shiping price in RMB)* 1.2) * 0.25 */
            var shipping = ( ($this.getShipping(volume)/6.99) * 1.2 ) * 0.25;

            /* formula for total price : ( Rope Price +  Shipping +  Other ) * Multiplier */
            var totalPrice = ( price + shipping + 90) * 1.5;
            var finalPrice = totalPrice.toFixed(2);
            $('#gb_total').html(finalPrice);
            neonConfigurations.price = finalPrice;
        },
        getShipping: function (vol){
            var shippingPrice = {
                0.5: 69.38,
                1: 89.22,
                1.5: 109.06,
                2: 128.9,
                2.5: 148.74,
                3: 168.58,
                3.5: 188.42,
                4: 208.26,
                4.5: 228.1,
                5: 247.94,
                5.5: 265.4,
                6: 282.86,
                6.5: 300.32,
                7: 317.78,
                7.5: 335.24,
                8: 352.7,
                8.5: 370.16,
                9: 387.62,
                9.5: 405.08,
                10: 422.54,
                10.5: 440.16,
                11: 457.84,
                11.5: 475.52,
                12: 493.2,
                12.5: 510.88,
                13: 528.56,
                13.5: 546.24,
                14: 563.92,
                14.5: 581.6,
                15: 599.28,
                15.5: 616.96,
                16: 634.64,
                16.5: 652.32,
                17: 670,
                17.5: 687.68,
                18: 705.36,
                18.5: 723.04,
                19: 740.72,
                19.5: 758.4,
                20: 776.08,
            }
            return shippingPrice[vol];
        },
        getPrice: function (alphabet, font, size, type) {
            let priceSeting = $this.settings.configurations;
            if ((alphabet in priceSeting && font in priceSeting[alphabet] && size in priceSeting[alphabet][font])) {
                return priceSeting[alphabet][font][size][type];
            }
            return 0;
        },
        buyNow:function(elem) {
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_insert_order', formdata: neonConfigurations };
            $.post(ajaxurl, formdata, function (data) {
                if (data.status == 'success') {
                    //alert("Your data with ID:  " + data.lastid + " inserted ");
                    $('.gb_display_data').css('display', 'block');
                }
            });
        },
        stripePayment: function(elem)
        {
            Stripe.setPublishableKey(NeonMaker_ajax.stripe_key);
            // create stripe token to make payment
            Stripe.createToken({
                number: jQuery('#cardNumber').val(),
                cvc: jQuery('#cardCVC').val(),
                exp_month: jQuery('#cardExpMonth').val(),
                exp_year: jQuery('#cardExpYear').val()
            },
            handleStripeResponse);
            return false;
        },
        round_to_precision: function (x, precision) {
            var y = +x + (precision === undefined ? 0.5 : precision/2);
            return y - (y % (precision === undefined ? 1 : +precision));
        },
        closeBtn: function (elem) {
            $('.gb_display_data').css('display', 'none');
        }
    };
    GbNeonmaker.initilaize();
    function handleStripeResponse(status, response) {
        //console.log(JSON.stringify(response));
        if (response.error) {
            jQuery(".paymentErrors").html(response.error.message);
        } else {
            var payForm = $("#stripe");
            //get stripe token id from response
            var stripeToken = response['id'];
            //console.log(neonConfigurations.price);
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_submit_payment', data: stripeToken};
            $.post(ajaxurl, formdata, function (data) {
                //jQuery(".paymentErrors").html("Payment"+ data.status);
                alert("Payment"+ data.status);
            });
        }
    }
})(jQuery);