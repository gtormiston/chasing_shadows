# Chasing Shadows

### What is it?
Chasing Shadows is a hybrid iOS game inspired by Pokemon GO, where players can view monsters near them on a real-time map and are able to attack and destroy monsters only when they are within range of the enemy!

The mobile app uses the native hardware geolocation that iOS provides, a custom built remote [API server built in Rails](https://github.com/gtormiston/chasing_shadows_api_server/) to login, display monsters based on location and to provide the game logic, and the Google Maps API to display the maps and markers.

### Screenshots
![Welcome screen](/screenshots/screen-1.jpg)
_Welcome screen_

![User login](/screenshots/screen-2.jpg)
_User login_

![Game instructions](/screenshots/screen-3.jpg)
_Game instructions_

![Gameplay page showing the map](/screenshots/screen-4.jpg)
_Gameplay page showing the map_

![Attack page](/screenshots/screen-5.jpg)
_Attack page_

### Presentation Video
Watch our presentation video [here](https://vimeo.com/177813947) - password is *chasingshadows*

### Technologies Used
+ Cordova
+ JavaScript, jQuery
+ SASS
+ Karma, Jasmine, PhantomJS, Casper

### Development Team
+ Tim Chipperfield
+ Crescenzo D'Alterio
+ Lukasz Grychowski
+ Anna Holland-Smith
+ Graham Ormiston
+ Alistair Wye

### Suggested Improvements
+ User sign out
+ RPG features (character with powers, points, XP etc)
+ Track distance covered by gamers
+ Multiplayer
+ Use of websockets rather than HTTP requests
+ Host public or private games
+ League

---

## Getting Started

### Prerequisites
- [Node](https://nodejs.org/en/) (and npm)

### Set Up
1. Clone this repository
2. `cd` into it
3. Run `npm install`

### Server
1. Run `cordova serve` run the app locally in the browser
2. Visit [http://localhost:3000](http://localhost:3000)
3. To run on a phone, run `cordova build ios`
4. Open the Xcode project in the `platforms/ios` folder
5. Use Xcode to create a developer provisioning profile and run a test build on your device

### Testing
1. Run `gulp tdd`

*please note: the majority of tests for this application are feature tests using RSpec and Capybara from our API server repo*

---

### User Stories

```text
As a human
So I can play a game outside where the birds and trees are
I want to play a role playing game on my phone that uses maps
```

```text
As a gamer
So I can record my progress in the game
I want to sign in and create a profile for myself
```

```text
As a gamer
So I can have something to aim for
I want to be able to gain hit points for beating enemies
```

```text
As a player
So I can enjoy the game with friends
I want the game to be multi player
```

```text
As a gamer
So I can defeat an enemy
I want to be able to attack it
```

```text
As a gamer
So it’s a challenge
I want to be able to die
```

```text
As a gamer
So it’s a challenge
I need to avoid the monster’s aim
```

```text
As a gamer
So I can play the game outside effectively
I want to see my current position on a map
```

```text
As a gamer
So I can progress
I want to be ‘levelled up’ when I make certain progress
```

```text
As a monster
So I can avoid being killed / catch gamers
I want to move around
```

```text
As a monster
So I can kill gamers
I want to be able to aim at them and hurt them
```
