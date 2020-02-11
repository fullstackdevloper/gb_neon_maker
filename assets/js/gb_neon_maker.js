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
    var neonConfigurations = {"font":"ModernTalking-Regular","text":"testing","size":"small"};
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
            neonConfigurations.text = $(elem).val();
            $this.calculation();
        },
        changeFont: function(fontType) {
            //alert(fontType);
            $("#gb_neon_text").css("font-family", `'${fontType}.woff'`);
            $('.sbt_font_options ul li').removeClass('active_font');
            $('.gb_' + fontType).parent().parent().addClass('active_font');
            neonConfigurations.font=fontType;
            $this.calculation();
        },
        changeColor: function(fontColor) {
            //alert(fontColor);
            $("#gb_neon_text").css("color", fontColor);
            $('.sbt_font_options ul li').removeClass('active_color');
            $(fontColor).addClass('active_color');
            neonConfigurations.color=fontColor;
            $this.calculation();
        },
        changeSize: function(size) {
            neonConfigurations.size=size;
            $('.sbt_text_font h2').removeClass('active_size');
            $('.gb_'+size).addClass('active_size');
            $this.calculation();
        },
        showSlides:function(n)
        {
             var i;
             var slides = document.getElementsByClassName("gb_slides");
             if (n > slides.length) {slideIndex = 1}
             if (n < 1) {slideIndex = slides.length}
             for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        },
        plusSlides:function(n)
        {
            $this.showSlides(slideIndex += n);

        },
        calculation:function() {
            var i;
            var font = neonConfigurations.font;
            var string=neonConfigurations.text;
            var size =neonConfigurations.size;
            let price = 450;
            for(i = 0; i < string.length; i++) {
                var char=string[i];
                price = price + $this.getPrice(char, font, size);
            }
            $('#gb_total').html(price);
        },
        getPrice: function(alphabet, font, size) {
            var priceSeting = [
                {
                    a: {
                        'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    b: {
                        'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    c: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    d: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    e: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    f: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    g: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    e: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    f: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    g: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    h: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    i: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    j: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    k: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    m: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    n: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    o: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    p: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    q: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    r: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    s: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    t: {
                       'ModernTalking-Regular' : {'small' : 66, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    u: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    v: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    w: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    x: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    y: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    },
                    z: {
                       'ModernTalking-Regular' : {'small' : 1, 'medium' : 2, 'normal': 3, 'large': 4},
                        'thistails-regular' : {'small' : 1.1,'medium' : 1.1, 'normal': 1.3, 'large': 1.4},
                        'Shorelines-Script-Bold' : {'small' : 1.6, 'medium' : 1.7, 'normal': 1.2, 'large': 1.9},
                        'thistails-sans' : {'small' : 2.3, 'medium' : 2.1, 'normal': 2.2, 'large': 2.3},
                        'ShaimusOutline-Regular' : {'small' : 3.3, 'medium' : 3.1, 'normal': 3.2, 'large': 3.3},
                        'RoadCrew-Regular' : {'small' : 4.3, 'medium' : 4.1, 'normal': 4.2, 'large': 4.3},
                    }

                }
            ];
            return priceSeting[0][alphabet][font][size];
        }
    };
    GbNeonmaker.initilaize();
})(jQuery);