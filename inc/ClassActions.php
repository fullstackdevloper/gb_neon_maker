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
            'source' => $_POST['data'],
            'email' => $_POST['email'],
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
        $data = array(
            'content' => $formdata,
            'transection_logs' => $transection_logs,
            'created' => date('Y-m-d h:i:s') ,
            'modified' => date('Y-m-d h:i:s') ,
        );
        $wpdb->insert("{$prefix}gb_orders", $data, array('%s'));
        $lastid = $wpdb->insert_id;

        $fontTextName = ['ModernTalking-Regular' => 'Fruity', 'Bayshore' => 'Bayshore', 'thistails-regular' => 'Silhouette', 'Shorelines-Script-Bold' => 'Shorelines', 'thistails-sans' => 'Thistail', 'ShaimusOutline-Regular' => 'Shaimus', 'Courier' => 'Courier', 'RoadCrew-Regular' => 'Road Crew'];
        $colorTextName = [
            '#FC43BD' => 'Lipstick',
            '#FFA800' => 'Solar Flare',
            '#82F925' => 'Mint',
            '#F59CBC' => 'Rosey',
            '#ECF02A' => 'Tiger',
            '#FF2828' => 'Candy',
            '#3244EB' => 'Denim',
            '#DC78FF' => 'Lavender',
            '#FF7E55' => 'Golden Fizz',
            '#74CBE8' => 'Maliblue',
            '#EF2CB8' => 'Ballerina',
            '#FFF739' => 'Sulphur',
            '#86EA58' => 'Sushi',
            '#ED9A9A' => 'Sherbet',
            '#FFF1DC' => 'Antique',
            '#F11D1D' => 'Ruby',
            '#2B41E7' => 'Cobalt',
            '#EAEAEA' => 'Snow(white)',
        ];

        $shortcodes = array('{{id}}', '{{amount}}', '{{balance_transaction}}', '{{address_city}}', '{{address_country}}', '{{address_line1}}', '{{address_line2}}', '{{address_zip}}', '{{address_state}}', '{{customer_email}}', '{{customer_phone}}', '{{description}}', '{{livemode}}', '{{payment_method}}', '{{status}}', '{{orderid}}', '{{date}}', '{{text}}', '{{font}}', '{{color}}', '{{size}}', '{{backingType}}', '{{backingColor}}', '{{fixture}}', '{{delivery}}', '{{slideImg}}' );
        $values = array(
            isset($_POST['transection']['id']) ? $_POST['transection']['id'] : '',
            isset($_POST['transection']['amount']) ? ($_POST['transection']['amount'])/100 : '',
            isset($_POST['transection']['balance_transaction']) ? $_POST['transection']['balance_transaction'] : '',
            isset($_POST['transection']['source']['address_city']) ? $_POST['transection']['source']['address_city'] : '',
            isset($_POST['transection']['source']['address_country']) ? $_POST['transection']['source']['address_country'] : '',
            isset($_POST['transection']['source']['address_line1']) ? $_POST['transection']['source']['address_line1'] : '',
            isset($_POST['transection']['source']['address_line2']) ? $_POST['transection']['source']['address_line2'] : '',
            isset($_POST['transection']['source']['address_zip']) ? $_POST['transection']['source']['address_zip'] : '',
            isset($_POST['transection']['source']['address_state']) ? $_POST['transection']['source']['address_state'] : '',
            isset($_POST['cemail']) ? $_POST['cemail'] : '',
            $_POST['customer_phone'],
            isset($_POST['transection']['description']) ? $_POST['transection']['description'] : '',
            isset($_POST['transection']['livemode']) ? $_POST['transection']['livemode'] : '',
            isset($_POST['transection']['payment_method']) ? $_POST['transection']['payment_method'] : '',
            isset($_POST['transection']['status']) ? $_POST['transection']['status'] : '',
            isset($lastid) ? $lastid : '',
            isset($_POST['transection']['created']) ? date('F j, Y') : '',
            isset($_POST['formdata']['text']) ? $_POST['formdata']['text'] : '',
            isset($_POST['formdata']['font']) ? $fontTextName[$_POST['formdata']['font']] : '',
            isset($_POST['formdata']['color']) ? $colorTextName[$_POST['formdata']['color']] : '',
            isset($_POST['formdata']['size']) ? $_POST['formdata']['size'] : '',
            isset($_POST['formdata']['backingColor']) ? $_POST['formdata']['backingColor'] : 'N/A',
            isset($_POST['formdata']['backingType']) ? $_POST['formdata']['backingType'] : 'N/A',
            isset($_POST['formdata']['fixture']) ? $_POST['formdata']['fixture'] : 'N/A',
            isset($_POST['formdata']['delivery']) ? $_POST['formdata']['delivery'] : '',
            //isset($_POST['formdata']['slideImg']) ? $_POST['formdata']['slideImg'] : '',
        );
        $sql = "SELECT * FROM `{$prefix}gb_email_templates` WHERE `form_id` = 'customer'";
        $result = $wpdb->get_row($sql);

        $doc_data = stripslashes($result->email_body);
        $doc_data = str_replace($shortcodes,$values,$doc_data);

        $mailhtml = stripslashes($doc_data);
        $subject = $result->subject;
        $Cc_email = $result->to_email;
        $to = $_POST['cemail'];
 		$admin_email = get_option('admin_email');
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        // Create email headers
        $headers .= 'From: '.$admin_email ."\r\n".
            'Reply-To: '.$admin_email ."\r\n" .
            'Cc: '.$Cc_email ."\r\n" .
            'X-Mailer: PHP/' . phpversion();
        $ismailsent=wp_mail($to,$subject,$mailhtml,$headers);
        if(ismailsent){
            $sql1 = "SELECT * FROM `{$prefix}gb_email_templates` WHERE `form_id` = 'admin'";
            $result1 = $wpdb->get_row($sql1);
            $doc_data1 = stripslashes($result1->email_body);
            $doc_data1 = str_replace($shortcodes,$values,$doc_data1);
            echo $mailhtml2 = stripslashes($doc_data1);
            $subject = $result1->subject;
            $to = get_option('admin_email');
            $ismailsent2 = wp_mail($to,$subject,$mailhtml2,$headers);
        }
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
        foreach ($output as $key => $value) {
            $data1[$key] = $value;
        }
        $data2 = array(
            'content' => json_encode($_POST['toolData']),
            'created' => date('Y-m-d h:i:s') ,
            'modified' => date('Y-m-d h:i:s') ,
        );
        $data = array_merge($data1,$data2);
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