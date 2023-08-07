import React from 'react'

export default function Switch() {
	return (
		<div className="form-check form-switch form-switch-xl">
			<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
			<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
		</div>
	)
}
