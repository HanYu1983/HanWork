com.gameworks.device = com.gameworks.device || {};

(function(){
	var pack = com.gameworks.device
	
	var deviceDescription = {
        iphone: ['iPhone Simulator', 'iPhone', 'iPad'],
        android: ['android', 'Android', 'Pike'],
        mac: ['Intel Mac', 'MacIntel'],
        windows: ['Win32']
    }
	function getDeviceName(){
		for( var deviceName in deviceDescription )
			for( var i in deviceDescription[deviceName] )
				if( navigator.platform.indexOf( deviceDescription[deviceName][i] ) !== -1 )
					return deviceName
		return 'unknown'
	}
	var deviceGroup = {
		mobile: ['iphone', 'android'],
		pc: ['mac', 'windows', 'linux']
	}
	function getDeviceGroup( deviceName ){
		for( var group in deviceGroup )
			for( var i in deviceGroup[group] )
				if( deviceName === deviceGroup[group][i] )
					return group
		return 'unknown'
	}
	var device = { name: getDeviceName(), group: getDeviceGroup( getDeviceName() ) }
	pack.getDeviceName = getDeviceName
	pack.getDeviceGroup = getDeviceGroup
	pack.device = device
	
	
	var isHold = false
	function bindTouchStart( dom, callback ){
		if( device.group === 'mobile' )
			dom.addEventListener('touchstart', function( e ){
				e.preventDefault()
				callback( e ) 
			}, false)
		else
			dom.addEventListener('mousedown', function( e ){
				isHold = true
				e.preventDefault()
				e.touches = []
				e.touches[0] = e
				e.touches[0].identifier = -1
				callback( e )
			})
	}
	function bindTouchMove( dom, callback ){
		if( device.group === 'mobile' )
			dom.addEventListener('touchmove', function( e ){
				e.preventDefault()
				callback( e ) 
			}, false)
		else
			dom.addEventListener('mousemove', function( e ){
				if( !isHold ) return
				e.preventDefault()
				e.touches = []
				e.touches[0] = e
				e.touches[0].identifier = -1
				callback( e )
			})
	}
	function bindTouchEnd( dom, callback ){
		if( device.group === 'mobile' )
			dom.addEventListener('touchend', function( e ){
				e.preventDefault()
				callback( e )
			}, false)
		else
			dom.addEventListener('mouseup', function( e ){
				isHold = false
				e.preventDefault()
				//e.touches = []
				e.touches = []
				e.touches[0] = e
				e.touches[0].identifier = -1
				callback( e )
			})
	}	
	pack.bindTouchStart = bindTouchStart
	pack.bindTouchEnd = bindTouchEnd
	pack.bindTouchMove = bindTouchMove
	
	function isFirefox(){
		return navigator.userAgent.indexOf('Firefox')!=-1
	}
	pack.isFirefox = isFirefox
})()