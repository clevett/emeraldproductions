const totalSwitchKarma = object => {
	let karma = object.startingKarma
	object.status ? karma += object.karma : karma -= object.karma 
	return karma
}

export default totalSwitchKarma