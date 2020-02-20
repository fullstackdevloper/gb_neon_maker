<?php

/*
 * NeonMaker Main class
 * @package gb_neon_maker/inc
 * @since   1.0.0
 */

class NeonMaker {

    /**
     * NeonMaker version.
     *
     * @var string
     */
    public $version = '1.0.0';

    /**
     * The single instance of the class.
     *
     * @var NeonMaker
     * @since 1.0.0
     */
    protected static $_instance = null;

    /**
     * NeonMaker core functions
     *
     * @var engine
     * @since 1.0.0
     */
    public $engine;

    /**
     * Main NeonMaker Instance.
     *
     * Ensures only one instance of IsLayouts is loaded or can be loaded.
     *
     * @since 1.0.0
     * @static
     * @return NeonMaker.
     */
    public static function instance() {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * NeonMaker Constructor.
     *
     * @global Array $NeonMakerSetting
     *
     */
    function __construct() {
        global $NeonMakerSetting;

        $NeonMakerSetting = get_option('NeonMaker_options', true);
        $this->define_constants();
        $this->includes();
        $this->init_hooks();
        $this->engine = new NeonMakerCore();
    }

    /**
     * Hook into actions and filters.
     *
     * @since 1.0.0
     */
    private function init_hooks() {
        register_activation_hook(GB_NEON_MAKER_PLUGIN_FILE, array($this, 'NeonMaker_plugin_install'));
        add_action('init', array($this, 'init'), 0);

        /* register front end scripts */
        add_action('wp_enqueue_scripts', array($this, 'NeonMakerScripts'), 0);

        /* register admin scripts */
        add_action('admin_enqueue_scripts', array($this, 'NeonMakerAdminScripts'), 0);
    }

    /*
     * NeonMaker installation hook
     */

    public function NeonMaker_plugin_install() {
        global $wpdb;
        $prefix=$wpdb->prefix;
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        $gb_orders=$this->NeonMaker_orders($prefix);          //40
        $gb_inquiries=$this->NeonMaker_inquiries($prefix);          //40
    }

    /**
     * @method create gb_orders table
     * @pqaram string
     * @return string
     */
    public function NeonMaker_orders($prefix){
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        global $wpdb;
        $sql="CREATE TABLE `{$prefix}gb_orders` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `content` text NOT NULL,
        `created` datetime NOT NULL,
        `modified` datetime NOT NULL,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB;";

        $response=dbDelta( $sql );
        return $response;
    }

    /**
     * @method create gb_inquiries table
     * @pqaram string
     * @return string
     */
    public function NeonMaker_inquiries($prefix){
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        global $wpdb;
        $sql="CREATE TABLE `{$prefix}gb_inquiries` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(100) NOT NULL,
        `email` varchar(100) NOT NULL,
        `phone` varchar(100) NOT NULL,
        `website` varchar(150) NOT NULL,
        `created` datetime NOT NULL,
        `modified` datetime NOT NULL,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB;";

        $response=dbDelta( $sql );
        return $response;
    }

    /**
     * Init plugin when WordPress Initialises.
     */
    public function init() {

    }

    /**
     * Define NeonMaker Constants.
     */
    private function define_constants() {
        $this->define('GB_NEON_MAKER_ABSPATH', dirname(GB_NEON_MAKER_PLUGIN_FILE) . '/');
        $this->define('GB_NEON_MAKER_BASENAME', plugin_basename(GB_NEON_MAKER_PLUGIN_FILE));
        $this->define('GB_NEON_MAKER_URL', plugins_url(basename(GB_NEON_MAKER_ABSPATH)));
        $this->define('GB_NEON_MAKER_VERSION', $this->version);
        $this->define('GB_NEON_MAKER_ROLE', 'km_user');
    }

    /**
     * Include required core files used in admin and on the frontend.
     */
    public function includes() {
        include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassNeonMakerCore.php';
        include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassShortcodes.php';
        include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassActions.php';
        /* add admin files */
        if (is_admin()) {
            include_once GB_NEON_MAKER_ABSPATH . '/inc/ClassAdminOptions.php';
        }
    }

    /**
     * register and enque front end styles and scripts.
     *
     * @since 1.0.0
     */
    public function NeonMakerScripts() {
        global $post;
        global $NeonMakerSetting;

        wp_register_script('stripe', 'https://js.stripe.com/v2/', [], GB_NEON_MAKER_VERSION);
        wp_enqueue_script('NeonMaker_script', GB_NEON_MAKER_URL . "/assets/js/gb_neon_maker.js", array('jquery','stripe'), GB_NEON_MAKER_VERSION);
        wp_enqueue_style('NeonMaker_style', GB_NEON_MAKER_URL . '/assets/css/gb_neon_maker.css', array(), GB_NEON_MAKER_VERSION);



        wp_localize_script('NeonMaker_script', 'NeonMaker_ajax', array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'default_value' => $this->engine->getValue('default_text', $NeonMakerSetting, false),
                'payment_mode' => $this->engine->getValue('payment_mode', $NeonMakerSetting, false),
                'test_stripe_key' => $this->engine->getValue('test_stripe_key', $NeonMakerSetting, false),
                'test_stripe_secret' => $this->engine->getValue('test_stripe_secret', $NeonMakerSetting, false),
                'live_stripe_key' => $this->engine->getValue('live_stripe_key', $NeonMakerSetting, false),
                'live_stripe_secret' => $this->engine->getValue('live_stripe_secret', $NeonMakerSetting, false)
            )
        );
    }

    public function NeonMakerAdminScripts() {
        wp_enqueue_script('NeonMaker_admin_script', GB_NEON_MAKER_URL . '/assets/js/gb_neon_maker_admin.js', array('jquery'), GB_NEON_MAKER_VERSION);
        wp_enqueue_style('NeonMaker_admin_style', GB_NEON_MAKER_URL . '/assets/css/gb_neon_maker_admin.css', array(), GB_NEON_MAKER_VERSION);
    }

    /**
     * Define constant if not already set.
     *
     * @param string      $name  Constant name.
     * @param string|bool $value Constant value.
     */
    private function define($name, $value) {
        if (!defined($name)) {
            define($name, $value);
        }
    }

}
?>