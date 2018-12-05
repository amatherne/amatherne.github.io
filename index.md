---
layout: blocks
title: Homepage
date: 2017-11-22 23:00:00 +0000
use_slider: true
page_sections:
- template: hero
  block: hero
  image:
    background_image: "/uploads/2018/07/08/hero.jpg"
    image_background_color: rgb(106, 13, 131)
    mobile_mix_blend_mode: normal
  content:
    text_color: "#FFFFFF"
    content_background_color: rgb(33,3,142)
    headline: Pnkdrmmr
    desc: Musician // Web Developer
    cta:
      enabled: false
      button_text: Let's Collab
      url: contact.md
  custom_html: ==::before {background-size:120%;opacity:0.6;filter:blur(3px);mix-blend-mode:multiply;} ==::after{background-blend-mode:hue;}
- template: cta
  block: cta
  image:
    background_image: "/uploads/collections/pattern.jpg"
    image_background_color: rgba(238,92,108)
    icon_image: "/uploads/collections/metronome.svg"
  content:
    text_color: "#FFFFFF"
    content_background_color: rgb(33,3,142)
    headline: On Time
    desc: <p>For Practice, the Show, the Studio, with the Bass Player, <br/>and if required the Click. </p> <p>I want the Lint in the Pocket.</p> 
    cta:
      enabled: false
      button_text: Let's Collab
      url: contact.md
  custom_html: ==::before {background-size:1000px;opacity:1;filter:initial;mix-blend-mode:multiply;background-repeat:repeat;} ==::after{background-blend-mode:hue;} == .icon_image {max-width:300px;} == h2 {text-transform:uppercase;}
# - template: featured-posts
#   block: featured-posts
#   number_of_posts_per_tab: '3'
#   image:
#     background_image: "/uploads/2018/07/15/Poltrona-Gaia.png"
#     image_background_color: rgb(0, 137, 136)
#     mix_blend_mode: multiply
#     background_position: center
#     background_size: cover
#   tabs_from_tags:
#   - Web Development
#   - Blog
#   - Music
# - template: hero
#   block: hero
#   image:
#     background_image: "/uploads/2018/07/12/jump-2-1.jpg"
#     image_background_color: rgb(47, 142, 185)
#     background_position: right center
#     background_size: cover
#     mix_blend_mode: exclusion
#   content:
#     text_color: "#FFFFFF"
#     cta:
#       button_text: Read More
#       url: _posts/fuckballs.md
#       enabled: true
#       url_for_post: _posts/2018-07-12-vetter-kids.md
#       url-for-page: contact.md
#     headline: Vetter Kids to Jade Helm
# - template: signup-bar
#   block: cta-bar
#   email_recipient: matherne.projects@gmail.com
#   headline: Say Hello
#   content: I think that resting, just like working, is one of the things that is worth  doing
#     in life, therefore I have created  this chair so you can relax in a low and comfortable
#     position while you  rest or read a book.
#   image:
#     image: ''
#     alt_text: ''
#   background_image: "/uploads/2018/07/08/glitch-effect_v-3.jpg"
#   content_background_color: rgb(0,0,0)
#   image_background_color: rgb(0,137,136)
#   text_color: "#f8f8dd"
#   background_position: Center
#   background_size: cover
#   background_blend_mode: exclusion
#   mobile_background_position: center
#   mobile_background_size: cover
#   background_mix_mode: hue
# - template: simple-footer
#   block: footer-1
#   image:
#     image: ''
#     alt_text: ''
#   background_image: "/uploads/2018/07/08/adobestock_96573999.jpeg"
#   content_background_color: 
#   image_background_color: rgb(0,137,136)
#   text_color: "#f8f8dd"
#   background_position: Center
#   background_size: cover
#   background_blend_mode: difference
#   mobile_background_position: center
#   mobile_background_size: cover
#   background_mix_mode: multiply

---
foo bar