---
title: "Local AI Voice Assistant Setup"
description: "Setting up a fully local AI voice assistant with a 7900XT, Whisper, and local LLMs."
date: 2026-06-17
tags: ["AI", "Local LLM", "Whisper", "Home Automation", "Self-Hosted"]
---

Working on building a fully local AI voice assistant.

## Hardware

Dedicated PC with an **AMD Radeon RX 7900 XT (20GB VRAM)**. Planning to put Linux on it to get the most out of the ROCm stack for GPU-accelerated inference.

## The plan so far

- **Speech-to-text**: [Whisper](https://github.com/openai/whisper) for transcription
- **LLM**: A local model, TBD once I get the machine set up and can test what runs well on the 7900 XT
- **TTS**: TBD
	- Ideally with a personality and fun voice. 
	- Going to be interesting how I add grunts and other noises into this

The 20GB of VRAM should give plenty of headroom to run a capable model without having to quantize too aggressively.

## Status

Haven't fully set it up yet. Will update this post with more specifics (model choices and integration with HomeAssistant) once I've had a chance to get it running.
