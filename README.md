# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Warren Lai**

Time spent: **2** hours spent in total

Link to project: https://gem-whip-coat.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [^] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [^] "Start" button toggles between "Start" and "Stop" when clicked. 
* [^] Game buttons each light up and play a sound when clicked. 
* [^] Computer plays back sequence of clues including sound and visual cue for each button
* [^] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [^] User wins the game after guessing a complete pattern
* [^] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [^] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [^] Buttons use a pitch (frequency) other than the ones in the tutorial
* [^] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [^] Computer picks a different pattern each time the game is played
* [^] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/pUSDqWy.gif)
![](https://i.imgur.com/TDUAYoZ.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/cssref/css_colors.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge that I encountered in creating this submission was working with the optional implementations, as I was not extremely familiar with Javascript syntax and had a little bit of trouble when it came to trying to understand how the sound functions worked and how other language-specific features are built. Since I was quite low on time, I had to choose which ones to implement and really focus on getting things done one step at a time. Specifically when it came to making the patterns random every single time, I knew that I would have to generate random numbers from 1 to 6 for each element of the pattern array, but I did not know the specific syntax/means to go about doing it. It really helped to look at the way other functions were implemented and also searching up information on how the common random function works in Javascript really turned out successful. I do think that the one thing that slowed me down the most was my desire to code everything faster/at once, which really hindered my progress when I tested the program and realized it didn’t work, not really knowing where to start from. I ended up changing my approach to taking things one step at a time and using what I learned already to make the changes that I wanted.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission, I was curious about how the website itself is actually created practically instantly after I make a change to the files. Specifically, I would like to see the code that really does all the work glitch does for its user, and really just how glitch works in general (as an IDE). I would also want to learn more about how the Javascript side of the code works more in detail, especially about the sound features and how that directly connects to an output of sound on the user’s device. Because I do not have much experience when it comes to Javascript, I would really like to know more about how to work with it more fluently, as it seems to have quite a few options when it comes to its functions and how to implement them, which is very different from languages like C++ or Java.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would first spend them on making the code a little cleaner and making more comments so that it is easier to read and work with. Then, I would want to implement all of the optional features that I did not have time to implement. After that, my primary goal would be to make the interface look much more clean, sleek, advanced, and user-friendly. Specifically, I would like to figure out how to make the format fit well into the pages (maybe even to make it fit on iphone screens) and how to make the winning/losing messages more exciting (not just an alert). 




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Warren Lai]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.