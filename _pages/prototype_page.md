---
layout: page
title:  "Overview of Prototype Development Methods and Conjoined Longitudinal Research Methods"
---

### Creating a tool by identifying a theme

- Dominant request through research: communication
- 2 existing, “high-priority” pain points in communication at present between case managers and clients
	- Identifying and maintaining up-to-date communication methods for clients
	- Lack of effective “passive” communication methods (examples:. voicemails tend to be unreliable, email is only partially supported, and text messaging is currently not provided)


### Supporting Diversity

*Given these communication issues, how can we create a tool to support the diverse population spread clients represent that attend CJS?*

There is much to be learned from client-patient noncompliance research in the medical field. Dr. Peter Conrad’s 1981 “The Sociology of Health and Illness: Critical Perspectives” summarizes hundreds of noncompliance research studies. A key conclusion of this research can be transferable to criminal justice compliance, which “locates the the source of the problem in doctor-patient interaction or communication…” In reference to such conclusions it is noted that “there seems to be little consistent relationship between noncompliance and such factors as social class, age, sex, education, and marital status” (Conrad, 174). Thus, we might conclude that, in deciding what to prototype, facilitation of communication is paramount and adds significant value across the socio-demographic spectrum.


### Technical Capacity

*From a technical perspective, is the tools ecosystem mature enough to support such an endeavour?*

Passive communication thrives when mechanism is easy to use. A key way to provide such ease is to have a single client-facing endpoint that supports all communication methods. 

- Inherent complexities in single-endpoint strategy: Artificial intelligence is necessary to parse client contact and identify appropriate organizational contact.
- Is technology prepared to handle such opportunity? Philipp Langhans, software engineer, [recently argued](https://medium.com/@philipp_lgh/building-an-ibm-watson-powered-ai-chatbot-9635290fb1d3#.7957phe86) in “Building an IBM Watson powered AI Chatbot” that engineering feasibility is within reason, given today’s digital ecosystem, but that “having the right use case is key.”


### Resulting prototype: ClientComm

***Base Deployment**

- Base tool facilitates text communication between case managers and clients
	- Contact enables a live log of communication methods use, thus enabling the case manager to see all forms of communication used to reach out to case manager (e.g. a caller ID log) and thus make educated guesses as to what method of contact will be most likely to reach a client with success.
- Metrics analytics at present - what are we measuring to determine success?
	- Measuring logins by case manager, text message frequency, and client responsiveness.
	- Results in preliminary stages; we are still developing a robust dataset and are in our first month of prototyping thus far. Most basic measures of success have returned positive results.

![user]({{ site.baseurl }}/assets/imgs/misc/14.jpg)

**Response:** 

*“First and foremost the program is working very well. I am having more success contacting clients that I otherwise was having problems doing. My guess is people seem more comfortable texting.”* - Pretrial Case Manager at Criminal Justice Services

**How are we further developing the tool?**

- The tool is “bare bones.” Feature requests are created through feedback tool built into the tool that allows case managers to reach out to developer and make feature requests. Popular feature requests have priority.
- This is software for case managers, by case managers. Success is measured via their success, which is predicated itself on client success.
- Some key future elements to support:
	1. Email routing support, voice support
	2. Additional case management features

![measure]({{ site.baseurl }}/assets/imgs/misc/15.png)

**How are going to measure effectiveness of tool with regards to our overall mission?**

- Because this software is core to our research, conversations performed over ClientComm will give us unique insight into what pain points can be attributed to which client-types. This allows ClientComm to generate robust data on categorized client pain points; data which can be used to make intelligent policy level decisions.
- Through users of ClientComm, we can - over time - begin to observe client success through the tool.
- Caveats: As with most social research, externalities lead to complexity scales that prohibit absolute measures of either causation or correlation. That said, by maintaining aggressive user research strategies that put us in direct conversations with case managers and clients, we can create proxy, anecdotal reports that, through volume, can assist in shedding light and understanding on data generated through the system.