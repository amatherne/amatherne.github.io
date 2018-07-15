---
layout: blocks
title: Homepage
date: 2017-11-22 23:00:00 +0000
use_slider: true
page_sections:
- template: hero
  block: hero
  image:
    background_image: "/uploads/2018/07/15/austin-1.jpg"
  content:
    cta:
      enabled: false
- template: hero
  block: hero
  image:
    background_image: "/uploads/2018/07/12/jump-2-1.jpg"
    image_background_color: rgb(47, 142, 185)
    mix_blend_mode: exclusion
    background_position: right center
    background_size: cover
  content:
    text_color: "#FFFFFF"
    cta:
      button_text: Read More
      url: _posts/2018-07-15-fuckballs.md
      enabled: true
      url_for_post: _posts/2018-07-12-vetter-kids.md
      url-for-page: contact.md
    headline: Vetter Kids to Jade Helm
- template: hero
  block: hero
  image:
    background_image: "/uploads/2018/07/08/hero.jpg"
    image_background_color: rgb(217, 100, 89)
  content:
    text_color: "#FFFFFF"
    content_background_color: rgb(217, 100, 89)
    desc: I do different things. I like....yes, Austin in Austin, craaaazy right...
      so, I hike, bike, swim, and paddle. I love making music and websites. I love
      working on new and challenging concepts. I hope you do, too.
    headline: Hi, I'm Austin
    cta:
      enabled: true
      button_text: Let's Collab
      url: contact.md
- template: featured-posts
  block: featured-posts
  number_of_posts_per_tab: '3'
  image:
    background_image: "/uploads/2018/07/15/Poltrona-Gaia.png"
    image_background_color: rgb(0, 137, 136)
    mix_blend_mode: multiply
    background_position: center
    background_size: cover
  tabs_from_tags:
  - Web Development
  - Blog
  - Music
- template: signup-bar
  block: cta-bar
  email_recipient: matherne.projects@gmail.com
  headline: Say Hello
  content: I think that resting, just like working, is one of the things that is worth  doing
    in life, therefore I have created  this chair so you can relax in a low and comfortable
    position while you  rest or read a book.
  image:
    image: ''
    alt_text: ''
  background_image: "/uploads/2018/07/08/glitch-effect_v-3.jpg"
  content_background_color: rgb(0,0,0)
  image_background_color: rgb(0,137,136)
  text_color: "#f8f8dd"
  background_position: Center
  background_size: cover
  background_blend_mode: exclusion
  mobile_background_position: center
  mobile_background_size: cover
  background_mix_mode: hue
- template: simple-footer
  block: footer-1
  image:
    image: ''
    alt_text: ''
  background_image: "/uploads/2018/07/08/adobestock_96573999.jpeg"
  content_background_color: 
  image_background_color: rgb(0,137,136)
  text_color: "#f8f8dd"
  background_position: Center
  background_size: cover
  background_blend_mode: darken
  mobile_background_position: center
  mobile_background_size: cover
  background_mix_mode: soft-light

---
foo bar