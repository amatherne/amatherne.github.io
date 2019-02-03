---
layout: blocks
title: Homepage
date: 2017-11-22 23:00:00 +0000
use_slider: true
page_sections:
- template: slides
  block: slides
  block_items:
  - image: uploads/2018/07/15/austin-1.jpg
    title: Vetter Kids
    text: in the studio for our new album "Structure Fire"
    url: contact.md
  - image: "/uploads/2018/07/08/hero.jpg"
    title: Structures & Lines
    text: Summer 2019 Tour Announcement
    url: contact.md
  - image: "/uploads/2018/07/12/jump-2.jpg"
    title: Underwater
    url: contact.md
- template: info
  block: info
  left_headline: Always<br>On <span>Time</span>
  right_headline: For Practice / The Show <Br>The Studio / With the Bassist <br><small>(and
    if, required, The Click) </small>
  custom_html: "== {} }"
  content:
    left_title: On Styles
    left_text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    right_title: Studio vs. Tour
    right_text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
- template: shows
  block: shows
  block_items:
  - image: "/uploads/2018/07/08/austin-2.jpg"
    title: MAGIC Worldtour 2014
    date: 2-25-2019
    price: "$15"
    price_info: per ticket
    address: King’s Theater - 1027 Flatbush Ave, Brooklyn, NY 11226
    url: contact.md
  - image: "/uploads/2018/07/08/austin-2.jpg"
    title: Music State
    date: 2-26-2019
    price: "$15"
    price_info: per ticket
    address: Lion Square 3A Elizabeth, London, UK
    button_text: CANCELED!
    button_class: greyed
    url: contact.md
  - image: "/uploads/2018/07/08/austin-2.jpg"
    title: Music State
    date: 2-26-2019
    price: "$15"
    price_info: per ticket
    address: Lion Square 3A Elizabeth, London, UK
    button_text: Sold Out :(
    button_class: disabled
    url: contact.md

---
foo bar


# - template: cta
#   block: cta
#   image:
#     background_image: "/uploads/collections/pattern.jpg"
#     image_background_color: rgba(238,92,108)
#     icon_image: "/uploads/collections/metronome.svg"
#   content:
#     text_color: "#FFFFFF"
#     content_background_color: rgb(33,3,142)
#     headline: On Time
#     desc: "<p>For Practice, the Show, the Studio, with the Bass Player, <br/>and if
#       required the Click. </p> <p>I want the Lint in the Pocket.</p>"
#     cta:
#       enabled: false
#       button_text: Let's Collab
#       url: contact.md
#   custom_html: "==::before {background-size:1000px;opacity:1;filter:initial;mix-blend-mode:multiply;background-repeat:repeat;}
#     \n\n==::after{background-blend-mode:hue;} == .icon_image {max-width:300px;} \n==
#     h2 {text-transform:uppercase;}"
# - template: text-grid
#   block: text-grid
#   background:
#     background_image: uploads/collections/pattern.jpg
#     image_background_color: rgb(245, 137, 115)
#     text_color: rgb(83, 83, 85)
#   html: "++ .main-header .menu-toggle {color: rgb(83, 83, 85);} \n\n++ .pane-controls
#     .pane-numbers .pane-num {color: rgb(83, 83, 85);} \n\n++ .pane-controls .pane-numbers
#     .pane-num.active, \n++ .pane-controls .pane-numbers .pane-num:focus, \n++ .pane-controls
#     .pane-numbers .pane-num:hover {border-bottom-color:rgb(83, 83, 85);}  \n\n++ .main-header
#     .logo span {color: rgb(83, 83, 85);text-shadow: 0 0 4px #ffffff, 0 0 10px #000;}
#     \n\n==::before {background-size:1000px;opacity:1;filter:initial;mix-blend-mode:overlay;background-repeat:repeat;}
#     \n\n==::after{background-blend-mode:hue;} == .icon_image {max-width:300px;}\n
#     \n== h2 {text-transform:uppercase;}"
#   block_item:
#   - title: Styles
#     text: I don't criticize you! And if you're worried about criticism, sometimes
#       a diet is the best defense. No, I did not kill Kitty. However, I am going to
#       oblige and answer the nice officer's questions because I am an honest man with
#       no secrets to hide.
#     icon: uploads/collections/note.png
#   - icon: uploads/collections/bassdrum.png
#     title: Studio vs. Tour
#     text: I don't criticize you! And if you're worried about criticism, sometimes
#       a diet is the best defense. No, I did not kill Kitty. However, I am going to
#       oblige and answer the nice officer's questions because I am an honest man with
#       no secrets to hide.
#   - icon: uploads/collections/Metronome_173952.png
#     title: To Click or<br/>not to Click
#     text: I don't criticize you! And if you're worried about criticism, sometimes
#       a diet is the best defense. No, I did not kill Kitty. However, I am going to
#       oblige and answer the nice officer's questions because I am an honest man with
#       no secrets to hide.
# - template: contact
#   block: contact
#   image:
#     background_image: uploads/2018/07/08/austin-2.jpg
#     image_background_color: rgb(106, 13, 131)
#   content:
#     headline: Get in Touch
#     description: "<p>I don't criticize you! And if you're worried about criticism,
#       sometimes a diet is the best defense. No, I did not kill Kitty. However, I am
#       going to oblige and answer the nice officer's questions because I am an honest
#       man with no secrets to hide.</p>"
#     text_color: rgb(255, 255, 255)
#   custom_html: "==::before {background-size:cover;opacity:1;filter:blur(3px);mix-blend-mode:multiply;}
#     ==::after{background-blend-mode:hue;background: linear-gradient(-250deg,rgba(33,3,142,0) 55%,rgba(33,3,142,1));}"
# - template: text-grid
#   block: text-grid
#   background:
#     background_image: uploads/collections/pattern.jpg
#     image_background_color: rgb(245, 137, 115)
#     text_color: rgb(83, 83, 85)
#   html: "++ .main-header .menu-toggle {color: rgb(83, 83, 85);} \n\n++ .pane-controls
#     .pane-numbers .pane-num {color: rgb(83, 83, 85);} \n\n++ .pane-controls .pane-numbers
#     .pane-num.active, \n++ .pane-controls .pane-numbers .pane-num:focus, \n++ .pane-controls
#     .pane-numbers .pane-num:hover {border-bottom-color:rgb(83, 83, 85);}  \n\n++ .main-header
#     .logo span {color: rgb(83, 83, 85);text-shadow: 0 0 4px #ffffff, 0 0 10px #000;}
#     \n\n==::before {background-size:1000px;opacity:1;filter:initial;mix-blend-mode:overlay;background-repeat:repeat;}
#     \n\n==::after{background-blend-mode:hue;} \n\n== .icon_image {max-width:300px;}
#     \n\n== h2 {text-transform:uppercase;}"
#   block_item:
#   - title: Styles
#     text: I don't criticize you! And if you're worried about criticism, sometimes
#       a diet is the best defense. No, I did not kill Kitty. However, I am going to
#       oblige and answer the nice officer's questions because I am an honest man with
#       no secrets to hide.
#     icon: uploads/collections/note.png
#   - icon: uploads/collections/bassdrum.png
#     title: Studio vs. Tour
#     text: I don't criticize you! And if you're worried about criticism, sometimes
#       a diet is the best defense. No, I did not kill Kitty. However, I am going to
#       oblige and answer the nice officer's questions because I am an honest man with
#       no secrets to hide.