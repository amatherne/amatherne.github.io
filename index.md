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
  custom_html: "==::before {background-size:120%;opacity:0.6;filter:blur(3px);mix-blend-mode:multiply;}
    ==::after{background-blend-mode:hue;}"
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
    desc: "<p>For Practice, the Show, the Studio, with the Bass Player, <br/>and if
      required the Click. </p> <p>I want the Lint in the Pocket.</p>"
    cta:
      enabled: false
      button_text: Let's Collab
      url: contact.md
  custom_html: "==::before {background-size:1000px;opacity:1;filter:initial;mix-blend-mode:multiply;background-repeat:repeat;}
    \n\n==::after{background-blend-mode:hue;} == .icon_image {max-width:300px;} \n==
    h2 {text-transform:uppercase;}"

---
foo bar