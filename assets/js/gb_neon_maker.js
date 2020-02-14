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
    var price = Number(NeonMaker_ajax.default_price);
    var neonConfigurations = {"font": "Shorelines-Script-Bold", "text":NeonMaker_ajax.default_value, "size": "small", "color": "#2C2E3F", "onoffswitch": "false", "price": price};
    GbNeonmaker = {
        settings: {

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
            let price = neonConfigurations.price;
            for(i = 0; i < string.length; i++) {
                var char = string[i];
                price = price + $this.getPrice(char, font, size);
            }
            console.log(neonConfigurations);
            var totalPrice = price.toFixed(2);
            $('#gb_total').html(totalPrice);
            neonConfigurations.price = totalPrice;
        },
        getPrice: function(alphabet, font, size) {
            var priceSeting = {
                a: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                b: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                c: {
                    'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'large': 4},
                    'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'large': 1.4},
                    'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'large': 1.9},
                    'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'large': 2.3},
                    'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'large': 3.3},
                    'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'large': 4.3},
                },
                d: {
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
            if ((alphabet in priceSeting && font in priceSeting[alphabet] && size in priceSeting[alphabet][font])) {
                return priceSeting[alphabet][font][size];
            }
            return 0;
        },
        buyNow:function(elem) {
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_insert_order', formdata: neonConfigurations };
            $.post(ajaxurl, formdata, function (data) {
                if (data.status == 'success') {
                    alert("Your data with ID:  " + data.lastid + " inserted ");
                }
            });
        }

    };
    GbNeonmaker.initilaize();
})(jQuery);