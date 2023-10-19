/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, SelectControl  } from '@wordpress/components';
import { useState, useEffect } from 'react';
import './editor.scss';



export default function Edit({attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();
	const { 
		fontSize, 
		contentSelector, 
		mySetting, 
		Bracket_Title 
	} = attributes;

	const toggleSetting 			= () => setAttributes( { mySetting: ! mySetting } );
	const ChangeBracketTitle 	= (value) => setAttributes( { Bracket_Title: value } );
	const changefont  				= (value) => setAttributes( { fontSize: value } );
	const checkJson						=  'no data';
console.log('content: ',contentSelector)
	return (
		<div  { ...blockProps }>
				{ __(
					'Bracket Contest Block – hello from the editor!',
					'bracket-contest-block'
				) }
				<div className='bracket-title'>
					<TextControl
						label='Bracket Title'
						value={ Bracket_Title }
						onChange={ ( value ) => ChangeBracketTitle( value ) }
					/>
					{checkJson}
				</div>
	
    <SelectControl
            label="Size"
            value={ fontSize }
            options={ [
                { label: 'Big', value: '100%' },
                { label: 'Medium', value: '50%' },
                { label: 'Small', value: '25%' },
            ] }
            onChange={ ( newSize ) => changefont( newSize ) }
            __nextHasNoMarginBottom
        />
			<button onClick={ toggleSetting }>Toggle setting</button>
			{
				(
					mySetting ? 'Settings on' : ''
				)
			}
		</div>
	);
}
