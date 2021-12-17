<?php

/*
 * Limits the blocks available in gutenberg
*/

function remove_blocks() {
	wp_enqueue_script( 'removed-blocks', get_theme_file_uri( '/assets/js/remove-blocks.js' ), array( 'wp-blocks', 'wp-dom' ), wp_get_theme()->get( 'Version' ), true );
}
add_action( 'enqueue_block_editor_assets', 'remove_blocks' );

?>