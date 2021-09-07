import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	init()
	{
	}

	preload()
	{
		this.load.atlas('penquin', 'assets/penquin.png', 'assets/penquin.json')
		this.load.image('tiles', 'assets/sheet.png')
		this.load.tilemapTiledJSON('tilemap', 'assets/game.json')

		this.load.image('star', 'assets/star.png')
		this.load.image('health', 'assets/health.png')

		this.load.atlas('snowman', 'assets/snowman.png', 'assets/snowman.json')
	}

	create()
	{
		const map = this.make.tilemap({ key: 'tilemap' })
		const tileset = map.addTilesetImage('iceworld', 'tiles')

		const ground = map.createLayer('ground', tileset)
		ground.setCollisionByProperty({ collides: true })

		map.createLayer('obstacles', tileset)

		const objectsLayer = map.getObjectLayer('objects')

		 objectsLayer.objects.forEach(objData => {
			const { x = 0, y = 0, name, width = 0, height = 0 } = objData

			switch (name)
			{
				case 'penquin-spawn':
				{
					// add penquin-spawn to scene
					break
				}

				case 'snowman':
				{
					// add snowman to scene
					break
				}

				case 'star':
				{
					//add start to scene
					break
				}

				case 'health':
				{
					//add health to scene
					break
				}

				case 'spikes':
				{
					//add spike to scene
					break
				}
			}
		 })

		this.matter.world.convertTilemapLayer(ground)
	}

	destroy()
	{
	}

	update(t: number, dt: number)
	{
		//update controllers
	}
}
