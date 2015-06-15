(function () {
	window.map_path   = 'velen';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(85.05, 135);
	window.map_center = [60, -5];
	window.map_mZoom  = 6;

	processData({
	// Abandoned Site
		abandoned: [{
			coords: [
				// NW Velen
				[-53.59, -56.34],
				[-29.34, -136.23],
				[-50.25, -140.63],
				[-58.95, -142.21]
			],
			label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc")
		}, { // NE Velen
			coords: [[-17.06, 8.26]],
			label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 4<span> ' + $.t("monsters.drowners") + '</span>)'
		}, {
			coords: [[13.70, 46.05]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.drowners") + '</span>)'
		}, {
			coords: [[-8.23, 72.16]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.ghouls") + '</span> &amp; lvl 11<span> ' + $.t("monsters.alghoul") + '</span>)'
		}, { // SW Velen
			coords: [[-79.70, -112.15]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.bandits") + '</span>)'
		}, {
			coords: [[-78.68, -40.69]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.endregas") + '</span>)'
		}, { // SE Velen
			coords: [[-36.95, 3.08]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 5<span> ' + $.t("monsters.bandits") + '</span>)'
		}],

	// Alchemy Supplies
		alchemy: [{ //Novigrad
			coords: [[77.71, -15.91]],
			label: $.t("alchemy.label*"),
			popup: $.t("alchemy.desc*")
		}, {
			coords: [[79.75, -49.83]],
			label: $.t("alchemy.label"),
			popup: $.t("alchemy.desc")
		}, { // NW Velen
			coords: [[-18.52, -110.21]],
			label: $.t("alchemy.label"),
			popupTitle: $.t("alchemy.pellar"),
			popup: $.t("alchemy.desc")
		}],

	// Armourer
		armourer: [{ // Novigrad
			coords: [[74.23, -38.23]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, { // Oxenfurt
			coords: [[38.82, 54.01]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, { // NE Velen
			coords: [[2.18, -12.92]],
			label: $.t("armourer.amateurLabel"),
			popup: $.t("armourer.desc") + ' ' + $.t("misc.rescue") + ' <a href="#6/-18.761/-25.785">' + $.t("misc.locations.petesLanding") + '</a>'
		}, { // NW Velen
			coords: [[-31.25, -71.02]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, {
			coords: [[-54.06, -122.97]],
			label: $.t("armourer.amateurLabel"),
			popup: $.t("armourer.desc")
		}, {
			coords: [[-30.87, -71.63]],
			label: $.t("armourer.masterLabel"),
			popupTitle: $.t("armourer.yoana"),
			popup: $.t("armourer.quest") + $.t("armourer.desc")
		}],

	// Armourer's Table
		armourerstable: [{
			coords: [
				// Novigrad
				[75.27, -43.35],
				[75.00, -40.68],
				// Oxenfurt
				[41.74, 51.23],
				// NE Velen
				[2.48, -12.42],
				// NW Velen
				[-29.07, -106.97],
				[-30.41, -73.01],
				[-63.95, -75.66],
				[-54.01, -122.37],
				[-59.04, -143.61],
				// SE Velen
				[-35.53, 54.58],
				[-33.60, -26.28]
			],
			label: $.t("armourerstable.label"),
			popup: $.t("armourerstable.desc")
		}],

	// Bandit Camp
		banditcamp: [{
			coords: [
				// NE Velen
				[11.61, -54.42],
				// NW Velen
				[-23.92, -95.51],
				[-42.81, -128.14],
				[-48.69, -130.78],
				[-51.67, -133.59],
				[-40.18, -136.49],
				[-61.14, -145.81],
				[-57.70, -154.75],
				// SW Velen
				[-64.55, -146.69],
				[-65.04, -142.34],
				// SE Velen
				[-29.69, -17.23]
			],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc")
		}, { // S Novigrad
			coords: [[55.43, -63.00]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // E Novigrad
			coords: [[74.40, 49.06]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 7)'
		}, { // NE Velen
			coords: [[0.53, 33.05]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[8.67, 1.76]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // SE Velen
			coords: [[-77.24, 36.69]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 10)'
		}, {
			coords: [[-53.33, 54.49]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-26.90, 24.43]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-38.96, -4.75]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 7-9)'
		}, {
			coords: [[13.37, 84.36]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-74.40, -6.81]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // SW Velen
			coords: [[-69.81, -142.91]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + $.t("banditcamp.bug")
		}],

	// Barber
		barber: [{
			coords: [
				// Novigrad
				[76.45, -33.18],
				[76.32, -20.39],
				// Oxenfurt
				[33.87, 52.12]
			],
			label: $.t("barber.label"),
			popup: $.t("barber.desc")
		}, { // NW Velen
			coords: [[-54.36, -81.81]],
			label: $.t("barber.label"),
			popup: $.t("barber.desc") + $.t("barber.free") + $.t("misc.rescue") + ' <a href="#6/-35.362/-127.430">' + $.t("barber.rescueLocation") + '</a>'
		}],

	// Blacksmith
		blacksmith: [{ // Novigrad
			coords: [[69.15, -41.00]],
			label: $.t("blacksmith.masterLabel"),
			popupTitle: $.t("blacksmith.hattori"),
			popup: $.t("blacksmith.quest") + $.t("blacksmith.desc")
		}, {
			coords: [[73.14, -37.96]],
			label: $.t("blacksmith.journeymanLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, {
			coords: [[75.17, -43.15]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, { // Oxenfurt
			coords: [[32.00, 59.77]],
			label: $.t("blacksmith.journeymanLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, { // NW Velen
			coords: [[-29.27, -106.47]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}, {
			coords: [[-64.28, -75.87]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}, { // SE Velen
			coords: [[-32.96, -26.91]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}],

	// Brothel
		brothel: [{ // Novigrad
			coords: [[71.22, -41.84]],
			label: $.t("brothel.label.crippledKate"),
			popupTitle: $.t("brothel.popup.crippledKate"),
			popup: $.t("brothel.desc")
		}, {
			coords: [[78.34, -33.40]],
			label: $.t("brothel.label.passiflora"),
			popupTitle: $.t("brothel.popup.passiflora"),
			popup: $.t("brothel.desc")
		}],

	// Boat
		/* boat: [{
			coords: [
				// Novigrad
				[69.84, -13.01],
				[72.82, -10.28],
				[77.92, -44.38],
				[76.98, -47.29],
				[76.92, -50.10],
				[70.23, -46.47],
				[70.03, -52.69],
				[70.64, -58.93],
				[73.64, -54.99],
				[73.26, -52.57],
				// NE Novigrad
				[82.32, -53.51],
				[81.33, -34.10],
				// E Novigrad
				[65.04, 19.78],
				// S Novigrad
				[67.41, -72.33],
				[56.32, -3.89],
				[47.36, -58.43],
				[38.62, -61.56],
				[30.83, -59.94],
				[35.10, -28.19],
				// Oxenfurt
				[46.56, 49.37],
				[36.03, 67.94],
				[34.23, 61.00],
				[28.23, 62.49],
				[24.69, 54.23],
				[29.38, 48.06],
				[15.31, 68.73],
				// NE Velen
				[-7.19, 65.13],
				[-0.97, 68.82],
				[38.82, 39.55],
				[51.45, 10.50],
				[-19.10, 7.38],
				[-18.40, -32.93],
				// NW Velen
				[-26.12, -31.38],
				[-51.99, -34.10],
				[-54.32, -54.32],
				[-69.89, -33.44],
				[-65.33, -64.47],
				[-65.35, -81.43],
				[-65.78, -82.31],
				[-63.80, -125.46],
				[-41.54, -142.82],
				[-27.64, -121.82],
				// SW Velen
				[-73.48, -142.91],
				[-74.04, -104.24],
				[-77.06, -40.96],
				[-71.90, -73.92],
				[-80.18, -114.17],
				// SE Velen
				[-68.84, -4.48],
			],
			label: 'Boat',
			popup: 'You can use boats to travel across bodies of water'
		}], */

	// Entrance
		// todo, entrance to what?
		entrance: [{ // Novigrad
			coords: [[80.68, -55.02]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NE Novigrad
			coords: [[82.18, 32.78]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SE Novigrad
			coords: [[58.34, 66.68]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[61.02, 89.12]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[36.43, 114.21]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // S Novigrad
			coords: [[53.96, -71.48]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NE Velen
			coords: [[27.06, -29.27]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NW Velen
			coords: [[3.05, -122.17]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-26.70, -63.75]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-28.77, -77.74]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SW Velen
			coords: [[-75.36, -124.19]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-76.32, -114.87]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SE Velen
			coords: [[-71.64, -1.67]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-70.16, 39.55]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-48.52, -29.03]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-22.84, 72.02]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-56.51, 80.33]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-43.71, 39.20]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-35.32, 69.74]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-38.00, 70.36]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-79.628, 2.351]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-52.670, 31.069]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-75.834, 50.361]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}],

	// Grindstone
		grindstone: [{
			coords: [
				// Novigrad
				[75.27, -42.95],
				[74.96, -40.28],
				// S Novigrad
				[48.86, -51.39],
				// Oxenfurt
				[41.64, 51.53],
				// NE Velen
				[2.48, -13.42],
				// NW Velen
				[32.84, -114.26],
				[-29.07, -105.97],
				[-30.64, -72.55],
				[-53.67, -80.20],
				[-64.05, -75.06],
				[-54.01, -123.57],
				[-59.09, -144.05],
				// SE Velen
				[-35.89, 55.20],
				[-33.80, -26.81]
			],
			label: $.t("grindstone.label"),
			popup: $.t("grindstone.desc")
		}],

	// Guarded Treasure
		guarded: [{
			coords: [
				// NE Velen
					[22.51, -56.78],
				// NW Velen
					[-28.07, -119.66],
					[-38.62, -123.40],
					[-38.27, -149.24],
				// SE Velen
					[-73.42, 31.77],
					[-51.78, -6.42]
			],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: ""})
		}, { // NE Novigrad
			coords: [[76.43, -2.07]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}, {
			coords: [[80.52, -4.53]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("monsters.hag.bilge") + "</span>)"})
		}, {
			coords: [[82.61, -33.49]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 23 <span>" + $.t("monsters.armoredArachas") + "</span>)"})
		}, { // SE Novigrad
			coords: [[45.62, 99.05]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("monsters.leshen") + "</span>)"})
		}, { // S Novigrad
			coords: [[51.97, -12.00]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("monsters.wyvern") + "</span>)"})
		}, {
			coords: [[62.00, -97.38]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("monsters.wraiths.noon") + "</span>)"})
		}, { // NE Velen
			coords: [[-8.93, 12.30]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("monsters.alghoul") + "</span>)"})
		}, {
			coords: [[-7.89, 55.37]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 9 <span>" + $.t("monsters.drowners") + "</span>)"})
		}, { // NW Velen
			coords: [[4.193, -82.463]],
			label: $.t("guarded.label"),
			popup: 'Available after the \'Master Armorers\' (lvl 26) quest. ' + $.t("guarded.desc", {monster: ""})
		}, {
			coords: [[-62.39, -118.17]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 7 <span>" + $.t("monsters.wraiths.wraiths") + "</span>)"})
		}, {
			coords: [[-43.55, -40.08]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.forktail") + "</span>)"})
		}, {
			coords: [[-45.61, -152.31]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 4 <span>" + $.t("monsters.drowners") + "</span>)"})
		}, {
			coords: [[25.96, -99.67]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.basilisk") + "</span>)"})
		}, { // SW Velen
			coords: [[-77.77, -102.04]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}, {
			coords: [[-81.30, -69.74]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("monsters.wraiths.noon") + "/" + $.t("monsters.wraiths.night") + "</span>)"})
		}, {
			coords: [[-82.20, -69.57]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("monsters.gargoyle") + "</span>)"})
		}, {
			coords: [[-78.56, -48.91]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("monsters.alghoul") + "</span>)"})
		}, { // SE Velen
			coords: [[-70.260, 102.440]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 24 <span>" + $.t("monsters.elemental.earth") + "</span>)"})
		}, {
			coords: [[-75.81, 30.63]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("monsters.hag.bilge") + "</span>)"})
		}, {
			coords: [[-80.190, 28.870]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.wyvern") + "</span>)"})
		}, {
			coords: [[-81.11, 31.33]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("monsters.cyclops") + "</span>)"})
		}, {
			coords: [[-63.27, 48.87]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}],

	// Gwent Player
		gwent: [{ // Novigrad
			coords: [[72.900, -39.790]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.618, -35.132]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.bookMerchant"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[71.00, -41.90]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.crippledKate"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[78.25, -33.79]],
			label: $.t("gwent.label.tournament"),
			popupTitle: $.t("gwent.popup.tournament"),
			popup: $.t("gwent.desc.tournament")
		}, {
			coords: [[72.58, -26.21]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.15, -36.93]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[71.43, -35.51]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.herbalist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.14, -1.45]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.00, -20.27]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.merchant"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.12, -29.16]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.32, -43.81]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[76.25, -23.95]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.20, -37.66]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.81, -37.76]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.banker"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.52, -46.63]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.fishmonger"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.37, -43.15]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.49, -44.62]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[76.87, -33.02]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.04, -20.82]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.39, -19.02]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.loanShark"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[79.80, -49.53]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.alchemist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[77.77, -15.58]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.alchemist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.55, -32.41]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.warn") + $.t("gwent.desc.player")
		}, { // S Novigrad
			coords: [[62.43, -14.22]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, { // SE Novigrad
			coords: [[50.64, 72.27]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.herbalist"),
			popup: $.t("gwent.desc.player")
		}, { // Oxenfurt
			coords: [[36.56, 52.47]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[38.92, 54.21]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[40.11, 51.68]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[32.20, 59.87]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, { // NE Velen
			coords: [[2.58, -12.92]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player") + $.t("misc.rescue") + '<a href="#6/-18.761/-25.785">' + $.t("misc.locations.petesLanding") + '</a>'
		}, { // NW Velen
			coords: [[-27.64, -102.54]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-28.87, -106.47]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-34.76, -72.57]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-31.90, -71.52]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.quartermaster"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-31.15, -70.82]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-28.39, -75.45]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.bloodyBaron"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-52.60, -81.19]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player") + $.t("misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("misc.locations.banditsCamp") + '</a>'
		}, {
			coords: [[-62.53, -76.44]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-54.27, -121.56]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-53.86, -122.97]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-30.67, -71.43]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.yoana"),
			popup: $.t("gwent.desc.player")
		}, { // SE Velen
			coords: [[-36.78, -24.15]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-32.76, -26.61]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-78.74, 108.44]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.quartermaster"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-57.20, 27.23]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.player"),
			popup: $.t("gwent.desc.quest") + $.t("gwent.desc.player")
		}],

	// Harbor
		harbor: [{
			coords: [
				// Novigrad
				[70.64, -58.93],
				// Oxenfurt
				[38.17, 46.85],
				// NE Velen
				[-6.53, 62.93],
				[-19.10, 9.49],
				[-18.40, -32.93],
				// NW Velen
				[-54.32, -54.32],
				[-41.54, -142.82],
				[-27.64, -121.82],
				// SW Velen
				[-71.90, -73.92],
				[-80.18, -114.17],
				// SE Velen
				[-78.78, -11.07]
			],
			label: $.t("harbor.label"),
			popup: $.t("harbor.desc")
		}],

	// Herbalist
		herbalist: [{
			coords: [
				// Novigrad
				[73.65, -34.89],
				[71.33, -35.51],
				// S Novigrad
				[61.89, -13.16],
				// SE Novigrad
				[50.54, 72.07]
			],
			label: $.t("herbalist.label"),
			popup: $.t("herbalist.desc")
		}, { // NW Velen
			coords: [[-50.26, -138.91]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, {
			coords: [[-28.15, -135.26]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, { // SW Velen
			coords: [[-78.53, -41.44]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, { // SE Velen
			coords: [[-36.92, 2.37]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}],

	// Hidden Treasure
		hidden: [{
			coords: [
				// NW Velen
				[33.06, -115.25],
				[-27.92, -128.06],
				[-31.65, -143.17],
				[-42.33, -140.33],
				// SW Velen
				[-71.34, -107.75],
				// SE Velen
				[-29.99, 28.39]
			],
			label: $.t("hidden.label"),
			popup: $.t("hidden.desc")
		},{ // S Novigrad
			coords: [[34.55, -43.68]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 6 <span>' + $.t("monsters.nekkers") + '</span>'})
		}, {
			coords: [[49.38, -68.91]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 15 <span>' + $.t("monsters.mucknixers") + '</span>'})
		}, { // NE Velen
			coords: [[-16.89, 10.06]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[3.03, 64.56]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[45.49, 26.76]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[-3.51, 21.40]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.foglet") + '</span>'})
		}, {
			coords: [[52.35, 16.17]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 18 <span>' + $.t("monsters.hag.bilge") + '</span>'})
		}, {
			coords: [[47.72, 38.50]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 26+ <span>' + $.t("monsters.basilisk") + '</span>'})
		}, { // NW Velen
			coords: [[-50.76, -155.04]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, { // SE Velen
			coords: [[-72.84, 77.08]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 22 <span>' + $.t("monsters.fiend") + '</span>'})
		}, {
			coords: [[-37.16, 97.29]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.foglet") + '</span>'})
		}, {
			coords: [[-20.96, 48.78]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 9 <span>' + $.t("monsters.bandits") + '</span>'})
		}, { // SW Velen
			coords: [[-70.50, -150.64]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 25+ <span>' + $.t("monsters.hag.grave") + '</span>'})
		}, {
			coords: [[-72.78, -131.40]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("monsters.bandits") + '</span>'})
		}, {
			coords: [[-71.09, -109.96]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 13 <span>' + $.t("monsters.wraiths.wraiths") + '</span>'})
		}, {
			coords: [[-76.90, -80.68]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}],

	// Innkeep
		innkeep: [{ // Novigrad
			coords: [[73.24, -44.21]],
			label: $.t("innkeep.inns.theGoldenSturgen"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[78.22, -33.49]],
			label: $.t("innkeep.inns.passiflora"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[76.20, -24.35]],
			label: $.t("innkeep.inns.theNowhere"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodAndDrink")
		}, {
			coords: [[70.02, -29.56]],
			label: $.t("innkeep.inns.rosemaryAndThyme"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodAndDrink")
		}, {
			coords: [[70.04, -1.85]],
			label: $.t("innkeep.inns.sevenCatsInn"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[74.50, -32.61]],
			label: $.t("innkeep.inns.theKingfisher"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("misc.disappearingTrader") + $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // S Novigrad
			coords: [[62.33, -14.02]],
			label: $.t("innkeep.inns.cunnyOfTheGoose"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // Oxenfurt
			coords: [[36.46, 52.27]],
			label: $.t("innkeep.inns.theAlchemy"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // NE Velen
			coords: [[0.09, -45.62]],
			label: $.t("innkeep.inns.innAtTheCrossroads"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.gwentAndDrink")
		}],

	// Monster Den
		monsterden: [{
			coords: [
				// NE Velen
				[20.47, -13.76],
				// SE Velen
				[-54.47, 12.00]
			],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: ''})
		}, { // NE Novigrad
			coords: [[82.19, -32.08]],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: '(lvl 19 <span>' + $.t("monsters.golem") + '</span>)'})
		}, { // S Novigrad
			coords: [[46.99, -40.08]],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: '(lvl 16 <span>' + $.t("monsters.rabidRockTroll") + '</span> &amp; lvl 18 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}],

	// Monster Nest
		monsternest: [{
			coords: [
				// NE Velen
				[33.87, 10.20],
				[41.44, -0.79],
				// NW Velen
				[-23.97, -55.95],
				[-36.56, -87.14],
				[-53.38, -57.74],
				// SW Velen
				[-75.14, -122.29],
				[-74.73, -121.49],
				// SE Velen
				[-68.69, -2.20]
			],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: ''})
		}, { // S Novigrad
			coords: [[34.31, -60.51]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, {
			coords: [[49.84, -45.97]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.endregas") + '</span>)'})
		}, {
			coords: [[50.79, -42.19]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.endregas") + '</span>)'})
		}, {
			coords: [[50.98, -20.99]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, { // NE Velen
			coords: [[7.36, 48.78]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[8.01, 47.37]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[-2.94, 27.38]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[41.64, 13.97]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, { // SW Velen
			coords: [[-75.68, -27.11]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 4&amp;9 <span>' + $.t("monsters.drowners") + '</span>)'})
		}, { // SE Velen
			coords: [[-50.23, 57.57]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-46.01, 52.56]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-49.04, 46.93]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-49.12, 42.36]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-40.18, 80.29]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("monsters.wyvern") + '</span>)'})
		}, {
			coords: [[-41.38, 80.38]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("monsters.wyvern") + '</span>)'})
		}],

	// Notice Board
		notice: [{
			coords: [
				// Novigrad
				[74.38, -34.06],
				[73.00, -43.37],
				[76.74, -32.21],
				[64.42, -38.42],
				// NE Novigrad
				[82.13, 3.43],
				// E Novigrad
				[69.60, -1.93],
				[73.07, 42.19],
				// S Novigrad
				[62.59, -16.70],
				// Oxenfurt
				[38.89, 52.29],
				// NE Velen
				[4.65, -12.04],
				[1.14, -46.41],
				[33.36, -21.18],
				// NW Velen
				[-54.19, -120.50],
				[-31.50, -69.08],
				[-63.51, -73.74],
				// SE Velen
				[-58.08, 27.95],
				[-36.17, -26.02],
				[-78.73, 110.17]
			],
			label: $.t("notice.label"),
			popup: $.t("notice.desc")
		}],

	// Person in Distress
		pid: [{
			coords: [
				// NE Velen
				[26.43, -11.87],
				// NW Velen
				[-33.94, -132.36]
			],
			label: $.t("pid.label"),
			popup: "There's a person or a group of people here in need of assitance"
		}, { // SE Novigrad
			coords: [[20.47, 100.55]],
			label: $.t("pid.label"),
			popup: $.t("pid.desc", {monster: '(lvl 9 <span>' + $.t("monsters.bandits") + '</span>)'})
		}, { // NE Velen
			coords: [[-17.64, -29.18]],
			label: $.t("pid.label"),
			popup: $.t("pid.desc", {monster: '(lvl 10-16 <span>' + $.t("monsters.bandits") + '</span>)'})
		}, { // NW Velen
			coords: [[-61.23, -33.93]],
			label: $.t("pid.label"),
			popup: $.t("pid.desc", {monster: '(lvl 5 <span>' + $.t("monsters.bandits") + '</span>)'})
		}],

	// Place of Power
		pop: [{ // Novigrad
			coords: [[80.72, -40.83]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
			popup: $.t("pop.desc")
		}, { // E Novigrad
			coords: [[71.02, 48.78]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
			popup: $.t("pop.desc")
		}, { // NW Velen
			coords: [[32.69, -112.60]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
			popup: $.t("pop.desc")
		}, { // SW Velen
			coords: [[-82.85, -72.69]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-71.82, -105.91]],
			label: $.t("pop.label") + '*',
			popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
			popup: $.t("misc.wanderingInTheDark") + $.t("pop.desc")
		}, { // SE Velen
			coords: [[-78.19, 7.91]],
			label: $.t("pop.label") + '*',
			popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
			popup: $.t("misc.baldMountain") + $.t("pop.desc")
		}, {
			coords: [[-70.41, 38.41]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-55.68, 18.94]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
			popup: $.t("pop.desc")
		}],

	// Point of Interest
		poi: [{ // Novigrad
			coords: [[74.84, -25.88]],
			label: $.t("poi.label.triss"),
			popup: $.t("poi.desc.triss")
		}, {
			coords: [[70.12, -28.76]],
			label: $.t("poi.label.dandelionAndZoltan"),
			popup: $.t("poi.desc.dandelionAndZoltan")
		}, {
			coords: [[77.245, -24.829]],
			label: $.t("poi.label.vilmeriusHospital"),
			popup: $.t("poi.desc.vilmeriusHospital")
		}, { // NW Velen
			coords: [[-47.34, -111.81]],
			label: $.t("poi.label.keira"),
			popup: $.t("poi.desc.keira")
		}, { // Velen
			coords: [[61.90, -91.82]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.crossbow.feline"),
			popup: $.t("poi.desc.witcherGear.crossbow.feline")
		}, {
			coords: [[57.651, -30.169]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.feline.superior"),
			popup: $.t("poi.desc.witcherGear.silversword.feline.superior")
		}, {
			coords: [[75.70, -19.50]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.feline.enhanced"),
			popup: $.t("poi.desc.witcherGear.silversword.feline.enhanced")
		}, {
			coords: [[60.60, 89.80]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.feline.standard"),
			popup: $.t("poi.desc.witcherGear.silversword.feline.standard")
		}, {
			coords: [[36.50, 114,50]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.armor.feline.enhanced"),
			popup: $.t("poi.desc.witcherGear.armor.feline.enhanced")
		}, {
			coords: [[33, -114.5]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.griffin.standard"),
			popup: $.t("poi.desc.witcherGear.silversword.griffin.standard")
		}, {
			coords: [[29.373, -73]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.boots.griffin.enhanced"),
			popup: $.t("poi.desc.witcherGear.boots.griffin.enhanced")
		}, {
			coords: [[41, -1]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.standard"),
			popup: $.t("poi.desc.witcherGear.steelsword.griffin.standard")
		}, {
			coords: [[36.5, 35]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.armor.griffin.enhanced"),
			popup: $.t("poi.desc.witcherGear.armor.griffin.enhanced")
		}, {
			coords: [[22, 9.5]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.gauntlets.feline.enhanced"),
			popup: $.t("poi.desc.witcherGear.gauntlets.feline.enhanced")
		}, {
			coords: [[-28, -61]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.trousers.griffin.enhanced"),
			popup: $.t("poi.desc.witcherGear.trousers.griffin.enhanced")
		}, {
			coords: [[-57, -156]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.enhanced"),
			popup: $.t("poi.desc.witcherGear.steelsword.griffin.enhanced")
		}, {
			coords: [[-61, -8.5]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.armor.feline.superior"),
			popup: $.t("poi.desc.witcherGear.armor.feline.superior")
		}, {
			coords: [[-54.5, 12]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.armor.griffin.standard"),
			popup: $.t("poi.desc.witcherGear.armor.griffin.standard")
		}, {
			coords: [[-64, 38]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.steelsword.ursine.superior"),
			popup: $.t("misc.guardedBy", {monster: 'lvl 25 <span>' + $.t("monsters.elemental.earth") + '</span>'})
		}, {
			coords: [[-81.1, 30.8]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.armor.ursine.mastercrafted"),
			popup: $.t("poi.desc.witcherGear.armor.ursine.mastercrafted")
		}, {
			coords: [[-75.6, -28]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.mastercrafted"),
			popup: $.t("poi.desc.witcherGear.silversword.ursine.mastercrafted")
		}, {
			coords: [[-81.2, -70]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.gauntlets.griffin.enhanced"),
			popup: $.t("poi.desc.witcherGear.gauntlets.griffin.enhanced")
		}, {
			coords: [[-72.047, 3.999]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.superior"),
			popup: $.t("poi.desc.witcherGear.silversword.ursine.superior")
		}, {
			coords: [[20.406, -14.304]],
			label: $.t("poi.label.witcherGear"),
			popupTitle: $.t("poi.popup.witcherGear.gauntlets.ursine.superior"),
			popup: $.t("poi.desc.witcherGear.gauntlets.ursine.superior")
		}],

	// Shopkeeper
		shopkeeper: [{ // Novigrad
			coords: [[74.22, -35.41]],
			label: $.t("shopkeeper.label.bookMerchant"),
			popup: $.t("shopkeeper.desc.bookMerchant")
		}, {
			coords: [[74.578, -35.332]],
			label: $.t("shopkeeper.label.bookMerchant"),
			popup: $.t("shopkeeper.desc.bookMerchant")
		}, {
			coords: [[72.82, -39.99]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.alchemyFoodAndDrink")
		}, {
			coords: [[73.71, -37.96]],
			label: $.t("shopkeeper.label.banker"),
			popup: $.t("shopkeeper.desc.banker")
		}, {
			coords: [[69.90, -20.47]],
			label: $.t("shopkeeper.label.clothingMerchant"),
			popup: $.t("shopkeeper.desc.clothingMerchant")
		}, {
			coords: [[70.05, -37.13]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.kingfOfBeggarsMerchant")
		}, {
			coords: [[76.81, -33.26]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.aeramasTrinketMerchant")
		}, {
			coords: [[75.41, -44.82]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.alchemyFoodAndDrink")
		}, {
			coords: [[74.47, -46.93]],
			label: $.t("shopkeeper.label.fishmonger"),
			popup: $.t("shopkeeper.desc.fishmonger")
		}, {
			coords: [[76.57, -50.10]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.emptyBottlesMerchant")
		}, {
			coords: [[76.12, -49.04]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAndAlchemy")
		}, {
			coords: [[74.98, -20.57]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.uselessMerchant")
		}, {
			coords: [[72.58, -26.41]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.gemDustWeaponsFoodAndDrink")
		}, {
			coords: [[75.33, -19.28]],
			label: $.t("shopkeeper.label.loanShark"),
			popup: $.t("shopkeeper.desc.uselessMerchant")
		}, {
			coords: [[75.61, -23.82]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.craftingSupplies")
		}, {
			coords: [[71.00, -41.60]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.foodAndDrink")
		}, { // NE Novigrad
			coords: [[80.92, 50.49]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, { // SE Novigrad
			coords: [[3.43, 97.08]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.rescuedMerchant")
		}, /*{ // S Novigrad
			// appears on map but nobody there?
			coords: [[65.95, -21.09]],
			label: $.t("shopkeeper.shopkeeper"),
			popup: '???'
		},*/ {
			coords: [[58.677, -55.415]],
			label: $.t("shopkeeper.label.wanderingMerchant"),
			popup: $.t("shopkeeper.desc.windmillMerchant")
		}, {
			coords: [[63.27, -63.46]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.craftingSuppliesFoodAndWeapons")
		}, {
			coords: [[48.72, -51.94]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
		}, {
			coords: [[57.98, -12.00]],
			label: $.t("shopkeeper.label.wanderingMerchant"),
			popupTitle: $.t("shopkeeper.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, { // Oxenfurt
			coords: [[40.01, 51.48]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.paintMerchant")
		}, { // NE Velen
			coords: [[26.00, 30.11]],
			label: $.t("shopkeeper.label.wanderingMerchant"),
			popupTitle: $.t("shopkeeper.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, {
			coords: [[31.65, -17.93]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.rescuedMerchant") + $.t("shopkeeper.desc.alchemyAndFood")
		}, {
			coords: [[-6.84, 72.38]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.liberated") + $.t("shopkeeper.desc.weaponsAndCraftingSupplies")
		}, {
			coords: [[13.07, 46.27]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.liberated") + $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, { // NW Velen
			coords: [[-27.84, -102.74]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.uselessMerchant")
		}, {
			coords: [[-34.96, -72.77]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.gwentAndDrinks")
		}, {
			coords: [[-54.42, -121.65]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.gwentAndJewellery")
		}, {
			coords: [[-47.04, -112.50]],
			label: $.t("shopkeeper.label.keira"),
			popup: $.t("shopkeeper.desc.alchemyRecipesAndClearance")
		}, {
			coords: [[-32.03, -71.77]],
			label: $.t("shopkeeper.label.quartermaster"),
			popup: $.t("shopkeeper.desc.gwentFoodAndDrink")
		}, {
			coords: [[-36.10, -72.51]],
			label: $.t("shopkeeper.label.anselm"),
			popup: $.t("misc.rescuedMerchant") + $.t("shopkeeper.desc.blindersMerchant")
		}, {
			coords: [[-62.57, -76.89]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.drinksAndSaddlebags")
		}, {
			coords: [[-52.70, -81.49]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.gwentAndDrinks") + $.t("misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("misc.locations.banditsCamp") + '</a>'
		}, {
			coords: [[-52.96, -56.65]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAndAlchemy")
		}, {
			coords: [[-45.09, -138.96]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
		}, {
			coords: [[-58.36, -142.91]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
		}, { // SW Velen
			coords: [[-79.58, -114.12]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.liberated") + $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, { // SE Velen
			coords: [[-36.17, 3.69]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("misc.rescuedMerchant") + $.t("shopkeeper.desc.alchemyAndFood")
		}, {
			coords: [[-36.88, -24.35]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.gwentAndCrafting")
		}, {
			coords: [[-37.79, -26.19]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAlchemyAndFood")
		}, {
			coords: [[-78.79, 108.24]],
			label: $.t("shopkeeper.label.quartermaster"),
			popup: $.t("shopkeeper.desc.uselessMerchant")
		}, {
			coords: [[-57.35, 27.03]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.disappearingDrinksMerchant")
		}, {
			coords: [[-76.16, 107.67]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.runesAndAlchemy")
		}, {
			coords: [[-75.93, 110.28]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.armourAndCraftingSupplies")
		}, {
			coords: [[-75.50, 110.81]],
			label: $.t("shopkeeper.label.shopkeeper"),
			popup: $.t("shopkeeper.desc.weaponsAndCraftingSupplies")
		}],

	// Sign Post
		signpost: [{ // Novigrad
			coords: [[73.76, -33.97]],
			label: $.t("signpost.label.hierarchSquare"),
			popup: $.t("signpost.desc.hierarchSquare")
		}, {
			coords: [[74.23, -15.86]],
			label: $.t("signpost.label.southernGate"),
			popup: $.t("signpost.desc.southernGate")
		}, {
			coords: [[76.44, -16.20]],
			label: $.t("signpost.label.oxenfurtGate"),
			popup: $.t("signpost.desc.oxenfurtGate")
		}, {
			coords: [[77.64, -36.47]],
			label: $.t("signpost.label.stGregorysBridge"),
			popup: $.t("signpost.desc.stGregorysBridge")
		}, {
			coords: [[79.73, -51.24]],
			label: $.t("signpost.label.electorsSquare"),
			popup: $.t("signpost.desc.electorsSquare")
		}, {
			coords: [[71.16, -22.94]],
			label: $.t("signpost.label.tretogorGate"),
			popup: $.t("signpost.desc.tretogorGate")
		}, {
			coords: [[68.94, -27.77]],
			label: $.t("signpost.label.gateOfTheHierarch"),
			popup: $.t("signpost.desc.gateOfTheHierarch")
		}, {
			coords: [[66.32, -35.31]],
			label: $.t("signpost.label.gloryGate"),
			popup: $.t("signpost.desc.gloryGate")
		}, {
			coords: [[65.99, -43.90]],
			label: $.t("signpost.label.portsideGate"),
			popup: $.t("signpost.desc.portsideGate")
		}, {
			coords: [[69.57, -55.28]],
			label: $.t("signpost.label.novigradDocks"),
			popup: $.t("signpost.desc.novigradDocks")
		}, {
			coords: [[75.39, -8.88]],
			label: $.t("signpost.label.arette"),
			popup: $.t("signpost.desc.arette")
		}, {
			coords: [[69.57, -2.81]],
			label: $.t("signpost.label.sevenCatsInn"),
			popup: $.t("signpost.desc.sevenCatsInn")
		}, { // NE Novigrad
			coords: [[83.53, -9.40]],
			label: $.t("signpost.label.sarrasinGrange"),
			popup: $.t("signpost.desc.sarrasinGrange")
		}, {
			coords: [[81.92, 3.60]],
			label: $.t("signpost.label.yantra"),
			popup: $.t("signpost.desc.yantra")
		}, {
			coords: [[82.09, 30.15]],
			label: $.t("signpost.label.isolatedHut"),
			popup: $.t("signpost.desc.isolatedHut")
		}, {
			coords: [[76.24, 18.26]],
			label: $.t("signpost.label.honeyfillMeadworks"),
			popup: $.t("signpost.desc.honeyfillMeadworks")
		}, {
			coords: [[79.04, 65.21]],
			label: $.t("signpost.label.martinFeuillesFarmstead"),
			popup: $.t("signpost.desc.martinFeuillesFarmstead")
		}, {
			coords: [[81.02, 49.09]],
			label: $.t("signpost.label.winespringGrange"),
			popup: $.t("signpost.desc.winespringGrange")
		}, {
			coords: [[79.59, 31.03]],
			label: $.t("signpost.label.moldavieResidence"),
			popup: $.t("signpost.desc.moldavieResidence")
		}, {
			coords: [[81.66, -31.55]],
			label: $.t("signpost.label.cavern"),
			popup: $.t("signpost.desc.cavern")
		}, { // E Novigrad
			coords: [[72.92, 41.31]],
			label: $.t("signpost.label.alness"),
			popup: $.t("signpost.desc.alness")
		}, {
			coords: [[67.58, 31.03]],
			label: $.t("signpost.label.wheatFields"),
			popup: $.t("signpost.desc.wheatFields")
		}, {
			coords: [[65.31, 46.67]],
			label: $.t("signpost.label.vegelbudResidence"),
			popup: $.t("signpost.desc.vegelbudResidence")
		}, { // SE Novigrad
			coords: [[62.02, 39.11]],
			label: $.t("signpost.label.carsten"),
			popup: $.t("signpost.desc.carsten")
		}, {
			coords: [[58.56, 66.27]],
			label: $.t("signpost.label.temerianPartisanHideout"),
			popup: $.t("signpost.desc.temerianPartisanHideout")
		}, {
			coords: [[59.82, 85.87]],
			label: $.t("signpost.label.estTayiar"),
			popup: $.t("signpost.desc.estTayiar")
		}, {
			coords: [[49.45, 70.67]],
			label: $.t("signpost.label.herbalistsHut"),
			popup: $.t("signpost.desc.herbalistsHut")
		}, {
			coords: [[35.51, 110.67]],
			label: $.t("signpost.label.aeramasAbandonedManor"),
			popup: $.t("signpost.desc.aeramasAbandonedManor")
		}, {
			coords: [[19.89, 83.06]],
			label: $.t("signpost.label.crossroads"),
			popup: $.t("signpost.desc.crossroads")
		}, {
			coords: [[49.85, 52.73]],
			label: $.t("signpost.label.gustfieldsFarm"),
			popup: $.t("signpost.desc.gustfieldsFarm")
		}, {
			coords: [[76.64, 37.00]],
			label: $.t("signpost.label.dancingWindmill"),
			popup: $.t("signpost.desc.dancingWindmill")
		}, { // S Novigrad
			coords: [[67.20, -65.48]],
			label: $.t("signpost.label.loggersHut"),
			popup: $.t("signpost.desc.loggersHut")
		}, {
			coords: [[66.92, -85.25]],
			label: $.t("signpost.label.lighthouse"),
			popup: $.t("signpost.desc.lighthouse")
		}, {
			coords: [[61.90, -14.08]],
			label: $.t("signpost.label.cunnyOfTheGoose"),
			popup: $.t("signpost.desc.cunnyOfTheGoose")
		}, {
			coords: [[58.03, -29.44]],
			label: $.t("signpost.label.drahimCastle"),
			popup: $.t("signpost.desc.drahimCastle")
		}, {
			coords: [[54.10, -71.98]],
			label: $.t("signpost.label.widowsGrotto"),
			popup: $.t("signpost.desc.widowsGrotto")
		}, {
			coords: [[45.98, -51.33]],
			label: $.t("signpost.label.ursten"),
			popup: $.t("signpost.desc.ursten")
		}, {
			coords: [[60.50, -55.55]],
			label: $.t("signpost.label.luciansWindmill"),
			popup: $.t("signpost.desc.luciansWindmill")
		}, {
			coords: [[62.35, 11.69]],
			label: $.t("signpost.label.eternalFireChapel"),
			popup: $.t("signpost.desc.eternalFireChapel")
		}, {
			coords: [[37.11, -27.23]],
			label: $.t("signpost.label.borderPost"),
			popup: $.t("signpost.desc.borderPost")
		}, { // Oxenfurt
			coords: [[38.17, 62.31]],
			label: $.t("signpost.label.novigradGate"),
			popup: $.t("signpost.desc.novigradGate")
		}, {
			coords: [[29.10, 52.58]],
			label: $.t("signpost.label.westernGate"),
			popup: $.t("signpost.desc.westernGate")
		}, {
			coords: [[37.40, 48.34]],
			label: $.t("signpost.label.oxenfurtHarbor"),
			popup: $.t("signpost.desc.oxenfurtHarbor")
		}, { // NE Velen
			coords: [[15.62, 25.66]],
			label: $.t("signpost.label.stonecuttersSettlement"),
			popup: $.t("signpost.desc.stonecuttersSettlement")
		}, {
			coords: [[35.96, 34.41]],
			label: $.t("signpost.label.whiteEagleFort"),
			popup: $.t("signpost.desc.whiteEagleFort")
		}, {
			coords: [[27.45, 12.00]],
			label: $.t("signpost.label.codgersQuarry"),
			popup: $.t("signpost.desc.codgersQuarry")
		}, {
			coords: [[39.61, -2.42]],
			label: $.t("signpost.label.hindhold"),
			popup: $.t("signpost.desc.hindhold")
		}, {
			coords: [[-4.01, 63.37]],
			label: $.t("signpost.label.ferryStation"),
			popup: $.t("signpost.desc.ferryStation")
		}, {
			coords: [[13.75, -9.05]],
			label: $.t("signpost.label.hangedMansTree"),
			popup: $.t("signpost.desc.hangedMansTree")
		}, {
			coords: [[5.22, 5.41]],
			label: $.t("signpost.label.devilsPit"),
			popup: $.t("signpost.desc.devilsPit")
		}, {
			coords: [[1.43, -15.16]],
			label: $.t("signpost.label.mulbrydale"),
			popup: $.t("signpost.desc.mulbrydale")
		}, {
			coords: [[0.82, -47.20]],
			label: $.t("signpost.label.innAtTheCrossroads"),
			popup: $.t("signpost.desc.innAtTheCrossroads")
		}, { // NW Velen
			coords: [[21.78, -106.54]],
			label: $.t("signpost.label.harpyFeedingGround"),
			popup: $.t("signpost.desc.harpyFeedingGround")
		}, {
			coords: [[30.56, -114.31]],
			label: $.t("signpost.label.lornruk"),
			popup: $.t("signpost.desc.lornruk")
		}, {
			coords: [[-1.85, -98.61]],
			label: $.t("signpost.label.heatherton"),
			popup: $.t("signpost.desc.heatherton")
		}, {
			coords: [[0.97, -110.39]],
			label: $.t("signpost.label.abandonedTower"),
			popup: $.t("signpost.desc.abandonedTower")
		}, {
			coords: [[2.37, -122.34]],
			label: $.t("signpost.label.isolatedShack"),
			popup: $.t("signpost.desc.isolatedShack")
		}, {
			coords: [[-28.27, -103.97]],
			label: $.t("signpost.label.blackbough"),
			popup: $.t("signpost.desc.blackbough")
		}, {
			coords: [[-32.44, -123.05]],
			label: $.t("signpost.label.hangmansAlley"),
			popup: $.t("signpost.desc.hangmansAlley")
		}, {
			coords: [[-39.71, -74.62]],
			label: $.t("signpost.label.crowsPerch"),
			popup: $.t("signpost.desc.crowsPerch")
		}, {
			coords: [[-52.81, -55.63]],
			label: $.t("signpost.label.boatmakersHut"),
			popup: $.t("signpost.desc.boatmakersHut")
		}, {
			coords: [[-50.35, -140.98]],
			label: $.t("signpost.label.refugeesCamp"),
			popup: $.t("signpost.desc.refugeesCamp")
		}, {
			coords: [[-45.01, -140.36]],
			label: $.t("signpost.label.coastOfWrecks"),
			popup: $.t("signpost.desc.coastOfWrecks")
		}, {
			coords: [[-53.67, -119.50]],
			label: $.t("signpost.label.midcopse"),
			popup: $.t("signpost.desc.midcopse")
		}, {
			coords: [[-57.30, -98.57]],
			label: $.t("signpost.label.wastrelManor"),
			popup: $.t("signpost.desc.wastrelManor")
		}, {
			coords: [[-62.01, -34.94]],
			label: $.t("signpost.label.banditsCamp"),
			popup: $.t("signpost.desc.banditsCamp")
		}, {
			coords: [[-63.55, -74.44]],
			label: $.t("signpost.label.oreton"),
			popup: $.t("signpost.desc.oreton")
		}, {
			coords: [[-45.68, -127.05]],
			label: $.t("signpost.label.forestHut"),
			popup: $.t("signpost.desc.forestHut")
		}, {
			coords: [[-13.67, -84.20]],
			label: $.t("signpost.label.wolvenGlade"),
			popup: $.t("signpost.desc.wolvenGlade")
		}, {
			coords: [[-28.84, -60.56]],
			label: $.t("signpost.label.burnedRuins"),
			popup: $.t("signpost.desc.burnedRuins")
		}, {
			coords: [[-47.10, -92.64]],
			label: $.t("signpost.label.trollBridge"),
			popup: $.t("signpost.desc.trollBridge")
		}, {
			coords: [[-53.96, -80.86]],
			label: $.t("signpost.label.claywich"),
			popup: $.t("signpost.desc.claywich")
		}, {
			coords: [[-69.33, -39.59]],
			label: $.t("signpost.label.drudge"),
			popup: $.t("signpost.desc.drudge")
		}, { // SW Velen
			coords: [[-64.09, -147.83]],
			label: $.t("signpost.label.condyle"),
			popup: $.t("signpost.desc.condyle")
		}, {
			coords: [[-65.73, -128.41]],
			label: $.t("signpost.label.duenHen"),
			popup: $.t("signpost.desc.duenHen")
		}, {
			coords: [[-73.30, -69.92]],
			label: $.t("signpost.label.fykeIsle"),
			popup: $.t("signpost.desc.fykeIsle")
		}, {
			coords: [[-77.12, -112.72]],
			label: $.t("signpost.label.byways"),
			popup: $.t("signpost.desc.byways")
		}, {
			coords: [[-80.79, -69.83]],
			label: $.t("signpost.label.frischlow"),
			popup: $.t("signpost.desc.frischlow")
		}, {
			coords: [[-78.73, -41.44]],
			label: $.t("signpost.label.olenasGrove"),
			popup: $.t("signpost.desc.olenasGrove")
		}, { // SE Velen
			coords: [[-79.15, -10.28]],
			label: $.t("signpost.label.roadToBaldMountain"),
			popup: $.t("signpost.desc.roadToBaldMountain")
		}, {
			coords: [[-80.90, 30.32]],
			label: $.t("signpost.label.destroyedBastion"),
			popup: $.t("signpost.desc.destroyedBastion")
		}, {
			coords: [[-76.49, 41.62]],
			label: $.t("signpost.label.crossroadsVillage"),
			popup: $.t("signpost.desc.crossroadsVillage")
		}, {
			coords: [[-77.56, 110.92]],
			label: $.t("signpost.label.nilfgaardianArmyGroupCenterCamp"),
			popup: $.t("signpost.desc.nilfgaardianArmyGroupCenterCamp")
		}, {
			coords: [[-74.73, 98.61]],
			label: $.t("signpost.label.houseOfRespite"),
			popup: $.t("signpost.desc.houseOfRespite")
		}, {
			coords: [[-69.16, 82.13]],
			label: $.t("signpost.label.kimboltWay"),
			popup: $.t("signpost.desc.kimboltWay")
		}, {
			coords: [[-67.09, 22.19]],
			label: $.t("signpost.label.theOrphansOfCrookbackBog"),
			popup: $.t("signpost.desc.theOrphansOfCrookbackBog")
		}, {
			coords: [[-65.05, 37.53]],
			label: $.t("signpost.label.ruinedTower"),
			popup: $.t("signpost.desc.ruinedTower")
		}, {
			coords: [[-70.73, 43.68]],
			label: $.t("signpost.label.ancientOak"),
			popup: $.t("signpost.desc.ancientOak")
		}, {
			coords: [[-58.79, 30.63]],
			label: $.t("signpost.label.downwarren"),
			popup: $.t("signpost.desc.downwarren")
		}, {
			coords: [[-54.39, 10.99]],
			label: $.t("signpost.label.dragonslayersGrotto"),
			popup: $.t("signpost.desc.dragonslayersGrotto")
		}, {
			coords: [[-48.75, 30.72]],
			label: $.t("signpost.label.reardonManor"),
			popup: $.t("signpost.desc.reardonManor")
		}, {
			coords: [[-50.63, 67.32]],
			label: $.t("signpost.label.benek"),
			popup: $.t("signpost.desc.benek")
		}, {
			coords: [[-36.10, 51.68]],
			label: $.t("signpost.label.toderas"),
			popup: $.t("signpost.desc.toderas")
		}, {
			coords: [[-34.42, 11.69]],
			label: $.t("signpost.label.lurtch"),
			popup: $.t("signpost.desc.lurtch")
		}, {
			coords: [[-36.81, -25.97]],
			label: $.t("signpost.label.lindenvale"),
			popup: $.t("signpost.desc.lindenvale")
		}, {
			coords: [[-17.22, 40.17]],
			label: $.t("signpost.label.maraudersBridge"),
			popup: $.t("signpost.desc.maraudersBridge")
		}, {
			coords: [[-22.92, 71.59]],
			label: $.t("signpost.label.grotto"),
			popup: $.t("signpost.desc.grotto")
		}],

	// Smugglers' Cache
		smugglers: [{
			coords: [
				// Novigrad
				[67.37, -33.44],
				[71.07, -9.14],
				// S Novigrad
				[61.17, -84.11],
				// NW Velen
				[-58.90, -158.82]
			],
			label: $.t("smugglers.label"),
			popup: $.t("smugglers.desc")
		}],

	// Spoils of War
		spoils: [{ // NE Velen
			coords: [[33.91, -68.51]],
			label: $.t("spoils.label"),
			popup: $.t("spoils.desc", {monster: ''})
		}, { // NW Velen
			coords: [[-22.72, -32.04]],
			label: $.t("spoils.label"),
			popup: $.t("spoils.desc", {monster: '(lvl 4 <span>' + $.t("monsters.drowners") + '</span>)'})
		}, { // SW Velen
			coords: [[-74.75, -144.93]],
			label: $.t("spoils.label"),
			popup: $.t("spoils.desc", {monster: '(lvl 10 <span>' + $.t("monsters.drowners") + '</span>)'})
		}]
	});

	window.allLayers = [
		markers.abandoned,
		markers.alchemy,
		markers.armourer,
		markers.armourerstable,
		markers.banditcamp,
		markers.barber,
		markers.blacksmith,
		markers.brothel,
		markers.entrance,
		markers.grindstone,
		markers.guarded,
		markers.gwent,
		markers.harbor,
		markers.herbalist,
		markers.hidden,
		markers.innkeep,
		markers.monsterden,
		markers.monsternest,
		markers.notice,
		markers.pid,
		markers.pop,
		markers.poi,
		markers.shopkeeper,
		markers.signpost,
		markers.smugglers,
		markers.spoils
	];
}());
