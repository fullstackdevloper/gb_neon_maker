<div class="sbt_text_font">
    <div class="gb_backing_type">
        <label><?php _e("Choose a Backing Type", "gb_neon_maker"); ?></label>
            <ul class="gb_backing_shape">
            <a onclick="GbNeonmaker.changeBackingType(this,'Cut around acrylic');" href="javascript:void(0);"><li class="option-1"><span>Cut around acrylic</span><span class="gb_text_info">Best suited to cursive fonts!</span></li></a>
            <a onclick="GbNeonmaker.changeBackingType(this,'Square acrylic');" href="javascript:void(0);"><li class="option-1"><span>Square acrylic</span><span class="gb_text_info">Best suited to sans-serif fonts!</span></li></a>
            <a onclick="GbNeonmaker.changeBackingType(this,'Stand');" href="javascript:void(0);"><li class="option-1 gb_size_last"><div class="gb_bstand_price"><span>Stand </span><span class="gb_text_info">Will incur an additional fee.</span></div><div class="gb_bstand_price"><span><?php echo GB_NEON_MAKER_CURRENCY; ?> 50</span></div></li></a>
        </ul>
    </div>
</div>
<div class="sbt_text_font">
    <div class="sbt_backing_options2">
        <label><?php _e("Choose a Backing color", "gb_neon_maker"); ?></label>
        <ul class="gb_backing_color">
            <a onclick="GbNeonmaker.changeBackingColor(this,'clear acrylic');" href="javascript:void(0);"><li class="gb_acrylic"><span>clear acrylic (most popular!)</span></li></a>
            <a onclick="GbNeonmaker.changeBackingColor(this,'white acrylic');" href="javascript:void(0);" ><li class="gb_acrylic"><span>white acrylic</span></li></a>
            <a onclick="GbNeonmaker.changeBackingColor(this,'black acrylic');" href="javascript:void(0);"><li class="gb_acrylic gb_size_last"><span>black acrylic</span></li></a>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_backing_hint', __("If you’d like coloured acrylic backing or UV printed backing, click ‘It’s not quite right’ and let us know more.", "gb_neon_maker")); ?>
    </p>
</div>