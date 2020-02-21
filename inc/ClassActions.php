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
            ['name' => 'gb_submit_inquiry', 'callback' => 'submitInquiries'],
        ];
    }

    /**
     * Submit payments order records
     */
    public function submitPayments() {
        global $wpdb;
        $prefix = $wpdb->prefix;
        /* get stripe keys*/
        $option = get_option('NeonMaker_options');
        include_once GB_NEON_MAKER_ABSPATH . '/stripe/init.php';
        if($option['payment_mode'] = 'test')
        {
            $stripe_secret = $option['test_stripe_secret'];
        }else {
            $stripe_secret = $option['live_stripe_secret'];
        }
        \Stripe\Stripe::setApiKey($stripe_secret);
        //add customer to stripe
        $customer = \Stripe\Customer::create(array(
            'source' => $_POST['data']
        ));
        //print_r($_POST['formvalues']);
        // item details for which payment made
        $itemName = "Neon marker for text - ".$_POST['formvalues']['text']." - ".$_POST['formvalues']['size'] ;
        $itemPrice = $_POST['formvalues']['price'] * 100;
        $currency = "usd";

        // details for which payment performed
        $payDetails = \Stripe\Charge::create(array(
            'customer' => $customer->id,
            'amount' => $itemPrice,
            'currency' => $currency,
            'description' => $itemName
        ));
        // get payment details
        $paymenyResponse = $payDetails->jsonSerialize();
        //print_r($paymenyResponse);
        // check whether the payment is successful
        if($paymenyResponse['status'] == 'succeeded'){
           $success=array('status' => 'success', 'transactionData' => $paymenyResponse);
        }else {
            $success=array('status' => 'Failed', 'transactionData' => '');
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
        $transection_logs = json_encode($_POST['transection']);
        $baseimg = $_POST['baseimg'];
        $data = array(
            'content' => $formdata,
            'transection_logs' => $transection_logs,
            'baseimg' => $baseimg,
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
     * Submit Inquiries
     */
    public function submitInquiries() {
        global $wpdb;
        $prefix = $wpdb->prefix;
        parse_str($_POST['formdata'], $output);
        $data = array(
            'fname' => $output['fname'],
            'lname' => $output['lname'],
            'company' => $output['company'],
            'email' => $output['email'],
            'phone' => $output['phone'],
            'street' => $output['street'],
            'city' => $output['city'],
            'state' => $output['state'],
            'postcode' => $output['postcode'],
            'created' => date('Y-m-d h:i:s') ,
            'modified' => date('Y-m-d h:i:s') ,
        );
        $wpdb->insert("{$prefix}gb_inquiries", $data, array('%s'));
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
?>