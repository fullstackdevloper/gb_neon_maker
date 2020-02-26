<div class="sbt_text_font">
    <div class="gb_delivery">
    <label><?php _e("Choose a Delivery Option", "gb_neon_maker"); ?></label>
        <ul class="choose_delivery">
            <a onclick="GbNeonmaker.changeDelivery(this, 'Standard delivery');" href="javascript:void(0);" class="active_delivery"><li class="spaced_screw_kit"><span>Standard delivery</span></li></a>
            <a onclick="GbNeonmaker.changeDelivery(this, 'Priority delivery');" href="javascript:void(0);"><li class="flush_screw_kit"><span>Priority delivery</span></li></a>
            <a onclick="GbNeonmaker.changeDelivery(this, 'International delivery');" href="javascript:void(0);"><li class="hanging_wire_kit"><span>International delivery</span></li></a>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
         <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_delivery_hint', __("Rest assured, All delivery options are insured and required signature upon delivery.", "gb_neon_maker")); ?>
    </p>
</div>