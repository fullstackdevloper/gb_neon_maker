/*
 *
 * neon maker front end Javascript
 *
 * @since 1.0.0
 *
 */
var GbNeonmaker;
(function ($) {
    var $this,slideIndex = 1, price = 0;
    var heightInc = 3;
    var LenghtInc = 3;
    var backingStandCost = 50;
    var standardDeliveryCost = 50;
    var priorityDeliveryCost = 100;
    var internationalDeliveryCost = 150;
    var twoLineHeightInc = 4.5;
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
                        'small' : {'text' : 10.53, 'height' : 7.00, 'length' : 8.59},
                        'medium' : {'text' : 13.16, 'height' : 8.75, 'length' : 10.74},
                        'large': {'text' : 16.45, 'height' : 10.94, 'length' : 13.42}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 13.50, 'height' : 5.21, 'length' : 12.45},
                        'medium' : {'text' : 16.88, 'height' : 6.51, 'length' : 15.57},
                        'large': {'text' : 21.10, 'height' : 8.14, 'length' : 19.46}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.53, 'height' : 7.00, 'length' : 8.59},
                        'medium' : {'text' : 13.16, 'height' : 8.75, 'length' : 10.74},
                        'large': {'text' : 16.45, 'height' : 10.94, 'length' : 13.42}
                    },
                    'Courier' : {
                        'small' : {'text' : 12.30, 'height' : 6.13, 'length' : 13.42},
                        'medium' : {'text' : 15.38, 'height' : 7.67, 'length' : 10.74},
                        'large': {'text' : 19.23, 'height' : 9.58, 'length' : 13.42}
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
                    'thistails-regular' : {
                        'small' : {'text' : 14.58, 'height' : 15.40, 'length' : 6.82},
                        'medium' : {'text' : 25.28, 'height' : 19.26, 'length' : 8.53},
                        'large': {'text' : 31.59, 'height' : 24.07, 'length' : 10.66}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 24.87, 'height' : 16.90, 'length' : 9.74},
                        'medium' : {'text' : 31.09, 'height' : 21.13, 'length' : 12.18},
                        'large': {'text' : 38.86, 'height' : 26.41, 'length' : 15.22}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 14.58, 'height' : 6.55, 'length' : 7.48},
                        'medium' : {'text' : 18.22, 'height' : 8.18, 'length' : 9.35},
                        'large': {'text' : 22.77, 'height' : 10.23, 'length' : 11.69}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                c: {
                   'ModernTalking-Regular' : {
                        'small' : {'text' : 8.35, 'height' : 6.29, 'length' : 6.74},
                        'medium' : {'text' : 10.44, 'height' : 7.87, 'length' : 8.43},
                        'large': {'text' : 13.05, 'height' : 9.83, 'length' : 10.66}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 11.40, 'height' : 6.85, 'length' : 11.49},
                        'medium' : {'text' : 14.25, 'height' : 8.56 , 'length' : 14.36},
                        'large': {'text' : 17.82, 'height' : 10.70, 'length' : 17.95}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.03, 'height' : 6.81, 'length' : 8.32},
                        'medium' : {'text' : 11.28, 'height' : 8.52, 'length' : 10.40},
                        'large': {'text' : 14.11, 'height' : 10.64, 'length' : 13.00}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                d: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.09, 'height' : 12.52, 'length' : 8.79},
                        'medium' : {'text' : 25.11, 'height' : 15.65, 'length' : 10.99},
                        'large': {'text' : 31.39, 'height' : 19.56, 'length' : 13.74}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 30.24, 'height' : 15.90, 'length' : 18.53},
                        'medium' : {'text' : 37.80, 'height' : 19.88, 'length' : 23.17},
                        'large': {'text' : 47.25, 'height' : 24.84, 'length' : 28.96}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.11, 'height' : 6.59, 'length' : 7.40},
                        'medium' : {'text' : 13.88, 'height' : 8.24, 'length' : 9.25},
                        'large': {'text' : 17.36, 'height' : 10.30, 'length' : 11.57}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                e: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 8.76, 'height' : 6.18, 'length' : 5.44},
                        'medium' : {'text' : 10.95, 'height' : 7.73, 'length' : 6.80},
                        'large': {'text' : 13.69, 'height' : 9.66, 'length' : 8.50}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 13.50, 'height' : 6.51, 'length' : 11.19},
                        'medium' : {'text' : 16.88, 'height' : 8.14, 'length' : 13.99},
                        'large': {'text' : 21.10, 'height' : 10.17, 'length' : 17.49}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.34, 'height' : 6.49, 'length' : 6.59},
                        'medium' : {'text' : 12.93 , 'height' : 8.11, 'length' : 8.23},
                        'large': {'text' : 16.16, 'height' : 10.14, 'length' : 10.29}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                f: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 17.66, 'height' : 28.22, 'length' : 7.86},
                        'medium' : {'text' : 22.07, 'height' : 35.27, 'length' : 9.83},
                        'large': {'text' : 27.59, 'height' : 44.09, 'length' : 12.29}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 30.13, 'height' : 33.86, 'length' : 9.62},
                        'medium' : {'text' : 37.67, 'height' : 42.32, 'length' : 12.02},
                        'large': {'text' : 47.08, 'height' : 52.90, 'length' : 15.03}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.93, 'height' : 7.05, 'length' : 6.53},
                        'medium' : {'text' : 9.91, 'height' : 8.82, 'length' : 8.16},
                        'large': {'text' : 12.39, 'height' : 11.02, 'length' : 10.20}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                g: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 22.46, 'height' : 13.98, 'length' : 9.50},
                        'medium' : {'text' : 28.08, 'height' : 17.47, 'length' : 11.87},
                        'large': {'text' : 35.10, 'height' : 21.84, 'length' : 14.84}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 35.83, 'height' : 35.36, 'length' : 11.86},
                        'medium' : {'text' : 44.79, 'height' : 44.19, 'length' : 14.83},
                        'large': {'text' : 55.99, 'height' : 55.24, 'length' : 18.53}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.11, 'height' : 7.23, 'length' : 7.44},
                        'medium' : {'text' : 13.89, 'height' : 9.03, 'length' : 9.30},
                        'large': {'text' : 17.36, 'height' : 11.29, 'length' : 11.63}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                h: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.47, 'height' : 11.65, 'length' : 6.39},
                        'medium' : {'text' : 14.34, 'height' : 14.56, 'length' : 7.99},
                        'large': {'text' : 17.93, 'height' : 18.20, 'length' : 9.98}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 26.36, 'height' : 17.53, 'length' : 10.94},
                        'medium' : {'text' : 32.95, 'height' : 21.91, 'length' : 13.68},
                        'large': {'text' : 41.18, 'height' : 27.38, 'length' : 17.10}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.61, 'height' : 7.23, 'length' : 6.38},
                        'medium' : {'text' : 12.01, 'height' : 9.03, 'length' : 7.97},
                        'large': {'text' : 15.01, 'height' : 11.29, 'length' : 9.97}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                i: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 6.54, 'height' : 8.32, 'length' : 4.93},
                        'medium' : {'text' : 8.17, 'height' : 10.40, 'length' : 6.17},
                        'large': {'text' : 10.21, 'height' : 13.00, 'length' : 7.71}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 8.05, 'height' : 8.72, 'length' : 8.04},
                        'medium' : {'text' : 10.06, 'height' : 10.90, 'length' : 10.05},
                        'large': {'text' : 12.58, 'height' : 13.62, 'length' : 12.57}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.61, 'height' : 7.09, 'length' : 1.50},
                        'medium' : {'text' : 4.52, 'height' : 8.86, 'length' : 1.88},
                        'large': {'text' : 5.65, 'height' : 11.07, 'length' : 2.34}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                j: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 16.13, 'height' : 28.54, 'length' : 8.14},
                        'medium' : {'text' : 20.17, 'height' : 35.68, 'length' : 10.17},
                        'large': {'text' : 25.21, 'height' : 44.60, 'length' : 12.72}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 26.21, 'height' : 38.99, 'length' : 10.12},
                        'medium' : {'text' : 32.76, 'height' : 48.74, 'length' : 12.65},
                        'large': {'text' : 40.95, 'height' : 60.93, 'length' : 15.81}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.55, 'height' : 6.94, 'length' : 5.15},
                        'medium' : {'text' : 6.94, 'height' : 8.67, 'length' : 6.43},
                        'large': {'text' : 8.67, 'height' : 10.84, 'length' : 8.04}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                k: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 16.71, 'height' : 16.06, 'length' : 8.22},
                        'medium' : {'text' : 20.88, 'height' : 20.08, 'length' : 10.28},
                        'large': {'text' : 26.10, 'height' : 25.10, 'length' : 12.85}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 34.15, 'height' : 20.56, 'length' : 12.81},
                        'medium' : {'text' : 42.68, 'height' : 25.71, 'length' : 16.01},
                        'large': {'text' : 53.35, 'height' : 32.13, 'length' : 20.01}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.72, 'height' : 7.11, 'length' : 6.17},
                        'medium' : {'text' : 12.15, 'height' : 8.89, 'length' : 7.71},
                        'large': {'text' : 15.18, 'height' : 11.11, 'length' : 9.64}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                l: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 9.99, 'height' : 14.17, 'length' : 4.18},
                        'medium' : {'text' : 12.49, 'height' : 17.71, 'length' : 5.23},
                        'large': {'text' : 15.61, 'height' : 22.14, 'length' : 6.54}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 22.28, 'height' : 17.55, 'length' : 9.06},
                        'medium' : {'text' : 27.85, 'height' : 21.94, 'length' : 11.32},
                        'large': {'text' : 34.82, 'height' : 27.43, 'length' : 14.15}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.46, 'height' : 6.97, 'length' : 5.41},
                        'medium' : {'text' : 6.83, 'height' : 8.72, 'length' : 6.76},
                        'large': {'text' : 8.54, 'height' : 10.90, 'length' : 8.45}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                m: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 17.03, 'height' : 8.71, 'length' : 10.25},
                        'medium' : {'text' : 21.28, 'height' : 10.88, 'length' : 12.81},
                        'large': {'text' : 26.60, 'height' : 13.60, 'length' : 16.01}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 16.65, 'height' : 5.98, 'length' : 17.74},
                        'medium' : {'text' : 20.81, 'height' : 7.48, 'length' : 22.17},
                        'large': {'text' : 26.01, 'height' : 9.35 , 'length' : 27.71}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.84, 'height' : 6.75, 'length' : 6.45},
                        'medium' : {'text' : 13.55, 'height' : 8.44, 'length' : 8.07},
                        'large': {'text' : 16.94, 'height' : 10.54, 'length' : 10.08}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                n: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.94, 'height' : 6.59, 'length' : 9.04},
                        'medium' : {'text' : 14.92, 'height' : 8.24, 'length' : 11.30},
                        'large': {'text' : 18.65, 'height' : 10.30, 'length' : 14.12}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 14.86, 'height' : 5.75, 'length' : 15.27},
                        'medium' : {'text' : 18.58, 'height' : 7.19, 'length' : 19.08},
                        'large': {'text' : 23.22, 'height' : 8.99, 'length' : 23.86}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.43, 'height' : 7.17, 'length' : 6.03},
                        'medium' : {'text' : 14.28, 'height' : 8.96, 'length' : 7.53},
                        'large': {'text' : 17.85, 'height' : 11.20, 'length' : 9.42}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                o: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 14.15, 'height' : 7.14, 'length' : 7.19},
                        'medium' : {'text' : 17.69, 'height' : 8.93, 'length' : 8.99},
                        'large': {'text' : 22.11, 'height' : 11.16, 'length' : 11.23}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.07, 'height' : 5.18, 'length' : 12.56},
                        'medium' : {'text' : 18.83, 'height' : 6.47, 'length' : 15.70},
                        'large': {'text' : 23.54, 'height' : 8.09, 'length' : 19.63}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.60, 'height' : 7.07, 'length' : 7.65},
                        'medium' : {'text' : 13.25, 'height' : 8.84, 'length' : 9.57},
                        'large': {'text' : 16.56, 'height' : 11.05, 'length' : 11.96}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                p: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 22.88, 'height' : 31.01, 'length' : 7.18},
                        'medium' : {'text' : 28.61, 'height' : 38.77, 'length' : 8.97},
                        'large': {'text' : 35.76, 'height' : 48.46, 'length' : 11.21}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 28.18, 'height' : 28.80, 'length' : 13.84},
                        'medium' : {'text' : 35.22, 'height' : 36.00, 'length' : 17.29 },
                        'large': {'text' : 44.03, 'height' : 45.00, 'length' : 21.62}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.86, 'height' : 7.00, 'length' : 5.50},
                        'medium' : {'text' : 11.07, 'height' : 8.75, 'length' : 6.87},
                        'large': {'text' : 13.84, 'height' : 10.94, 'length' : 8.59}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                q: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 29.47, 'height' : 33.64, 'length' : 8.88},
                        'medium' : {'text' : 36.83, 'height' : 42.05, 'length' : 11.09},
                        'large': {'text' : 46.04, 'height' : 52.57, 'length' : 13.87}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 29.76, 'height' : 30.58, 'length' : 12.34},
                        'medium' : {'text' : 37.19, 'height' : 38.22, 'length' : 15.42},
                        'large': {'text' : 46.49, 'height' : 47.78, 'length' : 19.27 }
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 12.31, 'height' : 7.34, 'length' : 7.76},
                        'medium' : {'text' : 15.38, 'height' : 9.18, 'length' : 9.70},
                        'large': {'text' : 19.23, 'height' : 11.47, 'length' : 12.13}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                r: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 7.71, 'height' : 6.01, 'length' : 5.87},
                        'medium' : {'text' : 9.64, 'height' : 7.52, 'length' : 7.34},
                        'large': {'text' : 12.05, 'height' : 9.39, 'length' : 9.18}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 11.66, 'height' : 8.06, 'length' : 10.12},
                        'medium' : {'text' : 14.57, 'height' : 10.08, 'length' : 12.66},
                        'large': {'text' : 18.22, 'height' : 12.60, 'length' : 15.82}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.32, 'height' : 7.09, 'length' : 6.89},
                        'medium' : {'text' : 14.15, 'height' : 8.87, 'length' : 8.61},
                        'large': {'text' : 17.69, 'height' : 11.08, 'length' : 10.77}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                s: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 12.84, 'height' : 9.22, 'length' : 8.01},
                        'medium' : {'text' : 16.05, 'height' : 11.53, 'length' : 10.01},
                        'large': {'text' : 20.06, 'height' : 14.41, 'length' : 12.51}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 16.40, 'height' : 10.76, 'length' : 8.67},
                        'medium' : {'text' : 20.50, 'height' : 13.45, 'length' : 10.84},
                        'large': {'text' : 25.62, 'height' : 16.82, 'length' : 13.55}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.80, 'height' : 7.15, 'length' : 6.02},
                        'medium' : {'text' : 10.99, 'height' : 8.94, 'length' : 7.53},
                        'large': {'text' : 13.74, 'height' : 11.17, 'length' : 9.41}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                t: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 15.17, 'height' : 13.07, 'length' : 9.80},
                        'medium' : {'text' : 18.96, 'height' : 16.34, 'length' : 12.25},
                        'large': {'text' : 23.70, 'height' : 20.43, 'length' : 15.31}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 28.29 , 'height' : 16.83, 'length' : 13.57},
                        'medium' : {'text' : 35.36, 'height' : 21.04, 'length' : 16.97},
                        'large': {'text' : 44.21, 'height' : 26.30, 'length' : 21.21}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 6.47, 'height' : 6.98, 'length' : 7.28},
                        'medium' : {'text' : 8.09, 'height' : 8.73, 'length' : 9.10},
                        'large': {'text' : 10.12, 'height' : 10.91, 'length' : 11.38}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                u: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.09, 'height' : 5.86, 'length' : 6.29},
                        'medium' : {'text' : 13.86, 'height' : 7.33, 'length' : 7.86},
                        'large': {'text' : 17.32, 'height' : 9.16, 'length' : 9.82}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.29, 'height' : 5.37, 'length' : 19.85},
                        'medium' : {'text' : 19.11, 'height' : 6.71, 'length' : 24.81},
                        'large': {'text' : 23.89, 'height' : 8.39, 'length' : 31.02}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.40, 'height' : 6.90, 'length' : 6.34},
                        'medium' : {'text' : 10.50, 'height' : 8.63, 'length' : 7.92},
                        'large': {'text' : 13.13, 'height' : 10.78, 'length' : 9.90}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                v: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 10.14, 'height' : 7.33, 'length' : 7.84},
                        'medium' : {'text' : 12.67, 'height' : 9.16, 'length' : 9.80},
                        'large': {'text' : 15.84, 'height' : 11.45, 'length' : 12.24}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.82, 'height' : 8.46, 'length' : 19.85},
                        'medium' : {'text' : 19.78, 'height' : 10.58, 'length' : 24.81},
                        'large': {'text' : 24.72, 'height' : 13.22, 'length' : 31.02}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.65, 'height' : 6.83, 'length' : 7.63},
                        'medium' : {'text' : 9.57, 'height' : 8.53, 'length' : 9.54},
                        'large': {'text' : 11.96, 'height' : 10.67, 'length' : 11.92}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                w: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 17.12, 'height' : 8.97, 'length' : 8.74},
                        'medium' : {'text' : 21.40, 'height' : 11.21, 'length' : 10.92},
                        'large': {'text' : 26.76, 'height' : 14.02, 'length' : 13.66}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 21.45, 'height' : 8.00, 'length' : 18.86},
                        'medium' : {'text' : 26.82, 'height' : 10.00, 'length' : 23.57},
                        'large': {'text' : 33.52, 'height' : 12.50, 'length' : 29.47}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 13.42, 'height' : 7.10, 'length' : 10.05},
                        'medium' : {'text' : 16.78, 'height' : 8.88, 'length' : 12.56},
                        'large': {'text' : 20.97, 'height' : 11.09, 'length' : 15.70}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                x: {
                   'ModernTalking-Regular' : {
                        'small' : {'text' : 13.03, 'height' : 9.49, 'length' : 8.06},
                        'medium' : {'text' : 16.29, 'height' : 11.87, 'length' : 10.08},
                        'large': {'text' : 20.36, 'height' : 14.83, 'length' : 12.60}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 16.17, 'height' : 7.68, 'length' : 15.86},
                        'medium' : {'text' : 20.22, 'height' : 9.60, 'length' : 19.82},
                        'large': {'text' : 25.27, 'height' : 12.00, 'length' : 24.77}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.50, 'height' : 7.11, 'length' : 7.78},
                        'medium' : {'text' : 11.87, 'height' : 8.88, 'length' : 9.73},
                        'large': {'text' : 14.84, 'height' : 11.10, 'length' : 12.16}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                y: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.38, 'height' : 25.66, 'length' : 9.66},
                        'medium' : {'text' : 25.48, 'height' : 32.07, 'length' : 12.07},
                        'large': {'text' : 31.85, 'height' : 40.09, 'length' : 15.09}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 27.40, 'height' : 32.25, 'length' : 11.01},
                        'medium' : {'text' : 34.26, 'height' : 40.31, 'length' : 13.76},
                        'large': {'text' : 42.82, 'height' : 50.39, 'length' : 17.20}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 6.78, 'height' : 7.21, 'length' : 7.15},
                        'medium' : {'text' : 8.47, 'height' : 9.02, 'length' : 8.94},
                        'large': {'text' : 10.59, 'height' : 11.27, 'length' : 11.17}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                z: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 7.79, 'height' : 5.49, 'length' : 4.70},
                        'medium' : {'text' : 9.74, 'height' : 6.86, 'length' : 5.88},
                        'large': {'text' : 12.18, 'height' : 8.58, 'length' : 7.35}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 17.88, 'height' : 17.42, 'length' : 10.71},
                        'medium' : {'text' : 22.35, 'height' : 21.77, 'length' : 13.39},
                        'large': {'text' : 27.93, 'height' : 27.21, 'length' : 16.74}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.60, 'height' : 6.68, 'length' : 6.68},
                        'medium' : {'text' : 12.00, 'height' : 8.35, 'length' : 8.36},
                        'large': {'text' : 15.00, 'height' : 10.43, 'length' : 10.44}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                1: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 8.90, 'height' : 11.22, 'length' : 1.38},
                        'medium' : {'text' : 11.13, 'height' : 14.03, 'length' : 1.72},
                        'large': {'text' : 13.91, 'height' : 17.54, 'length' : 2.15}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 7.54, 'height' : 10.29, 'length' : 3.46},
                        'medium' : {'text' : 9.43, 'height' : 12.86, 'length' : 4.33},
                        'large': {'text' : 11.79, 'height' : 16.08, 'length' : 5.41}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.84, 'height' : 6.29, 'length' : 2.12 },
                        'medium' : {'text' : 4.80, 'height' : 7.86, 'length' : 2.65},
                        'large': {'text' : 6.01, 'height' : 9.83, 'length' : 3.32}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                2: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 9.95, 'height' : 9.53, 'length' : 4.64},
                        'medium' : {'text' : 12.44, 'height' : 11.91, 'length' : 5.80},
                        'large': {'text' : 15.55, 'height' : 14.89, 'length' : 7.25}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 13.92, 'height' : 10.43, 'length' : 6.98},
                        'medium' : {'text' : 17.40, 'height' : 13.04, 'length' : 8.72},
                        'large': {'text' : 21.74, 'height' : 16.30, 'length' : 10.90}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.62, 'height' : 6.50, 'length' : 4.78},
                        'medium' : {'text' : 9.52, 'height' : 8.12, 'length' : 5.97},
                        'large': {'text' : 11.91, 'height' : 10.15, 'length' : 7.47}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                3: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.78, 'height' : 10.20, 'length' : 6.18},
                        'medium' : {'text' : 14.73, 'height' : 12.75, 'length' : 7.73},
                        'large': {'text' : 18.41, 'height' : 15.94, 'length' : 9.66}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 12.64, 'height' : 10.63, 'length' : 6.37},
                        'medium' : {'text' : 15.80, 'height' : 13.29, 'length' : 7.96},
                        'large': {'text' : 19.75, 'height' : 16.61, 'length' : 9.95}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.46, 'height' : 6.61, 'length' : 4.77},
                        'medium' : {'text' : 10.57, 'height' : 8.26, 'length' : 5.97},
                        'large': {'text' : 13.21, 'height' : 10.33, 'length' : 7.46}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                4: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 12.11, 'height' : 12.27, 'length' : 3.71},
                        'medium' : {'text' : 15.14, 'height' : 15.34, 'length' : 4.64},
                        'large': {'text' : 18.92, 'height' : 19.17, 'length' : 5.80}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.76, 'height' : 13.80, 'length' : 5.89},
                        'medium' : {'text' : 19.70, 'height' : 17.25, 'length' : 7.36},
                        'large': {'text' : 24.62, 'height' : 21.57, 'length' : 9.20}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.95, 'height' : 6.67, 'length' : 5.09},
                        'medium' : {'text' : 9.94, 'height' : 8.34, 'length' : 6.36},
                        'large': {'text' : 12.42, 'height' : 10.42, 'length' : 7.95}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                5: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 8.83, 'height' : 11.92, 'length' : 3.65},
                        'medium' : {'text' : 11.04, 'height' : 14.90, 'length' : 4.56},
                        'large': {'text' : 13.80, 'height' : 18.63, 'length' : 5.70}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.83, 'height' : 10.98, 'length' : 7.86},
                        'medium' : {'text' : 19.78, 'height' : 13.72, 'length' : 9.82},
                        'large': {'text' : 24.73, 'height' : 17.15, 'length' : 12.28}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.39, 'height' : 6.55, 'length' : 4.46},
                        'medium' : {'text' : 9.23, 'height' : 8.19, 'length' : 5.57},
                        'large': {'text' : 11.54, 'height' : 10.24, 'length' : 6.97}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                6: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 8.98, 'height' : 10.47, 'length' : 3.62},
                        'medium' : {'text' : 11.23, 'height' : 13.09, 'length' : 4.52},
                        'large': {'text' : 14.03, 'height' : 16.36, 'length' : 5.65}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 14.07, 'height' : 11.36, 'length' : 6.65},
                        'medium' : {'text' : 17.58, 'height' : 14.21, 'length' : 8.31},
                        'large': {'text' : 21.98, 'height' : 17.76, 'length' : 10.39}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.30, 'height' : 6.78, 'length' : 4.65},
                        'medium' : {'text' : 11.63, 'height' : 8.47, 'length' : 5.81},
                        'large': {'text' : 14.54, 'height' : 10.59, 'length' : 7.26}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                7: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 6.26, 'height' : 9.01, 'length' : 3.32},
                        'medium' : {'text' : 7.83, 'height' : 11.26, 'length' : 4.15},
                        'large': {'text' : 9.79, 'height' : 14.08, 'length' : 5.19}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 10.29, 'height' : 10.97, 'length' : 5.24},
                        'medium' : {'text' : 12.87, 'height' : 13.71, 'length' : 6.55},
                        'large': {'text' : 16.08, 'height' : 17.14, 'length' : 8.19}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.85, 'height' : 6.80, 'length' : 5.06},
                        'medium' : {'text' : 7.31, 'height' : 8.50, 'length' : 6.32},
                        'large': {'text' : 9.14, 'height' : 10.62, 'length' : 7.90}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                8: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 14.72, 'height' : 10.71, 'length' : 3.20},
                        'medium' : {'text' : 18.40, 'height' : 13.38, 'length' : 3.99},
                        'large': {'text' : 22.99, 'height' : 16.73, 'length' : 4.99}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 17.04, 'height' : 11.92, 'length' : 5.61},
                        'medium' : {'text' : 21.29, 'height' : 14.89, 'length' : 7.01},
                        'large': {'text' : 26.62, 'height' : 18.62, 'length' : 8.77}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.22, 'height' : 6.70, 'length' : 5.10},
                        'medium' : {'text' : 14.03, 'height' : 8.37, 'length' : 6.38},
                        'large': {'text' : 17.53, 'height' : 10.47, 'length' : 7.98}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                9: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 12.51, 'height' : 9.85, 'length' : 4.46},
                        'medium' : {'text' : 15.63, 'height' : 12.31, 'length' : 5.58},
                        'large': {'text' : 19.54, 'height' : 15.39, 'length' : 6.97}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 13.71, 'height' : 11.50, 'length' : 4.46},
                        'medium' : {'text' : 17.13, 'height' : 14.38, 'length' : 5.58},
                        'large': {'text' : 21.41, 'height' : 17.97, 'length' : 6.97}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.30, 'height' : 6.78, 'length' : 4.65},
                        'medium' : {'text' : 11.63, 'height' : 8.47, 'length' : 5.81},
                        'large': {'text' : 14.54, 'height' : 10.59 , 'length' : 7.26}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                0: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 14.52, 'height' : 10.79, 'length' : 5.60},
                        'medium' : {'text' : 18.15, 'height' : 13.49, 'length' : 7.00},
                        'large': {'text' : 22.69, 'height' : 16.87, 'length' : 8.75}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 14.54, 'height' : 10.68, 'length' : 7.23},
                        'medium' : {'text' : 18.17, 'height' : 13.36, 'length' : 9.03},
                        'large': {'text' : 22.72, 'height' : 16.69, 'length' : 11.29}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.10, 'height' : 6.71, 'length' : 5.58},
                        'medium' : {'text' : 11.37, 'height' : 8.39, 'length' : 6.98},
                        'large': {'text' : 14.21, 'height' : 10.49, 'length' : 8.72}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '!': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 6.83, 'height' : 14.58, 'length' : 0.13},
                        'medium' : {'text' : 8.53, 'height' : 18.23, 'length' : 0.17},
                        'large': {'text' : 10.67, 'height' : 22.79, 'length' : 0.21}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 4.10, 'height' : 10.26, 'length' : 3.41},
                        'medium' : {'text' : 5.12, 'height' : 12.83, 'length' : 4.26},
                        'large': {'text' : 6.40, 'height' : 16.03, 'length' : 5.33}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.05, 'height' : 7.03, 'length' : 1.39},
                        'medium' : {'text' : 3.81, 'height' : 8.79, 'length' : 1.74},
                        'large': {'text' : 4.76, 'height' : 10.98, 'length' : 2.17}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '@': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 30.31, 'height' : 14.67, 'length' : 14.13},
                        'medium' : {'text' : 37.89, 'height' : 18.34, 'length' : 17.67},
                        'large': {'text' : 47.36, 'height' : 22.92, 'length' : 22.08}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 20.43, 'height' : 9.25, 'length' : 8.60},
                        'medium' : {'text' : 25.54, 'height' : 11.56, 'length' : 10.75},
                        'large': {'text' : 31.92, 'height' : 14.45, 'length' : 13.44}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 17.20, 'height' : 6.96, 'length' : 8.23},
                        'medium' : {'text' : 21.50, 'height' : 8.70, 'length' : 10.29},
                        'large': {'text' : 26.88, 'height' : 10.87, 'length' : 12.86}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '#': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 15.70, 'height' : 8.10, 'length' : 8.64},
                        'medium' : {'text' : 19.63, 'height' : 10.12, 'length' : 10.80},
                        'large': {'text' : 24.53, 'height' : 12.66, 'length' : 13.51}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 17.20, 'height' : 8.48, 'length' : 8.80},
                        'medium' : {'text' : 21.50, 'height' : 10.60, 'length' : 11.00},
                        'large': {'text' : 26.87, 'height' : 13.25, 'length' : 13.75}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 12.21, 'height' : 6.96, 'length' : 6.84},
                        'medium' : {'text' : 15.26, 'height' : 8.70, 'length' : 8.55},
                        'large': {'text' : 19.08, 'height' : 10.87, 'length' : 10.68}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '$': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 33.62, 'height' : 20.27, 'length' : 13.17},
                        'medium' : {'text' : 42.03, 'height' : 25.34, 'length' : 16.46},
                        'large': {'text' : 52.53, 'height' : 31.68, 'length' : 20.58}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 14.38, 'height' : 16.04, 'length' : 3.86},
                        'medium' : {'text' : 17.97, 'height' : 20.05, 'length' : 4.83},
                        'large': {'text' : 22.47, 'height' : 25.06, 'length' : 6.04}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.18, 'height' : 9.15, 'length' : 4.98},
                        'medium' : {'text' : 11.48, 'height' : 11.44, 'length' : 6.23},
                        'large': {'text' : 14.35, 'height' : 14.29, 'length' : 7.79}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '%': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 22.91, 'height' : 18.95, 'length' : 10.02},
                        'medium' : {'text' : 28.64, 'height' : 23.68, 'length' : 12.53},
                        'large': {'text' : 35.79, 'height' : 29.60, 'length' : 15.66}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 10.26 , 'height' : 10.34, 'length' : 5.65},
                        'medium' : {'text' : 12.82, 'height' : 12.92, 'length' : 7.06},
                        'large': {'text' : 16.03, 'height' : 16.15, 'length' : 8.82}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.83, 'height' : 6.95, 'length' : 6.61},
                        'medium' : {'text' : 11.48, 'height' : 8.69, 'length' : 8.26},
                        'large': {'text' : 15.36, 'height' : 10.86, 'length' : 10.32}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '^': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 5.31, 'height' : 4.17, 'length' : 6.48},
                        'medium' : {'text' : 6.64, 'height' : 5.21, 'length' : 8.10},
                        'large': {'text' : 8.30, 'height' : 6.51, 'length' : 10.12}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 0 , 'height' : 0, 'length' : 0},
                        'medium' : {'text' : 0, 'height' : 0, 'length' : 0},
                        'large': {'text' : 0, 'height' : 0, 'length' : 0}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.12, 'height' : 2.65, 'length' : 3.91},
                        'medium' : {'text' : 3.91, 'height' : 3.32, 'length' : 4.89},
                        'large': {'text' : 4.88, 'height' : 4.15, 'length' : 6.12}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '&': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 23.50, 'height' : 19.91, 'length' : 11.11},
                        'medium' : {'text' : 29.37, 'height' : 24.88, 'length' : 13.88},
                        'large': {'text' : 36.72, 'height' : 31.10, 'length' : 17.35}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 0 , 'height' : 0, 'length' : 0},
                        'medium' : {'text' : 0, 'height' : 0, 'length' : 0},
                        'large': {'text' : 0, 'height' : 0, 'length' : 0}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.60, 'height' : 6.87, 'length' : 5.72},
                        'medium' : {'text' : 14.49, 'height' : 8.58, 'length' : 7.15},
                        'large': {'text' : 18.12, 'height' : 10.73, 'length' : 8.94}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '*': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 17.05, 'height' : 7.56, 'length' : 6.13},
                        'medium' : {'text' : 21.31, 'height' : 9.45, 'length' : 7.67},
                        'large': {'text' : 26.64, 'height' : 11.81, 'length' : 9.58}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 7.73, 'height' : 4.59, 'length' : 4.83},
                        'medium' : {'text' : 9.66, 'height' : 5.74, 'length' : 6.03},
                        'large': {'text' : 12.07, 'height' : 7.17, 'length' : 7.54}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 4.50, 'height' : 3.07, 'length' : 4.38},
                        'medium' : {'text' : 5.63, 'height' : 3.84, 'length' : 5.48},
                        'large': {'text' : 7.04, 'height' : 4.80, 'length' : 6.85}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '(': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 10.35, 'height' : 18.87, 'length' : 3.17},
                        'medium' : {'text' : 12.94, 'height' : 23.58, 'length' : 3.97},
                        'large': {'text' : 16.17, 'height' : 29.48, 'length' : 4.96}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 26.03, 'height' : 8.55, 'length' : 42.17},
                        'medium' : {'text' : 32.53, 'height' : 10.69, 'length' : 52.71},
                        'large': {'text' : 40.67, 'height' : 13.36, 'length' : 65.89}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.28, 'height' : 9.53, 'length' : 2.94},
                        'medium' : {'text' : 6.60, 'height' : 11.91, 'length' : 3.68},
                        'large': {'text' : 8.25, 'height' : 14.89, 'length' : 4.60}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                ')': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.08, 'height' : 20.79, 'length' : 3.06},
                        'medium' : {'text' : 13.86, 'height' : 25.99, 'length' : 3.82},
                        'large': {'text' : 17.32, 'height' : 32.49, 'length' : 4.78}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 27.01, 'height' : 10.33, 'length' : 41.70},
                        'medium' : {'text' : 33.76, 'height' : 12.91, 'length' : 52.13},
                        'large': {'text' : 42.20, 'height' : 16.14, 'length' : 65.16 }
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.34, 'height' : 9.66, 'length' : 2.91},
                        'medium' : {'text' : 6.68, 'height' : 12.08, 'length' : 3.64},
                        'large': {'text' : 8.35, 'height' : 15.10, 'length' : 4.55}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '?': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 10.70, 'height' : 15.42, 'length' : 3.29},
                        'medium' : {'text' : 13.38, 'height' : 19.27, 'length' : 4.11},
                        'large': {'text' : 16.73, 'height' : 24.09, 'length' : 5.13}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 6.68, 'height' : 10.72, 'length' : 4.91},
                        'medium' : {'text' : 8.35, 'height' : 13.40, 'length' : 6.14},
                        'large': {'text' : 10.43, 'height' : 16.75, 'length' : 7.68}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 6.65, 'height' : 7.13, 'length' : 4.66},
                        'medium' : {'text' : 8.31, 'height' : 8.91, 'length' : 5.82},
                        'large': {'text' : 10.38, 'height' : 11.14, 'length' : 7.28}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '+': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 7.47, 'height' : 8.52, 'length' : 5.52},
                        'medium' : {'text' : 9.33, 'height' : 10.66, 'length' : 6.90},
                        'large': {'text' : 11.66, 'height' : 13.32, 'length' : 8.62}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 4.86, 'height' : 5.93, 'length' : 3.55},
                        'medium' : {'text' : 6.07 , 'height' : 7.41, 'length' : 4.44},
                        'large': {'text' : 7.59 , 'height' : 9.27, 'length' : 5.55}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.21, 'height' : 4.22, 'length' : 5.07},
                        'medium' : {'text' : 4.01, 'height' : 5.28, 'length' : 6.34},
                        'large': {'text' : 5.01, 'height' : 6.60, 'length' : 7.92}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '=': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 7.79, 'height' : 3.28, 'length' : 7.68},
                        'medium' : {'text' : 9.73, 'height' : 4.10, 'length' : 9.60},
                        'large': {'text' : 12.17, 'height' : 5.12, 'length' : 12.01}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 3.79, 'height' : 2.60, 'length' : 3.95},
                        'medium' : {'text' : 4.74, 'height' : 3.25, 'length' : 4.94},
                        'large': {'text' : 5.92, 'height' : 4.06, 'length' : 6.18}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 4.40, 'height' : 2.12, 'length' : 5.32},
                        'medium' : {'text' : 5.50, 'height' : 2.65, 'length' : 6.65},
                        'large': {'text' : 6.88, 'height' : 3.32, 'length' : 8.31}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '-': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 3.28, 'height' : 0.22, 'length' : 5.67},
                        'medium' : {'text' : 4.10, 'height' : 0.28, 'length' : 7.09},
                        'large': {'text' : 5.12, 'height' : 0.35, 'length' : 8.86}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 2.34, 'height' : 0.00, 'length' : 4.59},
                        'medium' : {'text' : 2.93, 'height' : 0.00, 'length' : 5.74},
                        'large': {'text' : 3.66, 'height' : 0.00, 'length' : 7.18}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 1.45, 'height' : 0.00, 'length' : 3.84},
                        'medium' : {'text' : 1.81, 'height' : 0.00, 'length' : 4.80},
                        'large': {'text' : 2.26, 'height' : 0.00, 'length' : 6.00}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '_': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 4.06, 'height' : 0.18, 'length' : 7.43},
                        'medium' : {'text' : 5.07, 'height' : 0.22, 'length' : 9.28},
                        'large': {'text' : 6.34, 'height' : 0.28, 'length' : 11.60}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 0 , 'height' : 0, 'length' : 0},
                        'medium' : {'text' : 0, 'height' : 0, 'length' : 0},
                        'large': {'text' : 0, 'height' : 0, 'length' : 0}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 2.35, 'height' : 0.00, 'length' : 5.61},
                        'medium' : {'text' : 2.94, 'height' : 0.00, 'length' : 7.01},
                        'large': {'text' : 3.67, 'height' : 0.00, 'length' : 8.76}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                '/': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 7.56, 'height' : 14.14, 'length' : 4.26},
                        'medium' : {'text' : 9.45, 'height' : 17.67, 'length' : 5.33},
                        'large': {'text' : 11.82, 'height' : 22.09, 'length' : 6.66}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 0 , 'height' : 0, 'length' : 0},
                        'medium' : {'text' : 0, 'height' : 0, 'length' : 0},
                        'large': {'text' : 0, 'height' : 0, 'length' : 0}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.28, 'height' : 8.97, 'length' : 6.15},
                        'medium' : {'text' : 6.60, 'height' : 11.22, 'length' : 7.69},
                        'large': {'text' : 8.24, 'height' : 14.02, 'length' : 9.61}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                A: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 21.39, 'height' : 18.63, 'length' : 6.15},
                        'medium' : {'text' : 26.74, 'height' : 23.28, 'length' : 7.69},
                        'large': {'text' : 33.42, 'height' : 29.11, 'length' : 9.62}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.72, 'height' : 6.68, 'length' : 12.85},
                        'medium' : {'text' : 19.64, 'height' : 8.35, 'length' : 16.06},
                        'large': {'text' : 24.55, 'height' : 10.43, 'length' : 20.08}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.53, 'height' : 7.00, 'length' : 8.59},
                        'medium' : {'text' : 13.16, 'height' : 8.75, 'length' : 10.74},
                        'large': {'text' : 16.45, 'height' : 10.94, 'length' : 13.42}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                B: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 24.15, 'height' : 15.75, 'length' : 6.92},
                        'medium' : {'text' : 30.19, 'height' : 19.68, 'length' : 8.64},
                        'large': {'text' : 37.73, 'height' : 24.60, 'length' : 10.81}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 27.20, 'height' : 16.73, 'length' : 10.53},
                        'medium' : {'text' : 34.00, 'height' : 20.91, 'length' : 13.17},
                        'large': {'text' : 42.50, 'height' : 26.14 , 'length' : 16.46}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 14.58, 'height' : 6.55, 'length' : 7.48},
                        'medium' : {'text' : 18.22, 'height' : 8.18, 'length' : 9.35},
                        'large': {'text' : 22.77, 'height' : 10.23, 'length' : 11.69}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                C: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.19, 'height' : 16.70, 'length' : 8.77},
                        'medium' : {'text' : 25.24, 'height' : 20.88, 'length' : 10.97},
                        'large': {'text' : 31.55, 'height' : 26.10, 'length' : 13.71}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 11.83, 'height' : 7.79, 'length' : 10.73},
                        'medium' : {'text' : 14.79, 'height' : 9.73, 'length' : 13.42},
                        'large': {'text' : 18.48, 'height' : 12.17, 'length' : 16.77}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.03, 'height' : 6.81, 'length' : 8.32},
                        'medium' : {'text' : 11.28, 'height' : 8.52, 'length' : 10.40},
                        'large': {'text' : 14.11, 'height' : 10.64, 'length' : 13.00}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                D: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 25.97, 'height' : 15.65, 'length' : 10.72},
                        'medium' : {'text' : 32.46, 'height' : 19.56, 'length' : 13.40},
                        'large': {'text' : 40.58, 'height' : 24.45, 'length' : 16.75}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 24.28, 'height' : 13.34, 'length' : 12.24},
                        'medium' : {'text' : 30.35, 'height' : 16.68, 'length' : 15.30},
                        'large': {'text' : 37.94, 'height' : 20.85, 'length' : 19.12}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.11, 'height' : 6.59, 'length' : 7.40},
                        'medium' : {'text' : 13.88, 'height' : 8.24, 'length' : 9.25},
                        'large': {'text' : 17.36, 'height' : 10.30, 'length' : 11.57}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                E: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.32, 'height' : 15.06, 'length' : 10.37},
                        'medium' : {'text' : 25.40, 'height' : 18.83, 'length' : 12.97},
                        'large': {'text' : 31.75, 'height' : 23.54, 'length' : 16.21}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 15.01, 'height' : 6.77, 'length' : 11.42},
                        'medium' : {'text' : 18.76, 'height' : 8.46, 'length' : 14.27},
                        'large': {'text' : 23.45, 'height' : 10.58 , 'length' : 17.84}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.34, 'height' : 6.49, 'length' : 6.59},
                        'medium' : {'text' : 12.93 , 'height' : 8.11, 'length' : 8.23},
                        'large': {'text' : 16.16, 'height' : 10.14, 'length' : 10.29}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                F: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 24.14, 'height' : 17.35, 'length' : 12.88},
                        'medium' : {'text' : 30.18, 'height' : 21.68, 'length' : 16.10},
                        'large': {'text' : 37.73, 'height' : 27.10, 'length' : 20.12}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 29.12, 'height' : 21.25, 'length' : 9.47},
                        'medium' : {'text' : 36.41, 'height' : 26.57, 'length' : 11.83},
                        'large': {'text' : 45.51, 'height' : 33.21, 'length' : 14.79}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.93, 'height' : 7.05, 'length' : 6.53},
                        'medium' : {'text' : 9.91, 'height' : 8.82, 'length' : 8.16},
                        'large': {'text' : 12.39, 'height' : 11.02, 'length' : 10.20}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                G: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 27.27, 'height' : 19.27, 'length' : 7.88},
                        'medium' : {'text' : 34.09, 'height' : 24.09, 'length' : 9.85},
                        'large': {'text' : 42.61, 'height' : 30.12, 'length' : 12.31}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 32.93, 'height' : 20.75, 'length' : 12.29},
                        'medium' : {'text' : 41.17, 'height' : 25.94, 'length' : 15.36},
                        'large': {'text' : 51.46, 'height' : 32.43, 'length' : 19.20}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.11, 'height' : 7.23, 'length' : 7.44},
                        'medium' : {'text' : 13.89, 'height' : 9.03, 'length' : 9.30},
                        'large': {'text' : 17.36, 'height' : 11.29, 'length' : 11.63}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                H: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 18.40, 'height' : 13.75, 'length' : 7.64},
                        'medium' : {'text' : 23.00, 'height' : 17.18, 'length' : 9.55},
                        'large': {'text' : 28.75, 'height' : 21.48, 'length' : 11.94}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 28.41, 'height' : 18.72, 'length' : 10.64},
                        'medium' : {'text' : 35.51, 'height' : 23.39, 'length' : 13.30},
                        'large': {'text' : 44.39, 'height' : 29.24, 'length' : 16.63}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.61, 'height' : 7.23, 'length' : 6.38},
                        'medium' : {'text' : 12.01, 'height' : 9.03, 'length' : 7.97},
                        'large': {'text' : 15.01, 'height' : 11.29, 'length' : 9.97}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                I: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 12.73, 'height' : 16.83, 'length' : 3.06},
                        'medium' : {'text' : 15.91, 'height' : 21.04, 'length' : 3.83},
                        'large': {'text' : 19.89, 'height' : 26.30, 'length' : 4.79}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 11.03, 'height' : 13.00, 'length' : 10.54},
                        'medium' : {'text' : 13.78, 'height' : 16.25, 'length' : 13.17},
                        'large': {'text' : 17.23, 'height' : 20.31, 'length' : 16.47}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 3.61, 'height' : 7.09, 'length' : 1.50},
                        'medium' : {'text' : 4.52, 'height' : 8.86, 'length' : 1.88},
                        'large': {'text' : 5.65, 'height' : 11.07, 'length' : 2.34}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                J: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 21.31, 'height' : 17.68, 'length' : 8.30},
                        'medium' : {'text' : 26.63, 'height' : 22.10, 'length' : 10.38},
                        'large': {'text' : 33.29, 'height' : 27.62, 'length' : 12.97}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 19.63, 'height' : 21.34, 'length' : 8.32},
                        'medium' : {'text' : 24.53, 'height' : 26.67, 'length' : 10.40},
                        'large': {'text' : 30.67, 'height' : 33.34, 'length' : 13.00}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.55, 'height' : 6.94, 'length' : 5.15},
                        'medium' : {'text' : 6.94, 'height' : 8.67, 'length' : 6.43},
                        'large': {'text' : 8.67, 'height' : 10.84, 'length' : 8.04}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                K: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 19.94, 'height' : 14.97, 'length' : 10.24},
                        'medium' : {'text' : 24.92, 'height' : 18.71, 'length' : 12.80},
                        'large': {'text' : 31.15, 'height' : 23.39, 'length' : 16.00}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.72, 'height' : 7.11, 'length' : 6.17},
                        'medium' : {'text' : 12.15, 'height' : 8.89, 'length' : 7.71},
                        'large': {'text' : 15.18, 'height' : 11.11, 'length' : 9.64}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 35.81, 'height' : 24.79, 'length' : 18.40},
                        'medium' : {'text' : 44.76, 'height' : 30.99, 'length' : 23.00},
                        'large': {'text' : 55.95, 'height' : 38.73, 'length' : 28.75}
                    },
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                L: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 11.39, 'height' : 16.80, 'length' : 5.51},
                        'medium' : {'text' : 14.24, 'height' : 21.01, 'length' : 6.89},
                        'large': {'text' : 17.80, 'height' : 26.26, 'length' : 8.61}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 27.51, 'height' : 21.93, 'length' : 10.90},
                        'medium' : {'text' : 34.38, 'height' : 27.41, 'length' : 13.62},
                        'large': {'text' : 42.98, 'height' : 34.27, 'length' : 17.03}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 5.46, 'height' : 6.97, 'length' : 5.41},
                        'medium' : {'text' : 6.83, 'height' : 8.72, 'length' : 6.76},
                        'large': {'text' : 8.54, 'height' : 10.90, 'length' : 8.45}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                M: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 30.11, 'height' : 18.84, 'length' : 9.09},
                        'medium' : {'text' : 37.64, 'height' : 23.55, 'length' : 11.36},
                        'large': {'text' : 47.05, 'height' : 29.44, 'length' : 14.20}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 23.44, 'height' : 9.19, 'length' : 15.94},
                        'medium' : {'text' : 29.30, 'height' : 11.49, 'length' : 19.93},
                        'large': {'text' : 36.62, 'height' : 14.37, 'length' : 24.91}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.84, 'height' : 6.75, 'length' : 6.45},
                        'medium' : {'text' : 13.55, 'height' : 8.44, 'length' : 8.07},
                        'large': {'text' : 16.94, 'height' : 10.54, 'length' : 10.08}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                N: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 23.29, 'height' : 19.13, 'length' : 6.41},
                        'medium' : {'text' : 29.11, 'height' : 23.91, 'length' : 8.02},
                        'large': {'text' : 36.39, 'height' : 29.89, 'length' : 10.02}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 18.26, 'height' : 7.20, 'length' : 14.94},
                        'medium' : {'text' : 22.83, 'height' : 9.00, 'length' : 18.68},
                        'large': {'text' : 28.54, 'height' : 11.26, 'length' : 23.35}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.43, 'height' : 7.17, 'length' : 6.03},
                        'medium' : {'text' : 14.28, 'height' : 8.96, 'length' : 7.53},
                        'large': {'text' : 17.85, 'height' : 11.20, 'length' : 9.42}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                O: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 21.76, 'height' : 15.46, 'length' : 5.36},
                        'medium' : {'text' : 27.20, 'height' : 19.32, 'length' : 6.70},
                        'large': {'text' : 34.00, 'height' : 24.15, 'length' : 8.37}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 19.15, 'height' : 7.44, 'length' : 14.02},
                        'medium' : {'text' : 23.94, 'height' : 9.31, 'length' : 17.52},
                        'large': {'text' : 29.93, 'height' : 11.63, 'length' : 21.90}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 10.60, 'height' : 7.07, 'length' : 7.65},
                        'medium' : {'text' : 13.25, 'height' : 8.84, 'length' : 9.57},
                        'large': {'text' : 16.56, 'height' : 11.05, 'length' : 11.96}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                P: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 30.94, 'height' : 20.91, 'length' : 8.43},
                        'medium' : {'text' : 38.68, 'height' : 26.13, 'length' : 10.54},
                        'large': {'text' : 48.35, 'height' : 32.67, 'length' : 13.17}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 24.17, 'height' : 14.14, 'length' : 12.14},
                        'medium' : {'text' : 30.21, 'height' : 17.67, 'length' : 15.18},
                        'large': {'text' : 37.76, 'height' : 22.09, 'length' : 18.97}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.86, 'height' : 7.00, 'length' : 5.50},
                        'medium' : {'text' : 11.07, 'height' : 8.75, 'length' : 6.87},
                        'large': {'text' : 13.84, 'height' : 10.94, 'length' : 8.59}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                Q: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 24.28, 'height' : 19.19, 'length' : 5.06},
                        'medium' : {'text' : 30.35, 'height' : 23.99, 'length' : 6.32},
                        'large': {'text' : 37.94, 'height' : 29.99, 'length' : 7.90}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 27.95, 'height' : 15.61, 'length' : 11.10},
                        'medium' : {'text' : 34.94, 'height' : 19.52, 'length' : 13.88},
                        'large': {'text' : 43.68, 'height' : 24.40, 'length' : 17.34}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 12.31, 'height' : 7.34, 'length' : 7.76},
                        'medium' : {'text' : 15.38, 'height' : 9.18, 'length' : 9.70},
                        'large': {'text' : 19.23, 'height' : 11.47, 'length' : 12.13}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                R: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 25.78, 'height' : 16.39, 'length' : 5},
                        'medium' : {'text' : 32.23, 'height' : 20.49, 'length' : 7},
                        'large': {'text' : 40.28, 'height' : 25.61, 'length' : 8}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 14.44, 'height' : 8.82, 'length' : 9.56},
                        'medium' : {'text' : 18.04, 'height' : 11.02, 'length' : 11.95},
                        'large': {'text' : 22.55, 'height' : 13.78, 'length' : 14.94}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 11.32, 'height' : 7.09, 'length' : 6.89},
                        'medium' : {'text' : 14.15, 'height' : 8.87, 'length' : 8.61},
                        'large': {'text' : 17.69, 'height' : 11.08, 'length' : 10.77}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                S: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 27.32, 'height' : 20.41, 'length' : 14.25},
                        'medium' : {'text' : 34.15, 'height' : 25.52, 'length' : 17.81},
                        'large': {'text' : 42.69, 'height' : 31.89, 'length' : 22.27}
                    },
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 16.71, 'height' : 9.26, 'length' : 9.77},
                        'medium' : {'text' : 20.89, 'height' : 11.58, 'length' : 12.21},
                        'large': {'text' : 26.11, 'height' : 14.47, 'length' : 15.27 }
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.80, 'height' : 7.15, 'length' : 6.02},
                        'medium' : {'text' : 10.99, 'height' : 8.94, 'length' : 7.53},
                        'large': {'text' : 13.74, 'height' : 11.17, 'length' : 9.41}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                T: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.01, 'height' : 18.13, 'length' : 20.56},
                        'medium' : {'text' : 25.02, 'height' : 22.67, 'length' : 25.70},
                        'large': {'text' : 31.27, 'height' : 28.34, 'length' : 32.12}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 20.50, 'height' : 14.12, 'length' : 13.21},
                        'medium' : {'text' : 25.62, 'height' : 17.65, 'length' : 16.51},
                        'large': {'text' : 32.03, 'height' : 22.07, 'length' : 20.64}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 6.47, 'height' : 6.98, 'length' : 7.28},
                        'medium' : {'text' : 8.09, 'height' : 8.73, 'length' : 9.10},
                        'large': {'text' : 10.12, 'height' : 10.91, 'length' : 11.38}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                U: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 24.90, 'height' : 17.79, 'length' : 8.67},
                        'medium' : {'text' : 31.13, 'height' : 22.24, 'length' : 10.83},
                        'large': {'text' : 38.91, 'height' : 27.80, 'length' : 13.54}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 21.36, 'height' : 10.02, 'length' : 15.77},
                        'medium' : {'text' : 26.70, 'height' : 12.52, 'length' : 19.71},
                        'large': {'text' : 33.38, 'height' : 15.65, 'length' : 24.63}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 8.40, 'height' : 6.90, 'length' : 6.34},
                        'medium' : {'text' : 10.50, 'height' : 8.63, 'length' : 7.92},
                        'large': {'text' : 13.13, 'height' : 10.78, 'length' : 9.90}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                V: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.69, 'height' : 19.85, 'length' : 8.24},
                        'medium' : {'text' : 25.86, 'height' : 24.82, 'length' : 10.30},
                        'large': {'text' : 32.33, 'height' : 31.02, 'length' : 12.88}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 17.00, 'height' : 8.52, 'length' : 17.77},
                        'medium' : {'text' : 21.25, 'height' : 10.65, 'length' : 22.21},
                        'large': {'text' : 26.56, 'height' : 13.31, 'length' : 27.76}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 7.65, 'height' : 6.83, 'length' : 7.63},
                        'medium' : {'text' : 9.57, 'height' : 8.53, 'length' : 9.54},
                        'large': {'text' : 11.96, 'height' : 10.67, 'length' : 11.92}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                W: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 33.57, 'height' : 21.64, 'length' : 10.62},
                        'medium' : {'text' : 41.97, 'height' : 27.05, 'length' : 13.27},
                        'large': {'text' : 52.46, 'height' : 33.82, 'length' : 16.59}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 23.71, 'height' : 8.91, 'length' : 20.02},
                        'medium' : {'text' : 29.64, 'height' : 11.13, 'length' : 25.02},
                        'large': {'text' : 37.05, 'height' : 13.92, 'length' : 31.28}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 13.42, 'height' : 7.10, 'length' : 10.05},
                        'medium' : {'text' : 16.78, 'height' : 8.88, 'length' : 12.56},
                        'large': {'text' : 20.97, 'height' : 11.09, 'length' : 15.70}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                'X': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 20.40, 'height' : 20.06, 'length' : 9.69},
                        'medium' : {'text' : 25.50, 'height' : 25.08, 'length' : 12.11},
                        'large': {'text' : 31.88, 'height' : 31.34, 'length' : 15.14}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 16.28, 'height' : 7.68, 'length' : 15.95},
                        'medium' : {'text' : 20.35, 'height' : 9.60, 'length' : 19.93},
                        'large': {'text' : 25.43, 'height' : 12.01, 'length' : 24.92}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.50, 'height' : 7.11, 'length' : 7.78},
                        'medium' : {'text' : 11.87, 'height' : 8.88, 'length' : 9.73},
                        'large': {'text' : 14.84, 'height' : 11.10, 'length' : 12.16}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                Y: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 17.50, 'height' : 15.23, 'length' : 6.86},
                        'medium' : {'text' : 21.87, 'height' : 19.04, 'length' : 8.58},
                        'large': {'text' : 27.34, 'height' : 23.80, 'length' : 10.72}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 31.76, 'height' : 20.68, 'length' : 13.18},
                        'medium' : {'text' : 39.70, 'height' : 25.85, 'length' : 16.48},
                        'large': {'text' : 49.63, 'height' : 32.31, 'length' : 20.60}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 6.78, 'height' : 7.21, 'length' : 7.15},
                        'medium' : {'text' : 8.47, 'height' : 9.02, 'length' : 8.94},
                        'large': {'text' : 10.59, 'height' : 11.27, 'length' : 11.17}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                Z: {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 18.88, 'height' : 13.94, 'length' : 11.13},
                        'medium' : {'text' : 23.61, 'height' : 17.42, 'length' : 13.91},
                        'large': {'text' : 29.51, 'height' : 21.78, 'length' : 17.39}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 26.19, 'height' : 16.55, 'length' : 11.73},
                        'medium' : {'text' : 32.74, 'height' : 20.68, 'length' : 14.67},
                        'large': {'text' : 40.93, 'height' : 25.86, 'length' : 18.33}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 9.60, 'height' : 6.68, 'length' : 6.68},
                        'medium' : {'text' : 12.00, 'height' : 8.35, 'length' : 8.36},
                        'large': {'text' : 15.00, 'height' : 10.43, 'length' : 10.44}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                ' ': {
                    'ModernTalking-Regular' : {
                        'small' : {'text' : 0.00, 'height' : 0.00, 'length' : 5.00},
                        'medium' : {'text' : 0.00, 'height' : 0.00, 'length' : 6.25},
                        'large': {'text' : 0.00, 'height' : 0.00, 'length' : 7.81}
                    },
                    'thistails-regular' : {
                        'small' : {'text' : 8, 'height' : 6, 'length' : 6},
                        'medium' : {'text' : 10, 'height' : 7, 'length' : 8},
                        'large': {'text' : 13, 'height' : 9, 'length' : 10}
                    },
                    'Shorelines-Script-Bold' : {
                        'small' : {'text' : 0.00, 'height' : 0, 'length' : 5.00},
                        'medium' : {'text' : 0, 'height' : 0, 'length' : 6.25},
                        'large': {'text' : 0, 'height' : 0, 'length' : 7.81}
                    },
                    'thistails-sans' : {
                        'small' : {'text' : 0.00, 'height' : 0.00, 'length' : 5.00},
                        'medium' : {'text' : 0.00, 'height' : 0.00, 'length' : 6.25},
                        'large': {'text' : 0.00, 'height' : 0.00, 'length' : 7.81}
                    },
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
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
            $(elem).keydown(function(event) {
                if(event.keyCode == 13 && newLines >= 2) {
                    return false;
                }
            });
            var textareaValue = $(elem).val();
            $("#gb_neon_text").html(textareaValue.replace(/\r?\n/g, '<br />'));
            neonConfigurations.price = price;
            neonConfigurations.text = $(elem).val();
            $this.calculation();
        },
        changeFont: function(elem, fontType) {
            $("#gb_neon_text").css("font-family", `'${fontType}.woff'`);
            $('.sbt_font_options ul li').removeClass('active_font');
            $(elem).parents('li').addClass('active_font');
            neonConfigurations.price = price;
            neonConfigurations.font = fontType;
            $this.calculation();
        },
        changeColor: function(elem, fontColor) {
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
        changeSize: function(elem, size) {
            neonConfigurations.price = price;
            neonConfigurations.size = size;
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
            $this.calculation();
        },
        changeBackingType: function(elem, backingType) {
            $('.sbt_text_font a').removeClass('active_btype');
            $(elem).addClass('active_btype');
            neonConfigurations.backingType = backingType;
            $this.calculation();
        },
        changeBackingColor: function(elem, backingColor) {
            $('.sbt_text_font a').removeClass('active_bcolor');
            $(elem).addClass('active_bcolor');
            neonConfigurations.backingColor = backingColor;
        },
        changeFixture: function(elem, fixture) {
            $('.sbt_text_font a').removeClass('active_fixture');
            $(elem).addClass('active_fixture');
            neonConfigurations.fixture = fixture;
        },
        changeDelivery: function(elem, delivery) {
            $('.sbt_text_font a').removeClass('active_delivery');
            $(elem).addClass('active_delivery');
            neonConfigurations.delivery = delivery;
            $this.calculation();
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
                neonConfigurations.slideImg = slides[slideIndex-1].src;
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
            var i, j;
            var font = neonConfigurations.font;
            var string = neonConfigurations.text;
            var size = neonConfigurations.size;
            var backingType = neonConfigurations.backingType;
            var delivery = neonConfigurations.delivery;
            var price = 0, length = 0,maxLength = 0,avgHeight = 0;
            var lines = $('#gb_default_value').val().split('\n');
            for(var j = 0;j < lines.length;j++){
                var length = 0, height = 0, maxHeight = 0;
                for(i = 0; i < string.length; i++) {
                    var char = lines[j][i];
                    length = length + $this.getPrice(char, font, size, 'length');
                    height = $this.getPrice(char, font, size, 'height');
                    maxHeight = ( height > maxHeight ) ? height : maxHeight;
                    price = price + $this.getPrice(char, font, size, 'text');
                    console.log($this.getPrice(char, font, size, 'length'));
                }
                avgHeight = avgHeight + maxHeight;
                maxLength = ( length > maxLength ) ? length : maxLength;
            }
            if(lines.length == 2){
                incrementH = twoLineHeightInc;
            }else {
                incrementH = heightInc;
            }
            getHeight = Math.ceil((avgHeight + incrementH) / 1) * 1;
            getLenght = Math.ceil((maxLength + LenghtInc) / 1) * 1;
            console.log(maxHeight);
            /* getting volume Formula used: (((MaxHeight +10) + (Length + 10)) * 10 ) / 5000*/
            getVol = ((getHeight + 10) * (getLenght + 10) * 10 ) / 5000;
            volume = Math.ceil(getVol / 0.5) * 0.5;
            console.log(volume);
            /* formula used : ((shiping price in RMB)* 1.2) * 0.25 */
            var shipping = ( ($this.getShipping(volume)) * 1.2 ) * 0.25;

            /* formula for total price : ( Rope Price +  Shipping +  Other ) * Multiplier */
            priceSum = ( price + shipping + 90) * 1.5;

            /* add backing Type price , define backingStandCost = 50 */
            var backingTypeCost = (backingType == 'Stand') ? backingStandCost:0;

            /* Add delivery cost: standardDeliveryCost = 50, priorityDeliveryCost = 100, internationalDeliveryCost = 150; */
            if(delivery == 'International delivery'){
                var deliveryCost = internationalDeliveryCost;
            }else if(delivery == 'Priority delivery'){
                var deliveryCost = priorityDeliveryCost;
            }else {
                var deliveryCost = standardDeliveryCost;
            }
            gb_price = Math.ceil(priceSum / 10) * 10;
            $('#gb_total').html(gb_price);

            /* final price */
            var finalPrice = gb_price + backingTypeCost + deliveryCost;
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
            if (vol in shippingPrice){
                return shippingPrice[vol];
            }else {
                return 0;
            }
        },
        getPrice:function (alphabet, font, size, type) {
            let priceSeting = $this.settings.configurations;
            if ((alphabet in priceSeting && font in priceSeting[alphabet] && size in priceSeting[alphabet][font])) {
                return priceSeting[alphabet][font][size][type];
            }
            return 0;
        },
        buyNow:function(elem) {
            $('.gb_display_data').css('display', 'block');
            $this.displayTooLayout(neonConfigurations);
            var text = '<p> Text : '+neonConfigurations.text+'</p>';
            var font = '<p> Font : '+neonConfigurations.font+'</p>';
            var color = '<p> Neon Color : '+neonConfigurations.color+'</p>';
            var size = '<p> Size : '+neonConfigurations.size+'</p>';
            $('.gb_selected_options').html(text+font+color+size);
            $('.gb_final_price').html("Price : $ "+neonConfigurations.price);
        },
        inquiryForm:function(elem) {
            $('.gb_inquiry_popup').css('display', 'block');
            $this.displayTooLayout(neonConfigurations);
        },
        stripePayment:function(elem)
        {
            if(NeonMaker_ajax.payment_mode = 'test')
            {
                var stripe_key = NeonMaker_ajax.test_stripe_key;
            }else {
                var stripe_key = NeonMaker_ajax.live_stripe_key;
            }
            Stripe.setPublishableKey(stripe_key);
            // create stripe token to make payment
            Stripe.createToken({
                number: jQuery('#cardNumber').val(),
                cvc: jQuery('#cardCVC').val(),
                exp_month: jQuery('#cardExpMonth').val(),
                exp_year: jQuery('#cardExpYear').val(),
                name: jQuery('#fname').val(),
                address_line1: jQuery('#address1').val(),
                address_line2: jQuery('#address2').val(),
                address_city: jQuery('#city').val(),
                address_state: jQuery('#state').val(),
                address_zip: jQuery('#postcode').val(),
                address_country: jQuery('#country').val(),
            },
            $this.handleStripeResponse);
            return false;
        },
        handleStripeResponse:function(status, response){
            if (response.error) {
                jQuery(".paymentErrors").html(response.error.message);
            } else {
                var stripeToken = response['id'];
                var ajaxurl = NeonMaker_ajax.ajax_url;
                var formdata = { action: 'gb_submit_payment', data: stripeToken, formvalues: neonConfigurations };
                    $.post(ajaxurl, formdata, function (data) {
                    jQuery(".paymentErrors").html("Payment "+ data.status);
                    if(data.status == 'success'){
                        $this.saveOrders(neonConfigurations, data.transactionData);
                    }
                });
            }
        },
        saveOrders:function(formdata, tdata, baseimg) {
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_insert_order', formdata: formdata, transection: tdata, baseimg: baseimg };
            $.post(ajaxurl, formdata, function (data) {
                if (data.status == 'success') {
                    alert("Your Order information are stored! ");
                    //$('.gb_display_data').css('display', 'none');
                }
            });
        },
        inquiryFormSubmit: function (elem) {
            var inquiryFormdata = $('#gb_inquiry').serialize();
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_submit_inquiry', formdata: inquiryFormdata, toolData: neonConfigurations };
            $.post(ajaxurl, formdata, function (data) {
                if (data.status == 'success') {
                    alert("Thank you for submitted your information");
                    $('.gb_inquiry_popup').css('display', 'none');
                }
            });
        },
        displayTooLayout: function (config) {
            var sel = $('#gb_myonoffswitch').prop("checked");
            $('.gb_neon_layout').text(config.text);
            var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+neonConfigurations.color+' 0px 0px 20px, '+neonConfigurations.color+' 0px 0px 30px, '+neonConfigurations.color+' 0px 0px 40px, '+neonConfigurations.color+' 0px 0px 55px, '+neonConfigurations.color+' 0px 0px 75px';
            if(sel == true){
                $(".gb_neon_layout").css({"text-shadow": shadow_color, "color":"#fff"});
                $(".gb_neon_layout").css("font-family", `'${config.font}.woff'`);
            }else {
                $(".gb_neon_layout").css({"text-shadow": "none", "color":config.color});
                $(".gb_neon_layout").css("font-family", `'${config.font}.woff'`);
            }
        },
        closeBtn: function (elem) {
            $('.gb_display_data').css('display', 'none');
            $('.gb_inquiry_popup').css('display', 'none');
        }
    };
    GbNeonmaker.initilaize();
})(jQuery);