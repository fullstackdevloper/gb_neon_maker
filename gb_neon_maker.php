<?php

/**
 * Plugin Name: Gb Neon Maker
 * Plugin URI: https://example.com/
 * Description: A wordpress plugin for customize Neon Maker
 * Version: 1.0.0
 * Author: Author name here
 * Author URI: https://example.com
 * Text Domain: gb_neon_maker
 * Domain Path: /i18n/languages/
 *
 * @package gb_neon_maker
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Define GB_NEON_MAKER_PLUGIN_FILE.
if (!defined('GB_NEON_MAKER_PLUGIN_FILE')) {
    define('GB_NEON_MAKER_PLUGIN_FILE', __FILE__);
}

// Include the main NeonMaker class.
if (!class_exists('NeonMaker')) {
    include_once dirname(__FILE__) . '/inc/ClassNeonMaker.php';
}

/**
 * Main instance of NeonMaker.
 *
 * Returns the main instance of NeonMaker.
 *
 * @since  1.0.0
 * @return NeonMaker
 */
function NeonMaker() {
    return NeonMaker::instance();
}

// Global for backwards compatibility.
$GLOBALS['neon_maker'] = NeonMaker();
