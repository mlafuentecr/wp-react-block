/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<p { ...blockProps}>
			{ `Bracket Contest Block – hello from the saved content! ${ attributes.contentSelector } ` }
		</p>
	);
}
