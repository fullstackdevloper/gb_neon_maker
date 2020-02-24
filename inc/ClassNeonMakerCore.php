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
    /**
     * inquiry form filed
     * @return Html
     */
    public function inquiryFormFields()  {
        $fileds  = [
            ["name" =>  "fname", "placeholder" => "First Name", "label" => "First Name*", "type" => "text", "id" => 'fname' ],
            ["name" =>  "lname", "placeholder" => "Last Name", "label" => "Last Name*", "type" => "text", "id" => 'lname' ],
            ["name" =>  "phone", "placeholder" => "Phone number", "label" => "Phone number*", "type" => "text", "id" => 'phone' ],
            ["name" =>  "email", "placeholder" => "Email address", "label" => "Email address*", "type" => "email", "id" => 'email' ],
            ["name" =>  "comment", "placeholder" => "Tell us your neon vision", "label" => "Tell us your neon vision", "type" => "textarea", "id" => 'comment' ],
        ];
        return $fileds;
    }

    /**
     * oder Delivery form filed
     * @return Html
     */
    public function stripeOrderDeliveryForm()  {
        $fileds  = [
                ["name" =>  "fname", "placeholder" => "First Name", "type" => "text", "id" => 'fname' ],
                ["name" =>  "lname", "placeholder" => "Last Name", "type" => "text", "id" => 'lname' ],
                ["name" =>  "company", "placeholder" => "Company", "type" => "text", "id" => 'company' ],
                ["name" =>  "phone", "placeholder" => "Phone", "type" => "text", "id" => 'phone' ],
                ["name" =>  "email", "placeholder" => "Email address", "type" => "email", "id" => 'email' ],
                ["name" =>  "address1", "placeholder" => "Delivery address 1", "type" => "text", "id" => 'address1' ],
                ["name" =>  "address2", "placeholder" => "Delivery address 2", "type" => "text", "id" => 'address2' ],
                ["name" =>  "city", "placeholder" => "City", "type" => "text", "id" => 'city' ],
                ["name" =>  "state", "placeholder" => "State/Territory", "type" => "text", "id" => 'state' ],
                ["name" =>  "postcode", "placeholder" => "Postcode", "type" => "text", "id" => 'postcode' ],
                ["name" =>  "country", "placeholder" => "Country", "type" => "text", "id" => 'country' ],
        ];
        return $fileds;
    }
    /**
     * stripe payment form filed
     * @return Html
     */
    public function stripeFormFields()  {
        $fileds  = [
            ["name" =>  "card-number", "placeholder" => "Card Number", "type" => "text", "id" => 'cardNumber' ],
            ["name" =>  "cvc", "placeholder" => "CCV", "type" => "text", "id" => 'cardCVC' ],
            ["name" =>  "month", "placeholder" => "MM", "type" => "text", "id" => 'cardExpMonth' ],
            ["name" =>  "year", "placeholder" => "YYYY", "type" => "text", "id" => 'cardExpYear' ],
        ];
        return $fileds;
    }

    /**
     * get custom fields  for text
     * @return Html
     */
    public function neonCustomFields($field) {
        switch ($field['type']) {
            case 'text':
            $inputFiled = '
                <input type = "'.$field['type'].'" placeholder = "'.$field['placeholder'].'" name = "'.$field['name'].'" id = '.$field['id'].'>';
                break;
            case 'email':
            $inputFiled = '
                <input type = "'.$field['type'].'" placeholder = "'.$field['placeholder'].'" name = "'.$field['name'].'" id = '.$field['id'].'>';
                break;
            case 'textarea':
                $inputFiled = '<textarea name = "'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'" ></textarea>';
                break;
            case 'checkbox':
                $inputFiled = '<input type = "'.$type.'" name="'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'">';
            case 'radio':
                $inputFiled = '<input type = "'.$type.'" name="'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'">';
                break;
            default:
                $inputFiled = '';
                break;
        }
        return $inputFiled;
    }
    /**
     * get the inquiry form text
     * @return Html
     */
    public function inquiryFormText() {
        return __("We’ll continue to refine your design until you’re completely satisfied.");
    }
}
?>