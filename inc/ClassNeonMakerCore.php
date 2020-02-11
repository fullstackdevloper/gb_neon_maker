<?php

/*
 * NeonMaker Core funtions
 * @package NeonMaker
 * @since   1.0.0
 */

class NeonMakerCore {


    /**
     * class constructor 
     * @global type $NeonMakerSetting
     */
    function __construct() {

    }

    /**
     * get the content from view file
     * @param String $viewname view file name
     * @param Array $data Data to send into view file
     * @throws ApiException on a non 2xx response
     * @return HTML
     */
    public function getView($viewname, array $data = []) {
        if (!empty($data)) {
            foreach ($data as $key => $value) {
                $$key = $value;
            }
        }
        /* default variables in view */
        global $NeonMakerSetting;

        ob_start();
        $viewpath = get_stylesheet_directory() . "/gb_neon_maker/{$viewname}.php";
        if (!file_exists($viewpath)) {
            $viewpath = GB_NEON_MAKER_ABSPATH . "views/{$viewname}.php";
        }
        require($viewpath);
        $html = ob_get_clean();
        return $html;
    }
    
    /**
     * get value from array/object if set
     * 
     * @param String $key
     * @param Mixed $Data
     * 
     * return Mixed
     */
    public function getValue($key, $Data, $print = true) {
        if (is_array($Data)) {
            if (array_key_exists($key, $Data)) {
                if ($print) {
                    echo $Data[$key];
                } else {
                    return $Data[$key];
                }
            }
        }

        if (isset($Data->$key)) {
            if ($print) {
                echo $Data->$key;
            } else {
                return $Data->$key;
            }
        }

        return false;
    }
    
    /**
     * get the hint for text
     * @return Html
     */
    public function logoTextHint() {
        return __("If you have another font in mind, would like multiple fonts, or would like to incorporate an image or logo, click (it's not quote right) and let us know more.", 'gb_neon_maker');
    }
}
