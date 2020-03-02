<section class="sbt_container">
    <div class="holder_app">
        <div class="sbt_row gb_row">
            <!------------menu_side_bar----------------->
            <div class="wd_5 menu_aside">
                <div class="sbt_row">
                    <?php print $this->getView("_sidebar_menu"); ?>
                    <div class="result_tabs">
                        <div  class="tab_ct active" id="dt1">
                            <?php print $this->getView("_text_content"); ?>
                        </div>
                        <div  class="tab_ct"  id="dt2">
                            <?php print $this->getView("_color_content"); ?>
                        </div>
                        <div  class="tab_ct" id="dt3">
                            <?php print $this->getView("_size_content"); ?>
                        </div>
                        <div  class="tab_ct" id="dt4">
                            <?php print $this->getView("_backing_content"); ?>
                        </div>
                        <div  class="tab_ct" id="dt5">
                            <?php print $this->getView("_fixture_content"); ?>
                        </div>
                        <div  class="tab_ct" id="dt6">
                            <?php print $this->getView("_delivery_content"); ?>
                        </div>
                    </div>
                </div>
                <div class="sbt_sub_total">
                    <label><?php _e("SUBTOTAL", "gb_neon_maker"); ?> </label><span id="sbt_subtotal" >$ <span id="gb_total">450</span></span>
                </div>
                <div class="btn_sbt_cart">
                    <a onclick="GbNeonmaker.buyNow(this);" href="javascript:void(0);" class="sbt_crt_btn"><?php _e("BUY NOW", "gb_neon_maker"); ?></a>
                    <a onclick="GbNeonmaker.inquiryForm(this);" href="javascript:void(0);" class="sbt_gr"><?php _e("IT'S NOT QUITE RIGHT", "gb_neon_maker"); ?></a>
                </div>
            </div>
            <div class="wd_7 result_effect">
                <div class="slider_font_sbt">
                    <div class="gb_onoffswitch">
                        <input type="checkbox" onchange="GbNeonmaker.onOffswitch(this);" name="gb_onoffswitch" class="gb_onoffswitch-checkbox" id="gb_myonoffswitch">
                        <label class="gb_onoffswitch-label" for="gb_myonoffswitch">
                            <span class="gb_onoffswitch-inner"></span>
                            <span class="gb_onoffswitch-switch"></span>
                        </label>
                    </div>
                    <div class="sl_ide">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Young_Adults_Looking_At_Neon_Sign.jpg" alt="">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Bedroom-Custom-LED-Neon-Quote-Tool.jpg" alt="">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Cafe-Background-For-Neon-Sign.jpg" alt="">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Desk-Background-For-Neon-Sign-Quote-Tool.jpg" alt="">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Kids-Bedroom-Custom-LED-Neon-Quote-Tool.jpg" alt="">
                        <div class="txt_over">
                            <span id="gb_neon_text"><?php $this->getValue('default_text', $NeonMakerSetting); ?></span>
                        </div>
                    </div>
                    <div class="prev_sl"><a class="prev" onclick="GbNeonmaker.plusSlides(-1);">&#10094;</a></div>
                    <div class="next_sl"><a class="next" onclick="GbNeonmaker.plusSlides(-1);">&#10095;</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
<div class="gb_sc"></div>
<!-- payment form for Stripe -->
<div class="gb_display_data">
    <div class="gb_stripe_form">
        <form id="stripe" onsubmit="event.preventDefault();GbNeonmaker.stripePayment(this);" method="POST">
        <a class="gb_close" href="#" onclick="GbNeonmaker.closeBtn(this);" > X </a>
        <div class="gb_order_sign gb_column3">
            <h5><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/bag.png" alt="paymentmethod"> Order </h5>
            <p><span>Custom LED neon sign</span></p>
            <div class="tool_details" >
                <div class="neon_tool_layout"> <span class="gb_neon_layout"></span></div>
                <div class="gb_selected_options"> </div>
                <div class="gb_final_price"> </div>

            </div>
        </div>
        <div class="gb_order_delivery gb_column3">
           <h5><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/van.png" alt="paymentmethod"> DELIVERY </h5>
            <p><span>Deliver to</span></p>
            <p><?php print apply_filters('gb_order_form_text', $this->orderFormText()); ?></p>
             <?php
            foreach( $this->stripeOrderDeliveryForm() as $key => $field) {
                echo $this->neonCustomFields($field);
            } ?>
        </div>
        <div class="gb_order_payment gb_column3">
            <h5><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/credit-card.png" alt="paymentmethod"> PAYMENT </h5>
            <span class="paymentErrors alert-danger"></span>
            <p><span>Pay now via</span></p>
            <div class="gb_payment_option">
                 <a href="#"><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/mc_symbol.png" alt="paymentmethod"></a>
                 <a href="#"><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/Visa_Inc_log.png" alt="paymentmethod"></a>
                 <a href="#"><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/American_Express_logo.png" alt="paymentmethod"></a>
            </div>
            <div class="gb_payment_option">
                <a href="#"><img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/powered_by_stripe.png" alt="paymentmethod"></a>
            </div>
            <?php
            foreach( $this->stripeFormFields() as $key => $field) {
                echo $this->neonCustomFields($field);
            } ?>
            <input class="black button" name="dostripe" type="submit" value="Pay Now">
        </div>
        </form>
    </div>
</div>
<!-- end payment form for Stripe -->

<!-- Inquiry form -->
<div class="gb_inquiry_popup">
    <div class="gb_inquiry_container">
        <a class="gb_close" href="#" onclick="GbNeonmaker.closeBtn(this);" > X </a>
        <h6><?php _e("IT’S NOT QUITE RIGHT", "gb_neon_maker"); ?></h6>
        <p> <?php print apply_filters('gb_inquiry_form_text', $this->inquiryFormText()); ?></p>
        <p>
            <div class="neon_tool_layout"> <span class="gb_neon_layout"></span></div>
        </p>
        <form id="gb_inquiry" class="gb_inquiry_form" method="POST" onsubmit="event.preventDefault();GbNeonmaker.inquiryFormSubmit(this);">
            <div class="gb_tool_preview"></div>
        <?php
        foreach( $this->inquiryFormFields() as $key => $field) {
            echo $this->neonCustomFields($field);
        } ?>
        <input type="submit" value="Submit">
      </form>
    </div>
</div>