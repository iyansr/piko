import React from 'react'

const SearcField = ({ onSubmit, ...props }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit?.()
			}}>
			<input
				type='text'
				name='search'
				id='piko-searchfield'
				placeholder='Mau cari coffee shop apa?'
				className='appearance-none min-w-[346px] rounded-lg p-4 border border-[#C9CFCE] outline-[#C9CFCE]'
				{...props}
			/>
		</form>
	)
}

export default SearcField
