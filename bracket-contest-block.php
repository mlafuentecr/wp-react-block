<?php
/**
 * Plugin Name:       Bracket Contest Blocks
 * Description:       React blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mario Lafuente
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bracket-contest-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bracket_contest_block_bracket_contest_block_block_init() {
	register_block_type( __DIR__ . '/build/blocks/block-mlb' );

}
add_action( 'init', 'bracket_contest_block_bracket_contest_block_block_init' );
