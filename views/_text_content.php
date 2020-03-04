<div class="sbt_text_font">
    <label><?php _e("Enter Text Below", "gb_neon_maker"); ?></label>
    <!--<input type="text" id="gb_default_value" onkeyup="return GbNeonmaker.changeNeonText(this);" Value="<?php //$this->getValue('default_text', $NeonMakerSetting); ?>">-->
    <span id="gb_text_error"></span>
    <textarea id="gb_default_value" onkeydown="return GbNeonmaker.changeNeonText(this);" onkeyup="return GbNeonmaker.changeNeonText(this);"><?php $this->getValue('default_text', $NeonMakerSetting); ?></textarea>
    <div class="sbt_font_options">
        <label>Choose a font</label>
        <ul>
            <li class="active_font">
                <a onclick="GbNeonmaker.changeFont(this,'ModernTalking-Regular');" href="javascript:void(0);">
                    <span class="gb_ModernTalking-Regular">Modern Talking</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'Bayshore');" href="javascript:void(0);">
                    <span class="gb_Bashore">Bayshore</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'thistails-regular');" href="javascript:void(0);">
                    <span class="gb_thistails-regular">Silhouette</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'Shorelines-Script-Bold');" href="javascript:void(0);">
                    <span class="gb_Shorelines-Script-Bold">Shorelines</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'thistails-sans');" href="javascript:void(0);">
                    <span class="gb_thistails-sans">Thistail</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'ShaimusOutline-Regular');" href="javascript:void(0);">
                    <span class="gb_ShaimusOutline-Regular">Shaimus</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'Courier');" href="javascript:void(0);">
                    <span class="gb_Courier">Courier</span>
                </a>
            </li>
            <li>
                <a onclick="GbNeonmaker.changeFont(this,'RoadCrew-Regular');" href="javascript:void(0);">
                    <span class="gb_RoadCrew-Regular">Road Crew</span>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="sbt_hint">
    <div class="icon_hint">
       <img src="<?php echo GB_NEON_MAKER_URL; ?>/assets/img/error.png" alt="paymentmethod">
    </div>
    <p>
        <?php print apply_filters('gb_text_hint', $this->logoTextHint()); ?>
    </p>
</div>