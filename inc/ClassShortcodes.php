<?php

/*
 * NeonMaker Shortcodes
 * @package NeonMaker
 * @since   1.0.0
 */

class NeonMakerShortcodes {

    function __construct() {
        /**
         * Shortcode to display the list of session in front end through shortcodes
         * [gb_neon_maker]
         */
        add_shortcode('gb_neon_maker', [$this, 'NeonMaker']);
    }

    /**
     * display sessions from a provider
     * @param array  $arg  Shortcode arguments
     *
     * @return HTML
     */
    public function NeonMaker($arg = []) {
        return NeonMaker()->engine->getView('neon_maker_content', []);
    }

}

return new NeonMakerShortcodes();
?>