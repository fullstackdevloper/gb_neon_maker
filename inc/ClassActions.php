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
            ['name' => 'gb_submit_payment', 'callback' => 'submitPayments'],
        ];
    }

    /**
     * Save order records
     */
    public function submitPayments() {
        global $wpdb;
        $prefix = $wpdb->prefix;
        /* get stripe keys*/
        $option = get_option('NeonMaker_options');

        include_once GB_NEON_MAKER_ABSPATH . '/stripe/init.php';
        \Stripe\Stripe::setApiKey($option['stripe_secret']);
        //add customer to stripe
        $customer = \Stripe\Customer::create(array(
            'source' => $_POST['data']
        ));
        // item details for which payment made
        $itemName = "Neon marker element";
        $itemNumber = "NEONMARKER987654321";
        $itemPrice = 50;
        $currency = "usd";
        $orderID = "NM987654321";

        // details for which payment performed
        $payDetails = \Stripe\Charge::create(array(
            'customer' => $customer->id,
            'amount' => $itemPrice,
            'currency' => $currency,
            'description' => $itemName,
            'metadata' => array(
            'order_id' => $orderID
            )
        ));
        // get payment details
        $paymenyResponse = $payDetails->jsonSerialize();

        // check whether the payment is successful
        if($paymenyResponse['status'] == 'succeeded'){
           $success=array('status' => 'success');
        }else {
            $success=array('status' => 'Failed');
        }
        wp_send_json($success);
        return;
    }

    /**
     * Submit stripe payments
     */
    public function saveOrderRecords() {
        global $wpdb;
        $prefix = $wpdb->prefix;
        $formdata = json_encode($_POST['formdata']);
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
