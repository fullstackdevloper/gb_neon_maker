<div class="sbt_text_font">
    <label><?php _e("Choose a Size", "gb_neon_maker"); ?></label>
    <a onclick="GbNeonmaker.changeSize(this,'small');" href="javascript:void(0);"> <div class="">
        <h2 class="gb_small"><strong>Small</strong></h2>
    </div></a>
     <a onclick="GbNeonmaker.changeSize(this,'medium');" href="javascript:void(0);"><div class="">
        <h2 class="gb_medium"><strong>Medium</strong></h2>
    </div></a>
     <a onclick="GbNeonmaker.changeSize(this,'normal');" href="javascript:void(0);"><div class="">
        <h2 class="gb_normal"><strong>Normal</strong></h2>
    </div></a>
    <a onclick="GbNeonmaker.changeSize(this,'large');" href="javascript:void(0);"><div class="">
        <h2 class="gb_large"><strong>Large</strong></h2>
    </div></a>

</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
    </div>
    <p>
        <?php print apply_filters('gb_backing_hint', __("If you'd like a specific size. Click it's not quite right and let us know more.", "gb_neon_maker")); ?>
    </p>
</div>