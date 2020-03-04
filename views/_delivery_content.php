<div class="sbt_text_font">
    <div class="gb_delivery">
    <label><?php _e("Choose a Delivery Option", "gb_neon_maker"); ?></label>
        <ul class="choose_delivery">
            <a onclick="GbNeonmaker.changeDelivery(this, 'Standard delivery');" href="javascript:void(0);" class="active_delivery">
                <li class="spaced_screw_kit">
                    <div class="gb_delivery_option">
                        <span>Standard delivery</span>
                        <span class="gb_text_info">Your sign will be delivered the month following payment (4-6 weeks)</span>
                    </div>
                    <div class="gb_delivery_price">
                        <span>FREE</span>
                        <span class="gb_sm_info">Australia only</span>
                    </div>
                </li>
            </a>
            <a onclick="GbNeonmaker.changeDelivery(this, 'Priority delivery');" href="javascript:void(0);">
                <li class="flush_screw_kit">
                    <div class="gb_delivery_option">
                        <span>Priority delivery</span><span class="gb_text_info">Need it in a hurry?</span>
                    </div>
                    <div class="gb_delivery_price">
                        <span>A$ 59</span>
                    </div>
                </li>
            </a>
            <a onclick="GbNeonmaker.changeDelivery(this, 'International delivery');" href="javascript:void(0);">
                <li class="hanging_wire_kit">
                    <div class="gb_delivery_option">
                        <span>International delivery</span><span class="gb_text_info">TBA</span>
                    </div>
                    <div class="gb_delivery_price">
                        <span>A$ 150</span>
                    </div>
                </li>
            </a>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
         <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_delivery_hint', __("Rest assured, all delivery options are insured and require signature upon delivery.", "gb_neon_maker")); ?>
    </p>
</div>