<section class="sbt_container">
    <div class="holder_app">
        <div class="sbt_row">
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
                    <a onclick="GbNeonmaker.buyNow(this);" href="javascript:void(0);" class="sbt_crt_btn"><?php _e("Buy Now", "gb_neon_maker"); ?></a>
                    <a href="#"  class="sbt_gr"><?php _e("IT'S NOT QUITE RIGHT", "gb_neon_maker"); ?></a>
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
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/bg1.jpg" alt="bg1">
						<img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/bg2.jpg" alt="bgnext">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/bg3.jpg" alt="bgnext">
                        <img class="gb_slides" src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/bg4.jpg" alt="bgnext">
                        <div class="txt_over">
                            <h1 id="gb_neon_text"><?php $this->getValue('default_text', $NeonMakerSetting); ?></h1>
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
<div class="gb_display_data">
    <div class="gb_stripe_form"><a class="gb_close" href="#" onclick="GbNeonmaker.closeBtn(this);" > X </a>
        <span class="paymentErrors alert-danger"></span>
        <form id="stripe" onsubmit="event.preventDefault();GbNeonmaker.stripePayment(this);" method="POST">
            <input type="text" id="cardNumber" autocomplete="off" name="card-number" placeholder="Card Number" required>
            <input type="text" id="cardCVC" autocomplete="off" name="cvc" placeholder="CCV" required>
            <input type="text" id="cardExpMonth" autocomplete="off" name="month" placeholder="MM" required>
            <input type="text" id="cardExpYear" autocomplete="off" name="year" placeholder="YYYY" required>
            <input class="black button" name="dostripe" type="submit" value="Pay Now">
        </form>
    </div>
</div>