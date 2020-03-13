<div class="gb_main_etemplate">
<h3>Email Template</h3>
	<form class="gb_form_etemplate" id="" method="POST">
		<div class="gb_topo_well">
			<div class="gb_inq_detail gb_etemp_width100">
				<label>Subject name</label>
				<input type="text" class="contract_name_input" name="subject_name" placeholder="Enter Subject name Here" value="<?php echo isset($all_fileds_byid->subject) ? $all_fileds_byid->subject: '';?>" />
				<input type="hidden" class="contract_name_input" name="form_id" value="customer" />
			</div>
			<div class="gb_inq_detail gb_etemp_width100">
				<label>From name</label>
				<input type="text" class="contract_name_input" name="from_name" placeholder="Enter From name Here" value="<?php echo isset($all_fileds_byid->from_name)?$all_fileds_byid->from_name:'';?>" />
			</div>
			<!--<div class="gb_inq_detail gb_etemp_width100">
				<label>Cc email</label>
				<input type="text" class="contract_name_input" name="to_email" placeholder="Enter From email Here" value="<?php echo isset($all_fileds_byid->to_email)?$all_fileds_byid->to_email:'';?>" />
			</div>-->
			<div class="gb_inq_detail gb_etemp_width100">
				<div class="clear"></div><br>
				<b style="display:inline">Insert Shortcode : </b><br>
				{{id}} {{amount}} {{balance_transaction}} {{address_city}} {{address_country}} {{address_line1}} {{address_line2}} {{address_zip}} {{address_state}} {{customer_email}} {{customer_phone}} {{description}} {{livemode}} {{payment_method}} {{status}} {{orderid}} {{date}}
				<br>
				<?php  if(!empty($availablefields)): ?>
					<?php foreach($availablefields as $key=>$field): ?>
						<?php echo '{{'.$field->field_name.'}} '; ?>
					<?php endforeach; ?>
				<?php endif;  ?>
				<br><?php
				wp_editor(@$content, 'neon_email_template');
				?>
			</div>
			<div class="gb_inq_detail ">
				<input class="btn btn-success" type="submit" name="foot_email_submit" value="Save Template">
			</div>
		</div>
	</form>
</div>