/*
 *
 * neon maker front end Javascript
 *
 * @since 1.0.0
 *
 */
var GbNeonmaker;
(function ($) {
    var $this,slideIndex = 1, price = 0, gbVolShipping = true;
    var heightInc = 3;
    var LenghtInc = 3;
    var backingStandCost = 50;
    var standardDeliveryCost = 0;
    var priorityDeliveryCost = 100;
    var internationalDeliveryCost = 150;
    var twoLineHeightInc = 4.5;
    var lengthLimit = 160;
    var neonConfigurations = {"font": "ModernTalking-Regular", "text":NeonMaker_ajax.default_value, "size": "small", "color": "#FC43BD", "onOffswitch": "false", "price": price, "delivery": "Standard delivery"};
    GbNeonmaker = {
        settings: {
            configuration: {}
        },
        initilaize: function () {
            $this = GbNeonmaker;
            GbNeonmaker.settings.configuration = JSON.parse(NeonMaker_ajax.configuration);
            $(document).ready(function () {
                $this.onInitMethods();
            });
        },
        onInitMethods: function () {
            $this.sideBarEvents(slideIndex);
            $this.showSlides(slideIndex);
            $this.calculation();
            $this.onOffswitch();
            $this.getLengthHeight();
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
            /*if(neonConfigurations.dynamicLength > lengthLimit && event.keyCode != 8){
                $('#gb_text_error').html('Max Character Limit Reached. If you want more than current characters, Please <a onclick="GbNeonmaker.inquiryForm(this);" href="javascript:void(0);">contact us</a>');
                return false;
            }*/
            if(event.keyCode == 13 && newLines >= 2) {
                return false;
            }
            var textareaValue = $(elem).val();
            $("#gb_neon_text").html(textareaValue.replace(/\r?\n/g, '<br />'));
            neonConfigurations.price = price;
            neonConfigurations.text = $(elem).val();
            $this.fontsizeAdjust(neonConfigurations.font, neonConfigurations.text);

            $this.calculation();
            $this.getLengthHeight();
        },
        changeFont: function(elem, fontType) {
            $("#gb_neon_text").css("font-family", `'${fontType}.woff'`);
            $('.sbt_font_options ul li').removeClass('active_font');
            var onoffswitch = $('#gb_myonoffswitch').prop("checked");
            $('.sbt_font_options ul li a').removeAttr('style');
            var txtvalue = $("#gb_default_value").val();
            $this.fontsizeAdjust(fontType, txtvalue);
            if(onoffswitch == true) {
                fontColor = neonConfigurations.color;
                var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+fontColor+' 0px 0px 20px, '+fontColor+' 0px 0px 30px, '+fontColor+' 0px 0px 40px, '+fontColor+' 0px 0px 55px, '+fontColor+' 0px 0px 75px';
                $(elem).css({"text-shadow": shadow_color});
            }else {
                $(elem).css({"text-shadow": none, "color": neonConfigurations.color});
            }
            neonConfigurations.price = price;
            neonConfigurations.font = fontType;
/*            if(neonConfigurations.dynamicLength > lengthLimit){
                $('#gb_text_error').html('Max Character Limit Reached. If you want more than current characters, Please <a onclick="GbNeonmaker.inquiryForm(this);" href="javascript:void(0);">contact us</a>');
                return false;
            }*/
            $this.calculation();
            $this.getLengthHeight();
        },
        fontsizeAdjust: function(fontType, txtvalue){
           $("#gb_neon_text").removeClass('big_len16_f28 big_10_f40 sm_len16_f40 sm_10_f45 default_f45 default_bay_f45');
            var gbClassAdd ='';
            if((fontType == 'thistails-sans' || fontType == 'Courier' || fontType == 'Shorelines-Script-Bold')){
                if(txtvalue.length > 10 && txtvalue.length <=16){
                    var gbClassAdd = "big_10_f40";
                }else if(txtvalue.length > 16){
                    var gbClassAdd = "big_len16_f28";
                }else {
                    var gbClassAdd = "default_f45";
                }
            }else {
                if(fontType == 'Bayshore'){
                    var gbClassAdd = "default_bay_f45";
                }else {
                    if(txtvalue.length > 10 && txtvalue.length <=16){
                        var gbClassAdd = "sm_10_f45";
                    }else if(txtvalue.length > 16){
                        var gbClassAdd = "sm_len16_f40";
                    }else {
                        var gbClassAdd = "default_f45";
                    }
                }
            }
            $("#gb_neon_text").addClass(gbClassAdd);
        },
        changeColor: function(elem, fontColor) {
            var onoffswitch = $('#gb_myonoffswitch').prop("checked");
            $('.sbt_font_options ul li a').removeAttr('style');
            if(onoffswitch == true) {
                var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+fontColor+' 0px 0px 20px, '+fontColor+' 0px 0px 30px, '+fontColor+' 0px 0px 40px, '+fontColor+' 0px 0px 55px, '+fontColor+' 0px 0px 75px';
                $('#gb_neon_text').css({"text-shadow": shadow_color, "color":"#fff"});
                $(elem).css({"box-shadow": shadow_color, "color":"#fff"});
            }else {
                if(fontColor == "#DC78FF" || fontColor == "#EF2CB8" || fontColor == "#ED9A9A" || fontColor == "#2B41E7" || fontColor == "#FF2828" || fontColor == "#FF7E55" || fontColor == "#FFF739" || fontColor == "#FFF1DC" || fontColor == "#EAEAEA"){
                    $("#gb_neon_text").css("color", '#fff');
                }else {
                    $("#gb_neon_text").css("color", fontColor);
                }
                $(elem).css("color", fontColor);
            }
            neonConfigurations.color = fontColor;
        },
        changeSize: function(elem, size) {
            neonConfigurations.price = price;
            neonConfigurations.size = size;
            $('.sbt_text_font a').removeClass('active_size');
            $(elem).addClass('active_size');
            $this.calculation();
            $this.getLengthHeight();
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
            if (sel == false) {
                var fontColor = neonConfigurations.color;
                $('#gb_neon_text').removeAttr('style');
                if(fontColor == "#DC78FF" || fontColor == "#EF2CB8" || fontColor == "#ED9A9A" || fontColor == "#2B41E7" || fontColor == "#FF2828" || fontColor == "#FF7E55" || fontColor == "#FFF739" || fontColor == "#FFF1DC" || fontColor == "#EAEAEA"){
                    $("#gb_neon_text").css({"color": '#fff', "font-family": "'"+neonConfigurations.font+".woff'"});
                }else {
                    $("#gb_neon_text").css({"color": neonConfigurations.color, "font-family": "'"+neonConfigurations.font+".woff'"});
                }
            }else {
               $('#gb_neon_text').css({"text-shadow": shadow_color, "color":"#fff"});
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
            var lines = string.split('\n');
            for(var j = 0;j < lines.length;j++){
                var length = 0, height = 0, maxHeight = 0;
                for(i = 0; i < string.length; i++) {
                    var char = lines[j][i];
                    length = length + $this.getPrice(char, font, size, 'length');
                    height = $this.getPrice(char, font, size, 'height');
                    maxHeight = ( height > maxHeight ) ? height : maxHeight;
                    price = price + $this.getPrice(char, font, size, 'text');
                }
                avgHeight = avgHeight + maxHeight;
                maxLength = ( length > maxLength ) ? length : maxLength;
            }
            if(price == 0) {  /* condition for text box empty */
                finalPrice = 0;
                shipping = 0;
                getLenght = 0;
                getHeight = 0;
            }else {
                if(lines.length == 2){
                    incrementH = twoLineHeightInc; /* text in two line add height = 4.5 otherwise add = 3*/
                }else {
                    incrementH = heightInc;
                }
                getHeight = Math.ceil((avgHeight + incrementH) / 1) * 1;
                getLenght = Math.ceil((maxLength + LenghtInc) / 1) * 1;

                /* getting volume Formula used: (((MaxHeight +10) + (Length + 10)) * 10 ) / 5000*/
                getVol = ((getHeight + 10) * (getLenght + 10) * 10 ) / 5000;
                volume = Math.ceil(getVol / 0.5) * 0.5;

                /* formula used : ((shiping price in RMB)* 1.2) * 0.25 */
                var shipping = ( ($this.getShipping(volume)) * 1.2 ) * 0.25;

                /* formula for total price : ( Rope Price +  Shipping +  Other ) * Multiplier */
                priceSum = ( price + shipping + 90) * 1.5;

                /* add backing Type price , define backingStandCost = 50 */
                var backingTypeCost = (backingType == 'Stand' ) ? backingStandCost:0;

                /* delivery cost: standardDeliveryCost = 50, priorityDeliveryCost = 100, internationalDeliveryCost = 150; */
                if(delivery == 'International delivery'){
                    var deliveryCost = internationalDeliveryCost;
                }else if(delivery == 'Priority delivery'){
                    var deliveryCost = priorityDeliveryCost;
                }else {
                    var deliveryCost = standardDeliveryCost;
                }

                /* total price without delivery option  */
                gb_price = Math.ceil(priceSum / 10) * 10;

                /* final price */
                var finalPrice = gb_price + backingTypeCost + deliveryCost;

            }

            /* display dynamic height & Length */
            neonConfigurations.dynamicLength = getLenght;
            //neonConfigurations.dynamicHeigth = getHeight;
            neonConfigurations.price = finalPrice;

            $('#gb_total').html(finalPrice);
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
                20.5: 813.28,
                21: 850.48,
                21.5: 887.68,
                22: 924.88,
                22.5: 962.08,
                23: 999.28,
                23.5: 1036.48,
                24: 1073.68,
                24.5: 1110.88,
                25: 1148.08,
                25.5: 1185.28,
                26: 1222.48,
                26.5: 1259.68,
                27: 1296.88,
                27.5: 1334.08,
                28: 1371.28,
                28.5: 1408.48,
                29: 1445.68,
                29.5: 1482.88,
                30: 1520.08,
                30.5: 1520.08,
                31:1120.34,
                31.5:1120.34,
                32: 1156.48,
                32.5: 1156.48,
                33: 1192.62,
                33.5: 1192.62,
                34: 1228.76,
                34.5: 1228.76,
                35: 1264.9,
                35.5: 1264.9,
                36: 1301.04,
                36.5: 1301.04,
                37: 1337.18,
                37.5: 1337.18,
                38: 1373.32,
                38.5: 1373.32,
                39: 1409.46,
                39.5: 1409.46,
                40: 1445.6,
                40.5: 1445.6,
                41: 1481.74,
                41.5: 1481.74,
                42: 1517.88,
                42.5: 1517.88,
                43: 1554.02,
                43.5: 1554.02,
                44: 1590.16,
                44.5: 1590.16,
                45: 1626.3,
                45.5: 1626.3,
                46: 1662.44,
                46.5: 1662.44,
                47: 1698.58,
                47.5: 1698.58,
                48: 1734.72,
                48.5: 1734.72,
                49: 1770.86,
                49.5: 1770.86,
                50: 1807,
                50.5: 1807,
                51: 1843.14,
                51.5: 1843.14,
                52: 1879.28,
                52.5: 1879.28,
                53: 1915.42,
                53.5: 1915.42,
                54: 1951.56,
                54.5: 1951.56,
                55: 1987.7,
                55.5: 1987.7,
                56: 2023.84,
                56.5: 2023.84,
                57: 2059.98,
                57.5: 2059.98,
                58: 2096.12,
                58.5: 2096.12,
                59: 2132.26,
                59.5: 2132.26,
                60: 2168.4
            }
            if (vol in shippingPrice){
                gbVolShipping = true;
                $('#gb_text_error').text("");
                return shippingPrice[vol];
            }else {
                gbVolShipping = false;
                $('#gb_text_error').text("*you have reached the limit");
                return shippingPrice[vol] = shippingPrice[60];
            }
        },
        getPrice:function (alphabet, font, size, type) {
            let priceSeting = GbNeonmaker.settings.configuration;
            if ((alphabet in priceSeting && font in priceSeting[alphabet] && size in priceSeting[alphabet][font])) {
                return priceSeting[alphabet][font][size][type];
            }
            return 0;
        },
        buyNow:function(elem) {
            $('.gb_display_data').css('display', 'block');
            var toolfontsize = $("#gb_neon_text").css('font-size');
            $this.displayTooLayout(neonConfigurations, toolfontsize);
            var fontTextName = {'ModernTalking-Regular': 'Fruity', 'Bayshore': 'Bayshore', 'thistails-regular': 'Silhouette', 'Shorelines-Script-Bold': 'Shorelines', 'thistails-sans': 'Thistail', 'ShaimusOutline-Regular': 'Shaimus', 'Courier': 'Courier', 'RoadCrew-Regular': 'Road Crew'};
            /* array value for color */
            var colorTextName = {
                '#FC43BD': 'Lipstick',
                '#FFA800': 'Solar Flare',
                '#82F925': 'Mint',
                '#F59CBC': 'Rosey',
                '#ECF02A': 'Tiger',
                '#FF2828': 'Candy',
                '#3244EB': 'Denim',
                '#DC78FF': 'Lavender',
                '#FF7E55': 'Golden Fizz',
                '#74CBE8': 'Maliblue',
                '#EF2CB8': 'Ballerina',
                '#FFF739': 'Sulphur',
                '#86EA58': 'Sushi',
                '#ED9A9A': 'Sherbet',
                '#FFF1DC': 'Antique',
                '#F11D1D': 'Ruby',
                '#2B41E7': 'Cobalt',
                '#EAEAEA': 'Snow(white)',
            };
            var configHtml = '';
            configHtml = configHtml + '<p> <span>Text: </span>'+neonConfigurations.text+'</p>';
            configHtml = configHtml + '<p> <span>Font: </span>'+fontTextName[neonConfigurations.font]+'</p>';
            configHtml = configHtml + '<p> <span>Neon Color : </span>'+colorTextName[neonConfigurations.color]+'</p>';
            configHtml = configHtml + '<p> <span>Size: </span>'+neonConfigurations.size.charAt(0).toUpperCase() + neonConfigurations.size.slice(1)+'</p>';

            if(typeof neonConfigurations.backingType !== 'undefined'){
                configHtml = configHtml + '<p> <span>Backing type: </span>'+neonConfigurations.backingType+'</p>';
            }
            if(typeof neonConfigurations.backingColor !== 'undefined'){
                configHtml = configHtml + '<p> <span>Backing colour: </span>'+neonConfigurations.backingColor+'</p>';
            }
            if(typeof neonConfigurations.fixture !== 'undefined'){
                configHtml = configHtml + '<p> <span>Fixture: </span>'+neonConfigurations.fixture+'</p>';
            }
            if(typeof neonConfigurations.delivery !== 'undefined'){
                configHtml = configHtml + '<p> <span>Delivery: </span>'+neonConfigurations.delivery+'</p>';
            }
            $('.gb_selected_options').html(configHtml);
            $('.gb_final_price').text(neonConfigurations.price);
        },
        inquiryForm:function(elem) {
            $('.gb_inquiry_popup').css('display', 'block');
            var toolfontsize = $("#gb_neon_text").css('font-size');
            $this.displayTooLayout(neonConfigurations, toolfontsize);
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
            var expdate= jQuery('#cardExpDate').val();
            strArray = expdate.split("/");
            exp_month = strArray[0];
            exp_year = strArray[1];
            Stripe.createToken({
                number: jQuery('#cardNumber').val(),
                cvc: jQuery('#cardCVC').val(),
                exp_month: exp_month,
                exp_year: exp_year,
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
                var email = jQuery('#emailid').val();
                var phone = jQuery('#phonenumber').val();
                var ajaxurl = NeonMaker_ajax.ajax_url;
                var formdata = { action: 'gb_submit_payment', data: stripeToken, email: email, formvalues: neonConfigurations };
                    $.post(ajaxurl, formdata, function (data) {
                    jQuery(".paymentErrors").html("Payment "+ data.status);
                    if(data.status == 'success'){
                        var url = NeonMaker_ajax.Site_url+'/?p=6805';
                        $this.saveOrders(neonConfigurations, data.transactionData, email, phone);
                        top.location.replace(url);
                    }
                });
            }
        },
        saveOrders:function(formdata, tdata, email, phone) {
            var ajaxurl = NeonMaker_ajax.ajax_url;
            var formdata = { action: 'gb_insert_order', formdata: formdata, transection: tdata, cemail: email, customer_phone: phone};
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
                    alert("Thanks for submitting your information! We'll get back to you within 24-48 hours.");
                    $('.gb_inquiry_popup').css('display', 'none');
                }
            });
        },
        displayTooLayout: function (config, fontsize) {
            var sel = $('#gb_myonoffswitch').prop("checked");
            $('.gb_neon_layout').text(config.text);
            var shadow_color = 'rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, '+neonConfigurations.color+' 0px 0px 20px, '+neonConfigurations.color+' 0px 0px 30px, '+neonConfigurations.color+' 0px 0px 40px, '+neonConfigurations.color+' 0px 0px 55px, '+neonConfigurations.color+' 0px 0px 75px';
            if(sel == true){
                $(".gb_neon_layout").css({"text-shadow": shadow_color, "color":"#fff", "font-size":fontsize});
                $(".gb_neon_layout").css("font-family", `'${config.font}.woff'`);
            }else {
                $(".gb_neon_layout").css({"text-shadow": "none", "color":config.color, "font-size":fontsize});
                $(".gb_neon_layout").css("font-family", `'${config.font}.woff'`);
            }
        },
        closeBtn: function (elem) {
            $('.gb_display_data').css('display', 'none');
            $('.gb_inquiry_popup').css('display', 'none');
        },
        getLengthHeight: function (){
            var size = ["small", "medium", "large"];
            var i;
            for(k=0; k<3; k++ )
            {
                var i, j;
                var font = neonConfigurations.font;
                var string = neonConfigurations.text;
                var length = 0,maxLength = 0,avgHeight = 0;
                var lines = string.split('\n');
                for(var j = 0;j < lines.length;j++){
                    var length = 0, height = 0, maxHeight = 0;
                    for(i = 0; i < string.length; i++) {
                        var char = lines[j][i];
                        length = length + $this.getPrice(char, font, size[k], 'length');
                        height = $this.getPrice(char, font, size[k], 'height');
                        maxHeight = ( height > maxHeight ) ? height : maxHeight;
                    }
                    avgHeight = avgHeight + maxHeight;
                    maxLength = ( length > maxLength ) ? length : maxLength;
                }
                if(lines.length == 2){
                    incrementH = twoLineHeightInc; /* text in two line add height = 4.5 otherwise add = 3*/
                }else {
                    incrementH = heightInc;
                }
                getHeight = Math.ceil((avgHeight + incrementH) / 1) * 1;
                getLenght = Math.ceil((maxLength + LenghtInc) / 1) * 1;
                $('.gb_len_'+size[k]).text(getLenght+'- '+Math.floor(getLenght +10) +'cm');
                $('.gb_height_'+size[k]).text(getHeight+'- '+Math.floor(getHeight +8) +'cm');
            }
        },
        expDate: function(e){
            var inputChar = String.fromCharCode(event.keyCode);
            $("#cardExpDate").attr("maxlength","7");
              var code = event.keyCode;
              var allowedKeys = [8];
              if (allowedKeys.indexOf(code) !== -1) {
                return;
              }
              event.target.value = event.target.value.replace(
                /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
              ).replace(
                /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
              ).replace(
                /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
              ).replace(
                /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
              ).replace(
                /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
              ).replace(
                /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
              ).replace(
                /\/\//g, '/' // Prevent entering more than 1 `/`
              );
        },
        disbalePaste: function ()
        {
            return false;
        }
    };
    GbNeonmaker.initilaize();
})(jQuery);