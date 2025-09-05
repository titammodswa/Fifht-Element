var seed
var log = []

let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let ES = (id, x) => MOD("enderstorage", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let WT = (id, x) =>  MOD("waystones", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let ED = (id, x) => MOD("endersdelight", id, x)
let AD = (id, x) => MOD("ad_astra", id, x)
let CC = (id, x) => MOD("create_connected", id, x)
let AL = (id, x) => MOD("alloyed", id, x)
let SS = (id, x) => MOD("sophisticatedstorage", id, x)
let SB = (id, x) => MOD("sophisticatedbackpacks", id, x)
let CP = (id, x) => MOD("chipped", id, x)
let MOL = (id, x) => MOD("morelights", id, x)

let colors = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let native_metals = ['iron', 'zinc', 'lead', 'copper', 'nickel', 'gold']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), AP('twisted')]

let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

ServerEvents.recipes(event => {
	log.push('Registering Recipes')

	oreProcessing(event)

	log.push('Recipes Updated')
})