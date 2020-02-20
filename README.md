# Hatchway

An easy to use classroom tool for WebVR

## Inspiration

There are a few major barriers to using VR in the classroom. VR headsets are costly, apps are platform specific and must be loaded on to every headset, and there are very few classroom management tools. Hatchway is an answer to all of these issues. Being build for webVR, Hatchway is completely cross platform including desktop and even mobile. Schools won't have to even have an actual VR headset to benefit. WebVR sites don't need to be loaded onto the headset, reducing busywork for teachers, and they'll have full control over which environment their students can use at a time. 

## What it does

Hatchway has two main parts, the teacher's workspace and the student portal. Teachers can select an environment and generate a code, and students can enter that code to access that environment. It's a simple system, but that's perfect for a classroom setting.

## How I built it

I built Hatchway on Node and MySQL. I have the Node instance hosted on Heroku and the MySQL database on Google's cloud platform. The VR environments were built with A-Frame. I also used JQuery on the front end.

## Challenges I ran into

I haven't used Heroku or Node in a long time, so relearning those was a struggle at first. There were also a lot of issues with communicating between the front end and the server, AJAX calls are very particular about everything so it's very easy to mess up one small thing that sets you back half an hour (this may or may not have happened many times). 

## Accomplishments that I'm proud of

Honestly, I'm most proud that I finished the project at all. After my teammate had to leave, I wasn't sure that I would be able to finish, but I managed to pull it off and have a fully functional site by the end of the hackathon. No individual part of the project makes me more proud than that. 

## What I learned

I learned that you really can't guess what the hardest part of a project is going to be. I though that the back end of the site was going to be the hardest part, but in reality it was mostly straightforward, The really hard part was the teacher page, since it has 3 different AJAX calls and more complicated UI than any other part of the site. 

## What's next for Hatchway

A makeover! My front-end developer unfortunately had some extenuating circumstances and as a result my styling of the site is less than ideal. I'd like to get it to a point where it actually looks good! After that, I'd like to add more features, like notifying the teacher if the student leaves the page.
