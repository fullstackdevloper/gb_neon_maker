<div class="sbt_text_font">
    <label><?php _e("Choose a Size", "gb_neon_maker"); ?></label>
    <a onclick="GbNeonmaker.changeSize(this,'small');" href="javascript:void(0);" class="active_size">
        <div class="gb_rectangle gb_rectangle_active">
            <h2 class="gb_small"><strong>Small</strong></h2>
            <div class="gb_lenth">
                <small> length:  <span class="gb_len_small"></span></small><br>
                <small> height: <span class="gb_height_small"></span></small><br>
            </div>
        </div>
    </a>
     <a onclick="GbNeonmaker.changeSize(this,'medium');" href="javascript:void(0);">
        <div class="gb_rectangle">
            <h2 class="gb_medium"><strong>Medium</strong></h2>
            <div class="gb_lenth" >
                <small> length:  <span class="gb_len_medium"></span></small><br>
                <small> height: <span class="gb_height_medium"></span></small><br>
            </div>
        </div>
    </a>
    <a onclick="GbNeonmaker.changeSize(this,'large');" href="javascript:void(0);">
        <div class="gb_rectangle gb_size_last">
            <h2 class="gb_large"><strong>Large</strong></h2>
            <div class="gb_lenth" >
                <small> length:  <span class="gb_len_large"></span> </small><br>
                <small> height:  <span class="gb_height_large"></span></small><br>
            </div>
        </div>
    </a>

</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_backing_hint', __("If you'd like a specific size. Click it's not quite right and let us know more.", "gb_neon_maker")); ?>
    </p>
</div>