/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"track1": "chant.ogg",

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"files": "files.png",
	"badge": "badge.svg",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Scene1": "scene1.svg",
	"Scene2": "scene2.png",
	"Scene5": "scene5.png",
	"Scene6": "scene6.png",


	

});


// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Col. ACHARA',
		color: '#5bcaff',
		directory: 'achara',
		default_expression: 'achara.png',
		expressions: {
			stern: "achara.svg",
		}

	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene Scene1 with fadeIn',
		'The webstie for "Buddha Cop The Movie" has been deemed inappropriate.',
		 'Those authorized may proceed for investigative purposes only.',
		
		{
			'Input': {
				'Text': 'Enter your name to proceed.',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'WARNING! You must enter a name!'
			}
		},
		'show background repeating-linear-gradient(90deg, rgba(25, 208, 33,0.1) 0px, rgba(25, 208, 33,0.1) 1px,transparent 1px, transparent 13px),repeating-linear-gradient(180deg, rgba(25, 208, 33,0.1) 0px, rgba(25, 208, 33,0.1) 1px,transparent 1px, transparent 13px),linear-gradient(180deg, rgb(51, 68, 134),rgb(22,30,72)) with fadeIn',
		"show image badge with fadeIn",
		
		'Thank you {{player.name}}. {pause:1400} ... Level 3 security access granted.', 
		'centered You are authorized to review case files for “Buddha Cop the Movie”.',
		'Col. Achara is your Commanding Officer, I will establish a direct link for you now.', 
		'Please standby...', 
		'wait 1800',
		'a Hello there Agent {{player.name}}, looks like they sent me another rookie.',
		`a Well, let's get you to work.`,
		`a Your orders are to analyse the case files and monitor social media for any signs the "Buddha Cop" production may be moving ahead.`,
		'a Oh and the drivel you are about to read is full of lies, the writer even wrote me into the screenplay.',
		`a Careful, maybe they'll put you in it too!`,
		`a We need to put a stop to this.`,
		{
			'Choice': {
				'Dialog': 'a So {{player.name}}, are you ready to review the case files?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		
		'a Good, get yourself up to speed, maybe you can catch something we missed.',
		'a I\'ll see you in the briefing room shortly.',
		{
			'Choice': {
				'BuddhaCop':{
					'Text': 'Buddha Cop - The Movie',
					'Do': 'jump BuddhaCop',
				}
			}
		}
	],

	'BuddhaCop': [
		'show image synopsis.png center fadeIn',
		'a so what do you think?',
		'show scene Scene5 with fadeIn',
		'Thailand 2021.',
		'Wat Bodhi protected forrest area.',
		'show scene Scene6 with fadeIn,',
		'Jin stops to collect alms from a young girl.',
	

			
	
		'end'

	],
	

	'No': [

		'a That was a rhetorical question.',

		'show message Help',

		'a Maybe we should send you back to basic training.',
		'a I have a case to solve, goodbye.',
		'end'
	]
});