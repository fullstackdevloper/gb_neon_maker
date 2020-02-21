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
                'NeonMaker Options', 'Neon Maker', 'manage_options', 'NeonMaker_options', [$this, 'NeonMaker_orders_page']
        );
        add_submenu_page('NeonMaker_options', 'Neon Maker Orders', 'Orders', 'manage_options', 'NeonMaker_options', [$this, 'NeonMaker_orders_page']);
        add_submenu_page('NeonMaker_options', 'Neon Maker Inquiries', 'Inquiries', 'manage_options', 'gb-inquiries', [$this, 'NeonMaker_inquiries_page']);
        add_submenu_page('NeonMaker_options', 'Neon Maker Setting', 'Setting', 'manage_options', 'gb-setting',  [$this, 'NeonMaker_options_page']);
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
        echo settings_fields('NeonMaker_option_group');
        echo do_settings_sections('NeonMaker_options');
        echo submit_button();
        echo '</form>';
        echo '</div>';
    }

    /**
     * Orders page callback
     */
    public function NeonMaker_orders_page() {
        // Set class property
        include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassOrdersDetails.php';
        $dataprovider = new OrdersDetails();
        $dataprovider->prepare_items();
        $this->options = get_option('NeonMaker_options');
        echo '<div class="wrap">';
        echo wp_sprintf('<h1>%s</h1>', __('NeonMaker Orders Detail', 'gb_neon_maker'));
        echo '<form action="" method="post">';
        echo $dataprovider->search_box( 'Search', 'search_id' );
        echo $dataprovider->views();
        echo $dataprovider->display();
        echo '</form>';
        echo '</div>';
    }

    /**
     * Inquiries page callback
     */
    public function NeonMaker_inquiries_page() {
        // Set class property
        include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassInquiriesDetails.php';
        $dataprovider = new InquiriesDetails();
        $dataprovider->prepare_items();
        $this->options = get_option('NeonMaker_options');
        echo '<div class="wrap">';
        echo wp_sprintf('<h1>%s</h1>', __('NeonMaker Inquiries', 'gb_neon_maker'));
        echo '<form action="" method="post">';
        echo $dataprovider->search_box( 'Search', 'search_id' );
        echo $dataprovider->views();
        echo $dataprovider->display();
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
                'default_text', __('Default Text', 'neonmaker'), [$this, 'default_text'], 'NeonMaker_options', 'NeonMaker_general'
        );

        /*  add section for stripe payment gateway */
        add_settings_section(
                'NeonMaker_payment', // ID
                'Payment Setting', // Title
                [$this, 'payment_setting'], // Callback
                'NeonMaker_options' // Page
        );
        add_settings_field(
                'payment_mode', __('Payment Mode', 'neonmaker'), [$this, 'payment_mode'], 'NeonMaker_options', 'NeonMaker_payment'
        );
        add_settings_field(
                'test_stripe_key', __('Test Stripe Key', 'neonmaker'), [$this, 'test_stripe_key'], 'NeonMaker_options', 'NeonMaker_payment'
        );
        add_settings_field(
                'test_stripe_secret', __('Test Stripe Secret', 'neonmaker'), [$this, 'test_stripe_secret'], 'NeonMaker_options', 'NeonMaker_payment'
        );
        add_settings_field(
                'live_stripe_key', __('Live Stripe Key', 'neonmaker'), [$this, 'live_stripe_key'], 'NeonMaker_options', 'NeonMaker_payment'
        );
        add_settings_field(
                'live_stripe_secret', __('Live Stripe Secret', 'neonmaker'), [$this, 'live_stripe_secret'], 'NeonMaker_options', 'NeonMaker_payment'
        );
    }

    public function default_text() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[default_text]' value='<?php $this->displayValue('default_text'); ?>'>
        <?php
    }
    /**
     * Test mode stripe key
     */
    public function test_stripe_key() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[test_stripe_key]' value='<?php $this->displayValue('test_stripe_key'); ?>'>
        <?php
    }

    /**
     * Test mode stripe secret
     */
    public function test_stripe_secret() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[test_stripe_secret]' value='<?php $this->displayValue('test_stripe_secret'); ?>'>
        <?php
    }

    /**
     * enable/disable test mode of payment gateway
     */
    public function payment_mode() {
        ?>
        <select style="width:50%; min-width:300px;" name="NeonMaker_options[payment_mode]">
            <option <?php echo $this->displayValue('payment_mode', true) == 'test' ? 'selected' : ''; ?> value="test">Test</option>
            <option <?php echo $this->displayValue('payment_mode', true) == 'live' ? 'selected' : ''; ?> value="live">Live</option>
        </select>
        <?php
    }

    /**
     * Test mode stripe key
     */
    public function live_stripe_key() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[live_stripe_key]' value='<?php $this->displayValue('live_stripe_key'); ?>'>
        <?php
    }

    /**
     * Test mode stripe secret
     */
    public function live_stripe_secret() {
        ?>
        <input type='text' style="width:50%; min-width:300px;" name='NeonMaker_options[live_stripe_secret]' value='<?php $this->displayValue('live_stripe_secret'); ?>'>
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
    public function payment_setting() {
        print sprintf('');
    }
}
return new NeonMakerOptions();
?>