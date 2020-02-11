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
            ['name' => 'test', 'callback' => 'testfunction'],
        ];
    }
    
    public function testfunction() {
        // NeonMaker()->engine->getView('testview', ['data' => ['as', 'asfasf']]);
        
        wp_send_json($response);
        return ;
    }
    /**
     * actions init method
     */
    public function NeonMakerActionsInit() {
        
    }
}

return new NeonMakerActions();
