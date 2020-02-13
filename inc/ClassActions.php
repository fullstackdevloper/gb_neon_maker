<?php
/*
 * NeonMaker Actions
 * @package gb_neon_maker/inc
 * @since   1.0.0
 */

class NeonMakerActions {

    /**
     * NeonMakerActions Constructor.
     */
    function __construct() {
        foreach ($this->AjaxActions() as $key => $action) {
            add_action("wp_ajax_{$action['name']}", [$this, $action['callback']]);
            add_action("wp_ajax_nopriv_{$action['name']}", [$this, $action['callback']]);
        }
        add_action('init', [$this, 'NeonMakerActionsInit']);
    }

    /*
     * NeonMaker ajax handlers
     *
     * @return Array
     */

    private function AjaxActions() {
        return [
            ['name' => 'gb_insert_order', 'callback' => 'saveOrderRecords'],
        ];
    }

    /**
     * Save order records
     */
    public function saveOrderRecords() {
        global $wpdb;
        $prefix = $wpdb->prefix;
        $formdata=json_encode($_POST['formdata']);
        $data = array(
            'content' => $formdata,
            'created' => date('Y-m-d h:i:s') ,
            'modified' => date('Y-m-d h:i:s') ,
        );
        $wpdb->insert("{$prefix}gb_orders", $data, array('%s'));
        $lastid = $wpdb->insert_id;
        $success=array('status' => 'success', 'lastid' => $lastid);
        wp_send_json($success);
        return;
    }

    /**
     * actions init method
     */
    public function NeonMakerActionsInit() {

    }
}

return new NeonMakerActions();
