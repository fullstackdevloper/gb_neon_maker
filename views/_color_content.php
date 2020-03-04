<div class="sbt_text_font">
    <div class="sbt_font_options">
        <label><?php _e("Choose a neon colour", "gb_neon_maker"); ?></label>
        <ul class="color_pick">
            <li class="lipstick active_color"><a onclick="GbNeonmaker.changeColor(this,'#FC43BD');" href="javascript:void(0);" style="box-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, rgb(252, 67, 189) 0px 0px 20px, rgb(252, 67, 189) 0px 0px 30px, rgb(252, 67, 189) 0px 0px 40px, rgb(252, 67, 189) 0px 0px 55px, rgb(252, 67, 189) 0px 0px 75px; color: rgb(255, 255, 255);"></a><span>Lipstick</span></li>
            <li class="solare_flare"><a onclick="GbNeonmaker.changeColor(this,'#FFA800');" href="javascript:void(0);"></a><span>Solar flare</span></li>
            <li class="mint"><a onclick="GbNeonmaker.changeColor(this,'#82F925');" href="javascript:void(0);"></a><span>Mint</span></li>
            <li class="rosey"><a onclick="GbNeonmaker.changeColor(this,'#F59CBC');" href="javascript:void(0);"></a><span>Rosey</span></li>
            <li class="tiger"><a onclick="GbNeonmaker.changeColor(this,'#ECF02A');" href="javascript:void(0);"></a><span>Tiger</span></li>
            <li class="candy"><a onclick="GbNeonmaker.changeColor(this,'#FF2828');" href="javascript:void(0);"></a><span>Candy</span></li>
            <li class="denim"><a onclick="GbNeonmaker.changeColor(this,'#3244EB');" href="javascript:void(0);"></a><span>Denim</span></li>
            <li class="lavender"><a onclick="GbNeonmaker.changeColor(this,'#DC78FF');" href="javascript:void(0);"></a><span>Lavender</span></li>
            <li class="gold_fizz"><a onclick="GbNeonmaker.changeColor(this,'#FF7E55');" href="javascript:void(0);"></a><span>Golden Fizz</span></li>
            <li class="maliblue"><a onclick="GbNeonmaker.changeColor(this,'#74CBE8');" href="javascript:void(0);"></a><span>Maliblue</span></li>
            <li class="ballerina"><a onclick="GbNeonmaker.changeColor(this,'#EF2CB8');" href="javascript:void(0);"></a><span>Ballerina</span></li>
            <li class="sulphur"><a onclick="GbNeonmaker.changeColor(this,'#FFF739');" href="javascript:void(0);"></a><span>Sulphur</span></li>
            <li class="sushi"><a onclick="GbNeonmaker.changeColor(this,'#86EA58');" href="javascript:void(0);"></a><span>Sushi</span></li>
            <li class="sherbet"><a onclick="GbNeonmaker.changeColor(this,'#ED9A9A');" href="javascript:void(0);"></a><span>Sherbet</span></li>
            <li class="antique"><a onclick="GbNeonmaker.changeColor(this,'#FFF1DC');" href="javascript:void(0);"></a><span>Antique</span></li>
            <li class="ruby"><a onclick="GbNeonmaker.changeColor(this,'#F11D1D');" href="javascript:void(0);"></a><span>Ruby</span></li>
            <li class="cobalt"><a onclick="GbNeonmaker.changeColor(this,'#2B41E7');" href="javascript:void(0);"></a><span>Cobalt</span></li>
            <li class="snow"><a onclick="GbNeonmaker.changeColor(this,'#EAEAEA');" href="javascript:void(0);"></a><span>Snow(white)</span></li>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
        <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_color_hint', __("View actual colour chart here. Some colours have a white jacket when turned off and others have a coloured jacket.</br></br>If you’d like multiple neon colours. Click ‘It’s not quite right’ and let us know more.", "gb_neon_maker")); ?>
    </p>
</div>