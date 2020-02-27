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
            ["name" =>  "fname", "placeholder" => "", "label" => "First Name*", "type" => "text", "id" => 'fname', 'required' => true ],
            ["name" =>  "lname", "placeholder" => "", "label" => "Last Name*", "type" => "text", "id" => 'lname', 'required' => true ],
            ["name" =>  "phone", "placeholder" => "", "label" => "Phone number*", "type" => "text", "id" => 'phone', 'required' => true ],
            ["name" =>  "email", "placeholder" => "", "label" => "Email address*", "type" => "email", "id" => 'email', 'required' => true ],
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
                ["name" =>  "fname", "placeholder" => "", "label" => "First Name*", "type" => "text", "id" => 'firstname', 'required' => true ],
                ["name" =>  "lname", "placeholder" => "", "label" => "Last Name", "type" => "text", "id" => 'lastname', 'required' => true ],
                ["name" =>  "company", "placeholder" => "", "label" => "Company (if applicable)", "type" => "text", "id" => 'company'],
                ["name" =>  "phone", "placeholder" => "Phone", "label" => "Phone", "type" => "text", "id" => 'phonenumber', 'required' => true],
                ["name" =>  "email", "placeholder" => "", "label" => "Email address", "type" => "email", "id" => 'emailid', 'required' => true],
                ["name" =>  "address1", "placeholder" => "", "label" => "Delivery address 1", "type" => "text", "id" => 'address1'],
                ["name" =>  "address2", "placeholder" => "", "type" => "text", "id" => 'address2'],
                ["name" =>  "city", "placeholder" => "", "type" => "text", "label" => "City", "id" => 'city', 'required' => true],
                ["name" =>  "state", "placeholder" => "", "label" => "State/Territory", "type" => "text", "id" => 'state', 'required' => true],
                ["name" =>  "postcode", "placeholder" => "", "label" => "Postcode", "type" => "text", "id" => 'postcode', 'required' => true ],
                ["name" =>  "country", "placeholder" => "", "label" => "Country", "type" => "text", "id" => 'country', 'required' => true ],
        ];
        return $fileds;
    }
    /**
     * stripe payment form filed
     * @return Html
     */
    public function stripeFormFields()  {
        $fileds  = [
            ["name" =>  "card-number", "placeholder" => "Card Number", "type" => "text", "id" => 'cardNumber', 'required' => true],
            ["name" =>  "cvc", "placeholder" => "CCV", "type" => "text", "id" => 'cardCVC', 'required' => true ],
            ["name" =>  "month", "placeholder" => "MM", "type" => "text", "id" => 'cardExpMonth', 'required' => true ],
            ["name" =>  "year", "placeholder" => "YYYY", "type" => "text", "id" => 'cardExpYear', 'required' => true ],
        ];
        return $fileds;
    }

    /**
     * get custom fields  for text
     * @return Html
     */
    public function neonCustomFields($field) {
        $reuired = (isset($field['required']) && $field['required'] == true) ? 'required' : '';
        $addlabel = (isset($field['label']) && $field['label'] != '') ? '<label for="'.$field['name'].'" id="'.$field['name'].'" >'.$field['label'].'</label>' : '';
        switch ($field['type']) {
            case 'text':
            $inputFiled = $addlabel.'
                <input type = "'.$field['type'].'" placeholder = "'.$field['placeholder'].'" name = "'.$field['name'].'" id = '.$field['id'].' '.$reuired.'>';
                break;
            case 'email':
            $inputFiled = $addlabel.'
                <input type = "'.$field['type'].'" placeholder = "'.$field['placeholder'].'" name = "'.$field['name'].'" id = '.$field['id'].' '.$reuired.'>';
                break;
            case 'textarea':
                $inputFiled = $addlabel.'<textarea name = "'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'" '.$reuired.'></textarea>';
                break;
            case 'checkbox':
                $inputFiled = $addlabel.'<input type = "'.$type.'" name="'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'" '.$reuired.'>';
            case 'radio':
                $inputFiled = $addlabel.'<input type = "'.$type.'" name="'.$field['name'].'" placeholder = "'.$field['placeholder'].'" id="'.$field['id'].'" '.$reuired.'>';
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