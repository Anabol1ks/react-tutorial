import { useState } from 'react'

export default function HeaderNav ({children, isActive, ...props}){
  return (
		<li>
			<a
				{...props}
				className={`${isActive ? 'active_link' : 'link'}`}
				href='#!'
			>
				{children}
			</a>
		</li>
	)
}