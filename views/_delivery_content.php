<div class="sbt_text_font">
    <label><?php _e("Choose a Delivery Option", "gb_neon_maker"); ?></label>
    <ul class="choose_delivery">
        <a onclick="GbNeonmaker.changeDelivery(this, 'Standard delivery');" href="javascript:void(0);" class="active_delivery"><li class="spaced_screw_kit"><span>Standard delivery</span></li></a>
        <a onclick="GbNeonmaker.changeDelivery(this, 'Priority delivery');" href="javascript:void(0);"><li class="flush_screw_kit"><span>Priority delivery</span></li></a>
        <a onclick="GbNeonmaker.changeDelivery(this, 'International delivery');" href="javascript:void(0);"><li class="hanging_wire_kit"><span>International delivery</span></li></a>
    </ul>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
    </div>
    <p>
        <?php print apply_filters('gb_delivery_hint', __("Rest assured, All delivery options are insured and required signature upon delivery.", "gb_neon_maker")); ?>
    </p>
</div>