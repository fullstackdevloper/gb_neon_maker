<?php
// WP_List_Table is not loaded automatically so we need to load it in our application
if( ! class_exists( 'WP_List_Table' ) ) {
    require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}
/**
 * Create a new table class that will extend the WP_List_Table
 */
class InquiriesDetails extends WP_List_Table
{

	public function __construct() {
        parent::__construct(
            array(
                'singular' => 'singular_form',
                'plural'   => 'plural_form',
                'ajax'     => true
            )
        );

    }
    /**
     * Prepare the items for the table to process
     *
     * @return Void
     */
	public function prepare_items() {

		//$this->_column_headers = $this->get_column_info();
		$columns = $this->get_columns();
        $hidden = $this->get_hidden_columns();
        $sortable = $this->get_sortable_columns();
		$this->_column_headers = array($columns, $hidden, $sortable);
		/** Process bulk action */
		$this->process_bulk_action();
		$per_page     = $this->get_items_per_page( 'inquiries_per_page', 20 );
		$current_page = $this->get_pagenum();
		$total_items  = self::record_count();
		$data=self::get_neonmaker_inquiries( $per_page, $current_page );
		$this->set_pagination_args( [
			'total_items' => $total_items, //WE have to calculate the total number of items
			'per_page'    => $per_page //WE have to determine how many items to show on a page
		] );

		$this->items =$data;
	}


	/**
	 * Retrieve categories data from the database
	 *
	 * @param int $per_page
	 * @param int $page_number
	 *
	 * @return mixed
	 */
	public static function get_neonmaker_inquiries( $per_page = 10, $page_number = 1 ) {
		global $wpdb;
		$prefix = $wpdb->prefix;
		$sql = "select * From {$prefix}gb_inquiries";
        if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'view'){
            $sql .=  " where id = ".$_REQUEST['inquiry_id'];
            $result = $wpdb->get_results($sql);
            foreach ($result as $key => $value) {
                $content = json_decode($value->content);
                $shadow_color="";
                if($content->onOffswitch == 'true') {
                    $shadow_color = wp_sprintf("rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, %s 0px 0px 20px, %s 0px 0px 30px, %s 0px 0px 40px, %s 0px 0px 55px, %s 0px 0px 75px", $content->color,  $content->color, $content->color, $content->color, $content->color);
                    $style = wp_sprintf("font-family:'%s.woff';text-shadow:%s;color: #fff", $content->font, $shadow_color);
                }else {
                    $style = wp_sprintf("font-family:'%s.woff';color: %s", $content->font, $content->color);
                }
                $html = '<div class="gb_inq_detail gb_width100"><h1> Inquiry Details </h1>';
                $html .= '<div class="gb_inq_detail gb_width50" >';
                $html .= '<ul>';
                $html .= '<li> <b>First name : </b>'.$value->fname.'</li>';
                $html .= '<li> <b>Last name : </b>'.$value->lname.'</li>';
                $html .= '<li> <b>Email address : </b>'.$value->email.'</li>';
                $html .= '<li> <b>Phone number : </b>'.$value->phone.'</li>';
                $html .= '<li> <b>Tell us your neon vision : </b>'.$value->comment.'</li>';
                $html .= '<li><img class="gb_slides" src="'.@$content->slideImg.'" ><div class="admin_txt_over"><span style="'.$style.'">'.$content->text.'</span></div></li>';
                $html .= '</ul>';
                $html .= '</div>';
                $html .= '<div class="gb_inq_detail gb_width50" >';
                if(!empty($content)) {
                    $html .= '<ul>';
                    $html .= '<li> <b>Text : </b>'.@$content->text.'</li>';
                    $html .= '<li> <b>Font : </b>'.@$content->font.'</li>';
                    $html .= '<li> <b>Size : </b>'.@$content->size.'</li>';
                    $html .= '<li> <b>Color : </b>'.@$content->color.'</li>';
                    $html .= '<li> <b>Price : </b>'.@$content->price.'</li>';
                    if(isset($content->backingType) && $content->backingType != '') {
                        $html .= '<li> <b>Backing Type : </b>'.$content->backingType.'</li>';
                    }
                    if(isset($content->backingColor) && $content->backingColor != '') {
                        $html .= '<li> <b>Backing color : </b>'.$content->backingColor.'</li>';
                    }
                    if(isset($content->fixture) && $content->fixture != '') {
                            $html .= '<li> <b>Fixture : '.$content->fixture.'</li>';
                    }
                    if(isset($content->delivery) && $content->delivery != '') {
                        $html .= '<li> <b>Delivery : </b>'.$content->delivery.'</li>';
                    }
                    $html .= '</ul>';
                }
                $html .= '</div>';
                $html .= '</div>';
            }
            echo $html;
            die;
        }else {
    		if(isset($_REQUEST['s']))
    		{
    			$sql .= ' where fname LIKE "%'.$_REQUEST['s'].'%"';
    		}
    		if ( ! empty( $_REQUEST['orderby'] ) ) {
    			$sql .= ' ORDER BY ' . esc_sql( $_REQUEST['orderby'] ).'';
    			$sql .= ! empty( $_REQUEST['order'] ) ? ' ' . esc_sql( $_REQUEST['order'] ) : ' ASC';
    		}

    		$sql .= " LIMIT $per_page";
    		$sql .= ' OFFSET ' . ( $page_number - 1 ) * $per_page;
    		$result = $wpdb->get_results( $sql, 'ARRAY_A' );

    		return $result;
        }
	}
	/**
	 * Render the bulk edit checkbox
	 *
	 * @param array $item
	 *
	 * @return string
	 */
	function column_cb( $item ) {
		return sprintf(
			'<input type="checkbox" name="bulk-delete[]" value="%s" />', $item['id']
		);
	}

    /*
     *
     * name: inquiries name
     * @param array $item an array of DB data
     * @return string
     *
     */
	function column_fname( $item ) {

		$delete_nonce = wp_create_nonce( 'bx_delete_inquiries' );
		$name = '<strong>' . $item['fname']. '</strong>';
		$actions = [
			'delete'=>sprintf( "<a onclick=\"return confirm('are you sure to delete ".$item['fname']." Name ?')\" href='?page=%s&action=%s&__ID=%s&_wpnonce=%s'>Delete</a>", esc_attr( $_REQUEST['page'] ), 'delete', absint( $item['id'] ), $delete_nonce ),
            'view'=>sprintf( "<a href='?page=%s&action=%s&inquiry_id=%s'>View</a>", esc_attr( $_REQUEST['page'] ), 'view', absint( $item['id'] ))
		];

		return $name . $this->row_actions( $actions );
	}

    /*
     *
     * name: email filed
     * @param array $item an array of DB data
     * @return string
     *
     */
    function column_lname($item)
    {
        return $item['lname'];
    }

    function column_email($item)
    {
        return $item['email'];
    }

    /*
     *
     * name: phone filed
     * @param array $item an array of DB data
     * @return string
     *
     */
    function column_phone($item)
    {
        return $item['phone'];
    }

	/*
	 *
	 * name: created date
	 * @param array $item an array of DB data
	 * @return string
	 *
	 */
	function column_modified($item)
	{
		return date(get_option('date_format'),strtotime($item['modified']));
	}
	/*
	 *
	 * name: created date
	 * @param array $item an array of DB data
	 * @return string
	 *
	 */
	function column_created($item)
	{
		return date(get_option('date_format'),strtotime($item['created']));
	}

    /**
     * Override the parent columns method. Defines the columns to use in your listing table
     *
     * @return Array
     */

	function get_columns() {
		$columns = [
			'cb'      => '<input type="checkbox" />',
			'fname'    => __( 'First Name', 'gb_neon_maker' ),
            'lname'    => __( 'Last Name', 'gb_neon_maker' ),
            'email'    => __( 'Email', 'gb_neon_maker' ),
            'phone'    => __( 'Phone', 'gb_neon_maker' ),
            'created'       =>__( 'Created', 'gb_neon_maker' ),
			'modified'    => __( 'Modified', 'gb_neon_maker' ),
		];

		return $columns;
	}

    /**
     * Define which columns are hidden
     *
     * @return Array
     */
    public function get_hidden_columns()
    {
        return array();
    }
    /**
	 * Columns to make sortable.
	 *
	 * @return array
	 */
	public function get_sortable_columns() {
		$sortable_columns = array(
			'fname' => array( 'fname', true ),
            'lname' => array( 'lname', true ),
            'email' => array( 'email', true ),
            'phone' => array( 'phone', true ),
			'created' => array( 'created', false ),
			'modified' => array( 'modified', false ),
		);

		return $sortable_columns;
	}

    /**
	 * Returns an associative array containing the bulk action
	 *
	 * @return array
	 */
	public function get_bulk_actions() {
		$actions = [
			'bulk-delete' => 'Delete'
		];

		return $actions;
	}
    /**
     * Define what data to show on each column of the table
     *
     * @param  Array $item        Data
     * @param  String $column_name - Current column name
     *
     * @return Mixed
     */
    public function column_default( $item, $column_name )
    {
        switch( $column_name ) {
            case 'id':
            case 'fname':
            case 'created':
			case 'modified':
                return $item[$column_name];
            default:
               return $item[$column_name];
        }
    }
	public function process_bulk_action() {

		//Detect when a bulk action is being triggered...
		if ( 'delete' === $this->current_action() ) {

			// In our file that handles the request, verify the nonce.
			$nonce = esc_attr( $_REQUEST['_wpnonce'] );

			if ( ! wp_verify_nonce( $nonce, 'bx_delete_inquiries' ) ) {
				die( 'Go get a life script ' );
			}
			else {
				self::delete_item( absint( $_GET['__ID'] ) );
				/*$redirect=admin_url('admin.php?page=gb_inquiries');
				wp_redirect($redirect);
				exit;*/
			}

		}

		// If the delete bulk action is triggered
		if ( ( isset( $_POST['action'] ) && $_POST['action'] == 'bulk-delete' )
		     || ( isset( $_POST['action2'] ) && $_POST['action2'] == 'bulk-delete' )
		) {

			$delete_ids = esc_sql( $_POST['bulk-delete'] );

			// loop over the array of record IDs and delete them
			foreach ( $delete_ids as $id ) {
				self::delete_item( $id );

			}
			/*$redirect=admin_url('admin.php?page=gb_inquiries');
			wp_redirect($redirect);
				exit;
			exit;*/
		}
	}

	/**
	 * Delete a category record.
	 *
	 * @param int $id customer ID
	 */
	public static function delete_item( $id ) {
		global $wpdb;
		$prefix=$wpdb->prefix;
		$wpdb->delete(
			"{$prefix}gb_inquiries",
			[ 'id' => $id ],
			[ '%d' ]
		);
	}
	/**
	 * Returns the count of records in the database.
	 *
	 * @return null|string
	 */
	public static function record_count() {
		global $wpdb;
		$prefix=$wpdb->prefix;
		$sql = "SELECT COUNT(*) FROM {$prefix}gb_inquiries";

		return $wpdb->get_var( $sql );
	}


	/** Text displayed when no category data is available */
	public function no_items() {
		_e( 'No Item found.', 'bx' );
	}
    /**
     * Allows you to sort the data by the variables set in the $_GET
     *
     * @return Mixed
     */
    private function sort_data( $a, $b )
    {
        // Set defaults
        $orderby = 'SortOrder';
        $order = 'asc';
        // If orderby is set, use this as the sort column
        if(!empty($_GET['orderby']))
        {
            $orderby = $_GET['orderby'];
        }
        // If order is set use this as the order
        if(!empty($_GET['order']))
        {
            $order = $_GET['order'];
        }
        $result = strcmp( $a[$orderby], $b[$orderby] );
        if($order === 'asc')
        {
            return $result;
        }
        return -$result;
    }
}
?>