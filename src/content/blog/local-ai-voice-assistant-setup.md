---
title: "Local AI Voice Assistant Setup"
description: "Setting up a fully local AI voice assistant with a 7900XT, Whisper, Piper, and local LLMs."
date: 2026-06-17
tags: ["AI", "Local LLM", "Whisper", "Piper", "Home Automation", "Self-Hosted"]
---

Working on building a fully local AI voice assistant.

## Hardware

Dedicated PC with an **AMD Radeon RX 7900 XT (20GB VRAM)**. Planning to put Linux on it to get the most out of the ROCm stack for GPU-accelerated inference.

For the mic and speaker I'm going with the [PineVoice](https://pine64.org). It has a hardware privacy kill switch which I like, and it fits the whole local-first thing I'm going for.

## The plan so far

- **Speech-to-text**: [Whisper](https://github.com/openai/whisper) for transcription
- **LLM**: TBD once I get the machine set up and can test what runs well on the 7900 XT. 20GB of VRAM should give plenty of headroom without having to quantize too aggressively.
- **TTS**: [Piper](https://github.com/rhasspy/piper) with a fun/personality-driven voice

### Character sounds

One thing I want to do is pair the TTS with prerecorded character sounds, like grunts, chuckles, gasps, etc. The idea is to give each sound a description or tag so the LLM knows when it would make sense to use one. Then the LLM outputs something like `[chuckle]` inline in its response, a parser strips it out before Piper reads the text, and the audio clip plays at that point in the sequence. Basically how games handle character barks. Should make the whole thing feel a lot more alive than just a flat voice reading sentences.

I don't think I'll need to train a custom voice model for this, but if I do I'll look into it.

## Status

Haven't fully set it up yet. Will update this post with more specifics once I've had a chance to get it running.
