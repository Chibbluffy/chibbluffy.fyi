---
title: "HomeAssistant Setup: Part 1"
description: "Starting my HomeAssistant setup: Wyze cameras and lights, Z-Wave, and Zigbee plans."
date: 2026-06-17
tags: ["Home Automation", "HomeAssistant", "Wyze", "Z-Wave", "Zigbee"]
---

I'm getting into HomeAssistant. Finally set up my Raspberry Pi on HA OS. This is part 1 of who knows how many.

## Wyze Lights

Install the Wyze integration, there's some hoops you need to jump through and enable to be able to install this. Not too bad though, but I wonder how up to date the package is for Wyze lights. 

The lights work fine with HA. I can control brightness and turn them on and off. I also got it hooked up to use my phone as an entity, so they flip on and off when I leave or arrive. Color control isn't working though. The API doesn't support it and the open source integration didn't pan out either.

I'm going to swap these out for different lights eventually and pick up more local-friendly devices in general.

## Wyze Cameras

This one's stuck for now. I had planned to pull the camera feeds into [Frigate](https://frigate.video) (I even picked up a Google Coral TPU for it), but Wyze removed the custom RTSP firmware from their site. That firmware is what allows third-party integrations, and without it I can't hook the cameras up to the Pi. No word on whether or when they'll release another version. Sooooo for now they're staying in the Wyze app.

## What's next

Adding Z-Wave and Zigbee hubs so I can use other sensors and IoT devices like my thermostat and whatever else I end up picking up.

I'm also planning to pick up the [PineVoice](https://pine64.org) bundle. It comes with the PineVoice speaker, a Zigbee dongle, a power supply, and two Matter modules. I was already planning to grab a Zigbee dongle so this kills two birds with one stone. It also has a hardware privacy kill switch which I like. The PineVoice is also going to double as the mic and speaker for my local AI voice assistant project.

More to come...
