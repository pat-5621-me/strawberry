const TMPRulesImgEmbed = {
    color: 0xdf338c,
    image: { url: 'https://i.pinimg.com/originals/13/c3/e8/13c3e803a85dff90e46d084990bc0fb1.gif' },
};

const TMPRulesEmbed = {
    color: 0xdf338c,
    title: 'Rules',
    fields: [
        {
            name: '`1`. **Be respectful**',
            value: '> Treat everyone in the server with respect and kindness, including members, staff, and guests. Remember that everyone deserves to feel safe and welcome in our community. Avoid personal attacks, insults, and any language that could be considered demeaning or hurtful.',
        },
        {
            name: '`2`. **No harassment or bullying**',
            value: '> Harassment and bullying of any kind are strictly prohibited. This includes, but is not limited to: name-calling, insults, derogatory comments, following members to harass them, belittling others, excluding people, and spreading rumours. If someone asks you to stop a behaviour, please respect their wishes.',
        },
        {
            name: '`3`. **Avoid spamming**',
            value: '> Avoid spamming the chat with excessive messages, rapid-fire posts, or flooding channels with .gifs, memes, or links. This can disrupt conversations and make it difficult for others to participate.',
        },
        {
            name: '`4`. **Stay on topic**',
            value: '> Please keep conversations relevant to the channel\'s topic. This helps keep our server organised and makes it easier for people to find the information they\'re looking for. If you\'re not sure where to post something, ask a staff member!',
        },
        {
            name: '`5`. **No self-promotion**',
            value: '> We generally discourage advertising or self-promotion unless it\'s specifically allowed in a designated channel. This includes promoting your own server, social media, products, or services. If you have something you\'d like to share, please check with a staff member first.',
        },
        {
            name: '`6`. **Follow channel guidelines**',
            value: '> Pay attention to the specific guidelines and rules posted in each channel. These guidelines help ensure that the channel is used for its intended purpose.',
        },
        {
            name: '`7`. **Keep all conversations Safe-for-Work**',
            value: '> This is a 13+ server and a SFW space. Please avoid any content that is sexually suggestive, explicit, or could make others uncomfortable. This includes sexual images, videos, innuendos, and detailed discussions about sexual activity. Any violation of this rule is grounds for immediate ban without warning.',
        },
        {
            name: '`8`. **Celebrate diversity**',
            value: '> Discrimination of any kind is unacceptable. We value diversity and believe that everyone should feel welcome and respected, regardless of their race, ethnicity, gender identity, sexual orientation, religion, ability, or background.',
        },
        {
            name: '`9`. **Protect personal information**',
            value: '> Do not share your own personal information or the personal information of others without their consent. This includes names, addresses, phone numbers, social media profiles, et cetera. Sharing someone\'s personal information without their permission ("doxing") is a serious offense and will result in immediate consequences. It\'s also a crime.',
        },
        {
            name: '`10`. **Prioritise safety and well-being**',
            value: '> Do not promote, encourage, or glorify self-harm or harm towards others. If you or someone you know is struggling, please reach out to a trusted friend, family member, or mental health professional.',
        },
        {
            name: '`11`. **No discussion of drugs or alcohol**',
            value: '> To protect our younger members, discussions about drugs and alcohol are not allowed. This includes promoting substance use, sharing personal experiences with substance use, and glorifying addiction. [This rule does not apply to those in ⁠the-bar (#the-bar) as that\'s partially what the channel is about.]',
        },
        {
            name: '`12`. **Follow Discord\'s Guidelines**',
            value: '> In addition to these server rules, all members must abide by Discord\'s Terms of Service and Community Guidelines.',
        },
        {
            name: '** **\n**By joining this server you agree to the following guidelines**',
            value: '[Discord ToS](https://discord.com/terms)\n[Discord Community Guidelines](https://discord.com/guidelines)',
        },
    ],
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
});

const TMPnotesReportEmbed = {
    color: 0xdf338c,
    title: 'Notes / Report to Staff',
    description: '**Please be the bigger person**—if you see someone trying to start a fight, don\'t fight back; open a ticket with staff. Similarly, if you see anything that may cause issues or someone possibly willingly causing them, don’t try to argue them into submission. *Don’t feed the trolls, nor your own trauma responses*.\n\nIf you see something against the rules or something that makes you feel unsafe, let staff know. We want this space to be as inclusive and safe as possible. \n\n**To do this:**\n`Right-Click A Message > Apps > Daedalus > Flag Message`\n\n***This directly reports the message to our server staff for us to best handle the situation as fast as possible <3 ***\n\n> *This does not report the message to discord, just to our server staff.*',
    footer: { text: 'If you are ever unsure if something is allowed, feel free to ask.' },
};

const TMPmentalHealthEmbed = {
    color: 0xDF585B,
    title: '🔴 IMPORTANT 🔴',
    description: 'We are not mental health professionals. As much as we would like to be able to render assistance in every way possible, we as staff do not have the capacity or the professional qualifications necessary to render proper assistance with mental health issues, nor are we able to give professional advice. We ask that you seek out appropriate help if you are experiencing a crisis and not depend on this server as an emotional crutch. Please avoid topics that are very heavily emotionally loaded. Thank you for understanding ❤️',
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
};

export const TMPRulesMessages = [
    { embeds: [TMPRulesImgEmbed], [TMPRulesEmbed] },
    { embeds: [TMPnotesReportEmbed, TMPmentalHealthEmbed] },
];



const TFPRulesImgEmbed = {
    color: 0x30d5c8,
    image: { url: 'https://i.pinimg.com/originals/13/c3/e8/13c3e803a85dff90e46d084990bc0fb1.gif' },
};

const TFPRulesEmbed = {
    color: 0x30d5c8,
    title: 'Rules',
    fields: [
        {
            name: '`1`. **Hate has no home here.**',
            value: '> No hate speech, slurs, homophobia, gatekeeping (including transmedicalism), or transphobia is allowed under **ANY** circumstances. (Even in "joking" scenarios.). **Please refrain from sharing any images or videos containing the above content, even if the intention is to criticise the individuals responsible.**',
        },
        {
            name: '`2`. **Treat everyone with respect**',
            value: '> Treat everyone in the server with respect and kindness, including members, staff, and guests.  Remember that everyone deserves to feel safe and welcome in our community. Avoid personal attacks, insults, and any language that could be demeaning or hurtful.',
        },
        {
            name: '`3`. **Harassment of any kind is prohibited**',
            value: '> Don\'t harass, name-call, insult, make derogatory comments towards, belittle, or exclude anyone for any reason.',
        },
        {
            name: '`4`. **No self-promotion**',
            value: '> We generally discourage advertising or self-promotion unless it\'s specifically allowed in a designated channel. This includes promoting your own server, social media, products, or services. If you have something you\'d like to share, please check with a staff member first.',
        },
        {
            name: '`5`. **Treat everyone with respect.**',
            value: '> Refrain from engaging in any form of discrimination against others, regardless of age, gender, identity, orientation, and so forth. Absolutely no harassment, witch hunting, sexism, racism, or any form of hate targeting generalised groups of people will be tolerated. [Read More]({{rule5}})',
        },
        {
            name: '`6`. **No discrimination**',
            value: '> Discrimination of any kind is unacceptable. We value diversity and believe that everyone should feel welcome and respected, regardless of their race, ethnicity, gender identity, sexual orientation, religion, ability, or background.',
        },
        {
            name: '`7`. **No doxxing**',
            value: '> Do not share your own personal information or the personal information of others without their consent. This includes names, addresses, phone numbers, and social media profiles. Sharing someone\'s personal information without their permission ("doxing") is a serious offense and will result in action. It\'s also a crime.',
        },
        {
            name: '`8`. **Avoid mini-modding or arguing with moderators in chat.**',
            value: '> If you see rules being broken, please use our custom report `[Example Below]` feature or open a support ticket instead of taking matters into your own hands. Our staff team volunteer their time to ensure a positive environment, and their decisions are always made with the community\'s best interests at heart. If you ever have concerns regarding a decision we\'ve made, we welcome you to open a ticket or direct message a senior staff member or admin.',
        },
        {
            name: '`9`. **Prioritise safety and well-being**',
            value: '> Do not promote, encourage, or glorify self-harm or harm towards others. If you or someone you know is struggling, please reach out to a trusted friend, family member, or mental health professional.',
        },
        {
            name: '`10`. **Keep on topic in all channels**',
            value: '> Pay attention to the specific guidelines and rules posted in each channel. These guidelines help ensure that the channel is used for its intended purpose. All "spicy" content must be kept inside the channels dedicated for that purpose.',
        },
        {
            name: '`11`. **Don\'t actively have sex on the server**',
            value: '> Although this server is very sex positive please refrain from posting any photos or images depicting sex acts. This can include masturbation all the way to pornography. If you\'re interested in sharing these with others, please only do so in DMs. Lewd memes and the like are allowed though. ',
        },
        {
            name: '`12`. **Consent is key**',
            value: '> Don\'t push conversations on people who do not seem interested in participating. This applies to everything, but especially flirting and politics. **No means no**.',
        },
        {
            name: '** **\n**By joining this server you agree to the following guidelines**',
            value: '[Discord ToS](https://discord.com/terms)\n[Discord Community Guidelines](https://discord.com/guidelines)',
        },
    ],
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
});

const TFPnotesReportEmbed = {
    color: 0x30d5c8,
    title: 'Notes / Report to Staff',
    description: '**Please be the bigger person**—if you see someone trying to start a fight, don\'t fight back; DM staff. Similarly, if you see anything that may cause issues or someone possibly willingly causing them, don’t try to argue them into submission. *Don’t feed the trolls, nor your own trauma responses*.\n\nIf you see something against the rules or something that makes you feel unsafe, let staff know. We want this space to be as inclusive and safe as possible.
    footer: { text: 'If you are ever unsure if something is allowed, feel free to ask.' },
};

const TFPmentalHealthEmbed = {
    color: 0x30d5c8,
    title: '🔴 IMPORTANT 🔴',
    description: 'We are not mental health professionals. As much as we would like to be able to render assistance in every way possible, we as staff do not have the capacity or the professional qualifications necessary to render proper assistance with mental health issues, nor are we able to give professional advice. Because of this, we do not have venting channels. We ask that you seek out appropriate help if you are experiencing a crisis and not depend on this server as an emotional crutch. Please avoid topics that are very heavily emotionally loaded. Thank you for understanding ❤️',
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
};

export const TFPRulesMessages = [
    { embeds: [TFPRulesImgEmbed], [TFPRulesEmbed] },
    { embeds: [TFPnotesReportEmbed, TFPmentalHealthEmbed] },
];



const SYSPRulesImgEmbed = {
    color: 0x8b0000,
    image: { url: 'https://i.pinimg.com/originals/13/c3/e8/13c3e803a85dff90e46d084990bc0fb1.gif' },
};

const SYSPRulesEmbed = {
    color: 0x8b0000,
    title: 'Rules',
    fields: [
        {
            name: '`1`. **Hate has no home here.**',
            value: '> No hate speech, slurs, homophobia, gatekeeping (including transmedicalism / sysmedicalism), or transphobia is allowed under **ANY** circumstances. (Even in "joking" scenarios.). **Please refrain from sharing any images or videos containing the above content, even if the intention is to criticise the individuals responsible.**',
        },
        {
            name: '`2`. **System responsibility**',
            value: '> You are responsible for the alters in your system and their actions.',
        },
        {
            name: '`3`. **No age-restricted, obscene, gory, or overly violent content**',
            value: '> Our community remains appropriate for anyone over the age of 13; any content deemed unfit for this is disallowed. If something straddles the line, ask a mod, CW, or don’t post it at all.',
        },
        {
            name: '`4`. **Disallowed topics**',
            value: '> Conversations including, but not limited to, these topics are disallowed: heavy venting, political discussions, system discourse, piracy, and promoting or extensively discussing the use of recreational substances, legal or otherwise.',
        },
        {
            name: '`5`. **Treat everyone with respect**',
            value: '> Refrain from engaging in any form of discrimination against others, regardless of age, gender, identity, orientation, and so forth. Absolutely no harassment, witch hunting, sexism, racism, or any form of hate targeting generalised groups of people will be tolerated. [Read More]({{rule5}})',
        },
        {
            name: '`6`. **Pluralkit use**',
            value: '> If you see users talking with the APP tag, they\'re talking through PluralKit. Due to Discord limitations, these messages will show up with the [APP] tag - however, they are not bots, they are users.\n\n Additionally, PluralKit is only to be used as a mental health aid, and not for any form of roleplay.',
        },
        {
            name: '`7`. **Respect triggers**',
            value: '> We understand that with such a diverse and large community, it\'s not always feasible to avoid every trigger. Nevertheless, please make an effort to acknowledge and respect others\' triggers, refrain from attempting to change their mind or prove them wrong. Remember, as this large community, your triggers are also your responsibility. If a chat topic triggers you, consider stepping back and removing yourself from the situation until the conversation topic changes.',
        },
        {
            name: '`8`. **Avoid mini-modding or arguing with moderators in chat.**',
            value: '> If you see rules being broken, please use our report feature or open a support ticket instead of taking matters into your own hands. Our staff team volunteer their time to ensure a positive environment, and their decisions are always made with the community\'s best interests at heart. If you ever have concerns regarding a decision we\'ve made, we welcome you to open a ticket or direct message a senior staff member or admin.',
        },
        {
            name: '`9`. **Keep in mind effective conflict resolution**',
            value: '> Practise effective de-escalation — everyone has different ways of doing this, but some common tactics include conceding several points and then changing the topic, agreeing to disagree, stepping back from the conversation outright, calling a chat mod to mediate, and/or being the first to apologise.',
        },
        {
            name: '`10`. **No spam or self-promotion**',
            value: '> Unless given explicit permission from a staff member avoiding self-promotion; including but not limited to: sending unsolicited server invites, advertisements, or direct messages with the intention of promoting content.\n\n Fonts and typing quirks that are unreadable are considered spam and are therefore not allowed.',
        },
        {
            name: '`11`. **Keep on topic in all channels**',
            value: '> We understand conversations naturally drift; however, if they do not self-correct after a while, a mod may step in to help do so. ',
        },
        {
            name: '`12`. **Keep all conversations in English**',
            value: '> Short phrases or jokes in another language are allowed, but we cannot effectively moderate non-English extensive discussions.',
        },
        {
            name: '** **\n**By joining this server you agree to the following guidelines**',
            value: '[Discord ToS](https://discord.com/terms)\n[Discord Community Guidelines](https://discord.com/guidelines)',
        },
    ],
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
});

const SYSPnotesReportEmbed = {
    color: 0x8b0000,
    title: 'Notes / Report to Staff',
    description: '**Please be the bigger person**—if you see someone trying to start a fight, don\'t fight back; DM staff. Similarly, if you see anything that may cause issues or someone possibly willingly causing them, don’t try to argue them into submission. *Don’t feed the trolls, nor your own trauma responses*.\n\nIf you see something against the rules or something that makes you feel unsafe, let staff know. You can report a user or message by: [right click -> applications -> Daedalus -> Flag Message]. This will result in the fastest response time. You will never be punished for a report made in good faith. We want this space to be as inclusive and safe as possible.
    footer: { text: 'If you are ever unsure if something is allowed, feel free to ask.' },
};

const SYSPmentalHealthEmbed = {
    color: 0x8b0000,
    title: '🔴 IMPORTANT 🔴',
    description: 'We are not mental health professionals. As much as we would like to be able to render assistance in every way possible, we as staff do not have the capacity or the professional qualifications necessary to render proper assistance with mental health issues, nor are we able to give professional advice. Because of this, we do not have venting channels. We ask that you seek out appropriate help if you are experiencing a crisis and not depend on this server as an emotional crutch. Please avoid topics that are very heavily emotionally loaded. Thank you for understanding ❤️',
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
};

export const SYSPRulesMessages = [
    { embeds: [SYSPRulesImgEmbed], [SYSPRulesEmbed] },
    { embeds: [SYSPnotesReportEmbed, SYSPmentalHealthEmbed] },
];




const MADRulesImgEmbed = {
    color: 0xC765AB,
    image: { url: 'https://i.pinimg.com/originals/13/c3/e8/13c3e803a85dff90e46d084990bc0fb1.gif' },
};

const MADRulesEmbed = {
    color: 0xC765AB,
    title: 'Rules',
    fields: [
        {
            name: '`1`. **Put effort into accomodating others**',
            value: '> This is the highest priority - without it, we can\'t exist together. One can\'t expect to be accomodated without accomodating others. When accomodations clash, follow the principles of Universal Design - the setting or build that benefits the most people is the one that should be built. (Don\'t build stairs when a ramp is cheaper and more accessible to more people.)',
        },
        {
            name: '`2`. **Do not discriminate**',
            value: '> Any action that judges a person based on a characteristic that that person cannot change - things like race, sex, gender, nationality, class, orientation, et cetera - isn\'t allowed in our communities.',
        },
        {
            name: '`3`. **Don\'t abuse others.**',
            value: '> Don\'t harass, name-call, insult, make derogatory comments towards, belittle, or exclude anyone for any reason. We work to dismantle the systems that normalised oppression - in that vein, remember that even mundane words can be offensive to certain people. (Example: Don\'t call a group of women "guys"; that is by definition misgendering them. It\'s not gender-neutral, and is only thought of that way because of the prominance of "man-by-default" societal expectations. Break them.)',
        },
        {
            name: '`4`. **Network**',
            value: '> This server is made to be a network, a catchall of many smaller and larger mutual aid communities, all available in one place. Your contributions to this network are appreciated. If one place doesn\'t work out for you, you\'re always welcome to come back and try a different one! Should you decide to contribute to our resources, you will need to complete verification.',
        },
        {
            name: '`5`. **Terms of Service trumps all**',
            value: '> Don\'t violate the TOS or the law. Mods are not bound by the Geneva conventions and may exercise cruel and unusual punishments for rule violations as they see fit.',
        },
        {
            name: '`6`. **This is a SFW server**',
            value: '> We have opt-in channels specifically for triggers and NSFW content; but in general, don\'t post things here that aren\'t safe for work.',
        },
        {
            name: '`7`. **No doxxing**',
            value: '> Do not share your own personal information or the personal information of others without their consent. This includes names, addresses, phone numbers, and social media profiles. Sharing someone\'s personal information without their permission ("doxing") is a serious offense and will result in action. It\'s also a crime.',
        },
        {
            name: '`8`. **Stay civil**',
            value: '> Don\'t start a debate in the public channels. This isn\'t a political server.',
        },
        {
            name: '`9`. **Prioritise safety and well-being**',
            value: '> Do not promote, encourage, or glorify self-harm or harm towards others. If you or someone you know is struggling, please reach out to a trusted friend, family member, or mental health professional.',
        },
        {
            name: '`10`. **Keep on topic in all channels**',
            value: '> Pay attention to the specific guidelines and rules posted in each channel. These guidelines help ensure that the channel is used for its intended purpose. All "spicy" content must be kept inside the channels dedicated for that purpose.',
        },
        {
            name: '** **\n**By joining this server you agree to the following guidelines**',
            value: '[Discord ToS](https://discord.com/terms)\n[Discord Community Guidelines](https://discord.com/guidelines)',
        },
    ],
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
});

const MADmentalHealthEmbed = {
    color: 0x30d5c8,
    title: '🔴 IMPORTANT 🔴',
    description: 'We are not mental health professionals. As much as we would like to be able to render assistance in every way possible, we as staff do not have the capacity or the professional qualifications necessary to render proper assistance with mental health issues, nor are we able to give professional advice. Because of this, we do not have venting channels. We ask that you seek out appropriate help if you are experiencing a crisis and not depend on this server as an emotional crutch. Please avoid topics that are very heavily emotionally loaded. Thank you for understanding ❤️',
    image: { url: 'https://raw.githubusercontent.com/TransGG/assets/refs/heads/main/embed-sizer.png' },
};

export const MADRulesMessages = [
    { embeds: [MADRulesImgEmbed], [MADRulesEmbed] },
    { embeds: [MADmentalHealthEmbed] },
];
    
