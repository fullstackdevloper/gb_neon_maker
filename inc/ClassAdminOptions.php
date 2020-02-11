<?php

class NeonMakerOptions {

    /**
     * Holds the values to be used in the fields callbacks
     */
    private $options;

    /**
     * Start up
     */
    public function __construct() {
        add_action('admin_menu', array($this, 'NeonMaker__plugin_page'));
        add_action('admin_init', array($this, 'page_init'));
    }

    /**
     * Add options page
     */
    public function NeonMaker__plugin_page() {
        add_menu_page(
                'NeonMaker Options', 'Neon Maker', 'manage_options', 'NeonMaker_options', [$this, 'NeonMaker_options_page']
        );
    }

    /**
     * Options page callback
     */
    public function NeonMaker_options_page() {
        // Set class property
        $this->options = get_option('NeonMaker_options');
        echo '<div class="wrap">';
        echo wp_sprintf('<h1>%s</h1>', __('NeonMaker Settings', 'gb_neon_maker'));
        echo '<form method="post" action="options.php">';
        // This prints out all hidden setting fields
        settings_fields('NeonMaker_option_group');
        do_settings_sections('NeonMaker_options');
        submit_button();
        echo '</form>';
        echo '</div>';
    }

    /**
     * Register and add settings
     */
    public function page_init() {
        register_setting(
                'NeonMaker_option_group', // Option group
                'NeonMaker_options', // Option name
                [$this, 'sanitize'] // Sanitize
        );
        add_settings_section(
                'NeonMaker_general', // ID
                'General Setting', // Title
                [$this, 'general_setting'], // Callback
                'NeonMaker_options' // Page
        );
        
        add_settings_field(
                'default_text', __('Default Text', 'kidcircle'), [$this, 'default_text'], 'NeonMaker_options', 'NeonMaker_general'
        );
    }
    
    public function default_text() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[default_text]' value='<?php $this->displayValue('default_text'); ?>'>
        <?php
    }
    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public function sanitize($input) {
        
        return $input;
    }
    
    /**
     * display value from array
     * @param String $key
     * @param bolean $return
     * 
     * @return String value from options
     */
    private function displayValue($key, $return = false) {
        if (array_key_exists($key, $this->options)) {
            if ($return) {
                return $this->options[$key];
            }
            print $this->options[$key];
        }
    }
    /**
     * Print the NeonMaker api information
     */
    public function general_setting() {
        print sprintf('');
    }
}

return new NeonMakerOptions();
