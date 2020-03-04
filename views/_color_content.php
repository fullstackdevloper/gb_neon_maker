<div class="sbt_text_font">
    <div class="sbt_font_options">
        <label><?php _e("Choose a neon colour", "gb_neon_maker"); ?></label>
        <ul class="color_pick">
            <li class="lipstick active_color"><a onclick="GbNeonmaker.changeColor(this,'#FC43BD');" href="javascript:void(0);" style="box-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, rgb(252, 67, 189) 0px 0px 20px, rgb(252, 67, 189) 0px 0px 30px, rgb(252, 67, 189) 0px 0px 40px, rgb(252, 67, 189) 0px 0px 55px, rgb(252, 67, 189) 0px 0px 75px; color: rgb(255, 255, 255);"><span>Lipstick</span></a></li>
            <li class="solare_flare"><a onclick="GbNeonmaker.changeColor(this,'#FFA800');" href="javascript:void(0);"><span>Solar flare</span></a></li>
            <li class="mint"><a onclick="GbNeonmaker.changeColor(this,'#82F925');" href="javascript:void(0);"><span>Mint</span></a></li>
            <li class="rosey"><a onclick="GbNeonmaker.changeColor(this,'#F59CBC');" href="javascript:void(0);"><span>Rosey</span></a></li>
            <li class="tiger"><a onclick="GbNeonmaker.changeColor(this,'#ECF02A');" href="javascript:void(0);"><span>Tiger</span></a></li>
            <li class="candy"><a onclick="GbNeonmaker.changeColor(this,'#FF2828');" href="javascript:void(0);"><span>Candy</span></a></li>
            <li class="denim"><a onclick="GbNeonmaker.changeColor(this,'#3244EB');" href="javascript:void(0);"><span>Denim</span></a></li>
            <li class="lavender"><a onclick="GbNeonmaker.changeColor(this,'#DC78FF');" href="javascript:void(0);"><span>Lavender</span></a></li>
            <li class="gold_fizz"><a onclick="GbNeonmaker.changeColor(this,'#FF7E55');" href="javascript:void(0);"><span>Golden Fizz</span></a></li>
            <li class="maliblue"><a onclick="GbNeonmaker.changeColor(this,'#74CBE8');" href="javascript:void(0);"><span>Maliblue</span></a></li>
            <li class="ballerina"><a onclick="GbNeonmaker.changeColor(this,'#EF2CB8');" href="javascript:void(0);"><span>Ballerina</span></a></li>
            <li class="sulphur"><a onclick="GbNeonmaker.changeColor(this,'#FFF739');" href="javascript:void(0);"><span>Sulphur</span></a></li>
            <li class="sushi"><a onclick="GbNeonmaker.changeColor(this,'#86EA58');" href="javascript:void(0);"><span>Sushi</span></a></li>
            <li class="sherbet"><a onclick="GbNeonmaker.changeColor(this,'#ED9A9A');" href="javascript:void(0);"><span>Sherbet</span></a></li>
            <li class="antique"><a onclick="GbNeonmaker.changeColor(this,'#FFF1DC');" href="javascript:void(0);"><span>Antique</span></a></li>
            <li class="ruby"><a onclick="GbNeonmaker.changeColor(this,'#F11D1D');" href="javascript:void(0);"><span>Ruby</span></a></li>
            <li class="cobalt"><a onclick="GbNeonmaker.changeColor(this,'#2B41E7');" href="javascript:void(0);"><span>Cobalt</span></a></li>
            <li class="snow"><a onclick="GbNeonmaker.changeColor(this,'#EAEAEA');" href="javascript:void(0);"><span>Snow(white)</span></a></li>
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