---
title: Austin Pedicab Company
date: 2018-07-10 04:27:02 +0000
tags:
- Web Development
- Blog
gallery: []
file_upload: ''
image:
  background_image: "/uploads/2018/07/12/about-hero.png"
  mobile_background_image: ''
  image_background_color: rgb(134, 134, 134)
  mix_blend_mode: luminosity
  background_position: top right
  background_size: ''
  mobile_background_position: ''
  mobile_background_size: ''
layout: post
tech: []
music: []
blocks: []

---
## **Customer Bio** 

The Austin Pedicab Co. was created in 2015 by a group of veteran drivers. They each have multiple years of experience in the transportainment industry and wanted to come together to make a company they could be proud to call their own. They've proven their mettle on the streets of Austin, New Orleans, Chicago, St Louis, and Dallas. They are adept at safely weaving the huge crowds that descend upon SXSW, Austin City Limits, Lollapolooza, Ranger/Cowboys Games, The Jazz Heritage Festival, and Mardi Gras among many others.

## Goals 

They are developing a webapp and website that will allow Users to hail a pedicab from anywhere just by inputing their number and pushing a button. It will eventually come with location services so the drivers get notified with an address to pick up at. They will also begin offering a booking service for food truck tours, margarita tours, pub crawls, bike yoga, bachelor/bachelorette parties, weddings, birthdays and for any other reason at all.

## Design Aspects 

The initial designs for this project were done as wireframes in Illustrator. For the colors schemes I wanted to capture the feel of downtown Austin at night. The reds and greens I especially wanted to give a slightly neon tinge. The header typeface is called Roadgeek and is very similar to what is used on road and street signs across the country; with all body copy being presented in Oxygen. Because the goal was to have this service available to anyone on any device or screen size, all HTML and CSS/SASS was written with a mobile first priority. To help ensure fallbacks and proper cross-browser compatibilty \[Bourbon.io\]([https://bourbon.io](https://bourbon.io "https://bourbon.io")) was also implemented. A Basic Jekyll Blog is the basis for the CMS construct, though the only pieces of the Basic left are the liquid tags for templating all original content and CSS was removed completely. The \[Twilio API\]([https://twilio.io](https://twilio.io "https://twilio.io")) was used to power the Cab Call feature. I had a friend who'd recently graduated from The Iron Yard help me with the php setup. The API sends one message to the customer who needs a ride and another to the company for dispatch. The dispatch is given all the info needed to contact and confirm with the customer