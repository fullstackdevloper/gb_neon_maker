<div class="sbt_text_font">
    <label><?php _e("Choose a Size", "gb_neon_maker"); ?></label>
    <a onclick="GbNeonmaker.changeSize('small');" href="javascript:void(0);"> <div class="">
        <h2 class="gb_small"><strong class="">Small</strong></h2>
    </div></a>
     <a onclick="GbNeonmaker.changeSize('medium');" href="javascript:void(0);"><div class="">
        <h2 class="gb_medium"><strong class="">Medium</strong></h2>
    </div></a>
     <a onclick="GbNeonmaker.changeSize('large');" href="javascript:void(0);"><div class="">
        <h2 class="gb_large"><strong class="">Large</strong></h2>
    </div></a>
    <a onclick="GbNeonmaker.changeSize('big');" href="javascript:void(0);"><div class="">
        <h2 class="gb_big"><strong class="">Big</strong></h2>
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