<div class="sbt_text_font">
    <label><?php _e("Choose a Backing Type", "gb_neon_maker"); ?></label>
    <ul class="gb_backing_shape">
        <a onclick="GbNeonmaker.changeBacking(this,'Cut around acrylic');" href="javascript:void(0);"><li class="option-1"><span>Cut around acrylic</span></li></a>
        <a onclick="GbNeonmaker.changeBacking(this,'Square acrylic');" href="javascript:void(0);"><li class="option-1"><span>Square acrylic</span></li></a>
        <a onclick="GbNeonmaker.changeBacking(this,'Stand');" href="javascript:void(0);"><li class="option-1"><span>Stand </span></li></a>
    </ul>
    <div class="sbt_backing_options2">
        <label><?php _e("Choose a Backing color", "gb_neon_maker"); ?></label>
        <ul class="gb_backing_color">
            <a onclick="GbNeonmaker.changeBacking(this,'clear acrylic');" href="javascript:void(0);"><li class="gb_acrylic"><span>clear acrylic</span></li></a>
            <a onclick="GbNeonmaker.changeBacking(this,'white acrylic');" href="javascript:void(0);" ><li class="gb_acrylic"><span>white acrylic</span></li></a>
            <a onclick="GbNeonmaker.changeBacking(this,'black acrylic');" href="javascript:void(0);"><li class="gb_acrylic"><span>black acrylic</span></li></a>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
    </div>
    <p>
        <?php print apply_filters('gb_backing_hint', __("If you have another font in mind, would like multiple fonts, or would like to incorporate an image or logo, click (it's not quote right) and let us know more.", "gb_neon_maker")); ?>
    </p>
</div>