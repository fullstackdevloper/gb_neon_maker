<div class="sbt_text_font">
    <label><?php _e("Choose a backing Shape", "gb_neon_maker"); ?></label>
    No Display<br>
    Outline<br>
    Square<br>
    Box<br>
  <div class="sbt_font_options">
        <label>Choose a backing color</label>
        <ul class="color_pick">
            <li class="lipstick"><a onclick="GbNeonmaker.changeBackingColor('#FC43BD');" href="javascript:void(0);"></a><span>lipstick</span></li>
            <li class="solare_flare"><a onclick="GbNeonmaker.changeBackingColor('#FFA800');" href="javascript:void(0);"></a><span>Solare Flare</span></li>
            <li class="mint"><a onclick="GbNeonmaker.changeBackingColor('#82F925');" href="javascript:void(0);"></a><span>Mint</span></li>
            <li class="rosey"><a onclick="GbNeonmaker.changeBackingColor('#F59CBC');" href="javascript:void(0);"></a><span>Rosey</span></li>
            <li class="tiger"><a onclick="GbNeonmaker.changeBackingColor('#ECF02A');" href="javascript:void(0);"></a><span>Tiger</span></li>
            <li class="candy"><a onclick="GbNeonmaker.changeBackingColor('#FF2828');" href="javascript:void(0);"></a><span>Candy</span></li>
            <li class="denim"><a onclick="GbNeonmaker.changeBackingColor('#3244EB');" href="javascript:void(0);"></a><span>Denim</span></li>
            <li class="lavender"><a onclick="GbNeonmaker.changeBackingColor('#DC78FF');" href="javascript:void(0);"></a><span>Lavender</span></li>
            <li class="gold_fizz"><a onclick="GbNeonmaker.changeBackingColor('#FF7E55');" href="javascript:void(0);"></a><span>Golden Fizz</span></li>
            <li class="maliblue"><a onclick="GbNeonmaker.changeBackingColor('#74CBE8');" href="javascript:void(0);"></a><span>Maliblue</span></li>
            <li class="ballerina"><a onclick="GbNeonmaker.changeColor('#EF2CB8');" href="javascript:void(0);"></a><span>Ballerina</span></li>
            <li class="sulphur"><a onclick="GbNeonmaker.changeColor('#FFF739');" href="javascript:void(0);"></a><span>Sulphur</span></li>
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