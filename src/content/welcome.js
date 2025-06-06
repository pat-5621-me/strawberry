import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    messageLink,
} from 'discord.js';
import config from '../config/config.js';

// TODO: format all the discord links create components
// TODO: pull this out to a handler

const rulesImgEmbed = new EmbedBuilder()
    .setColor(0xFF8000)
    .setImage('https://imgur.com/a/wBbNA5L.png');

const rulesEmbed = new EmbedBuilder()
    .setColor(0xFF8000)
    .setTitle('Rules')
    .addFields(
        {
            name: '`1`. **Hate has no home here.**',
            value: '> No hate speech, slurs, homophobia, gatekeeping, ableism, transmedicalism, et cetera is allowed under any circumstances, even in "joking" scenarios. Please refrain from sharing any images or videos containing the above content, even if the intent is to criticise the individuals responsible.'
        },
        {
            name: '`2.` System Responsibility',
            value: '> You are responsible for all of the alters in your system and their actions.',
        },
        {
            name: '`3`. **No age-restricted, obscene, shocking, gory, or overly violent content.**',
            value: '> Our community remains appropriate for anyone over the age of 13; any content deemed unfit for this is disallowed. If something straddles the line, ask a mod, CW, or don’t post it at all.',
        },
        {
            name: '`4`. **Avoid disallowed topics and phrases.**',
            value: '> This includes, but is not limited to: **heavy venting,** **political discussions,** **piracy,** and **promoting or extensively discussing the use of recreational substances, legal or otherwise.**',
        },
        {
            name: '5. **Treat everyone with respect.**',
            value: '> Refrain from engaging in any form of discrimination against others, regardless of age, gender, identity, orientation, and so forth. Absolutely no harassment, witch hunting, sexism, racism, or any form of hate targeting generalised groups of people will be tolerated.',
        },
        {
            name: '`6`. **Respect plural members, and only use PK for our allowed use cases.**',
            value: '> If you see users talking with the `[APP]` tag, they\'re talking through PluralKit. Due to Discord limitations, these messages will show up with the `[APP]` tag - however, these messages are not from bots, they are from users. Additionally, PluralKit is only to be used as a mental health aid, not for any form of roleplay. [Read More]({{rule6}})',
        },
        {
            name: '`7`. **Be considerate of others\' triggers.**',
            value: 'We understand that with such a diverse and large community, it\'s not always feasible to avoid every trigger. Nevertheless, please make an effort to acknowledge and respect others\' triggers, refrain from attempting to change their mind or prove them wrong. **Remember, as a member of this large community, your triggers are your responsibility too.** If a chat topic triggers you (unless listed below), consider stepping back and removing yourself from the situation until the conversation topic changes.\n > ***Note\:*** *You can hide messages with triggering content by using a double upright slash:* TW ||trigger|| - ||content||. For instance, "TW ||spiders|| - ||Check out these [Spider Images]||.',
        },
        {
            name: '`8.` **Avoid mini-modding or arguing with moderators in chat.**',
            value: '> If you see rules being broken, please use the report feature or open a support ticket instead of taking matters into your own hands. Our staff team volunteer their time to ensure a positive environment, and their decisions are always made with the community\'s best interests at heart. If you ever have concerns regarding a decision we\'ve made, we welcome you to open a ticket with our staff.',
        },
        {
            name: '`9`. **Keep in mind effective conflict resolution and interpersonal skills.**',
            value: '> Practise effective de-escalation—everyone has different ways of doing this, but some common tactics include conceding several points and then changing the topic, agreeing to disagree, stepping back from the conversation outright, calling a chat mod to mediate, and/or being the first to apologise.',
        },
        {
            name: '`10`. **No spam or self-promotion.**',
            value: '> Including but not limited to `[server invites, advertisements, etc.]`, **unless given explicit permission from a staff member.** This includes sending unsolicited server invites, advertisements, or direct messages with the intention of promoting content.',
        },
        {
            name: '`11`. **Keep on-topic in all channels.**',
            value: '> We understand conversations naturally drift; however, if they do not self-correct after a while, a mod may step in to help do so.',
        },
        {
            name: '`12`. **Keep all conversations in English.**',
            value: '>  Short phrases or jokes in another language are allowed, but we cannot effectively moderate non-English extensive discussions.',
        },
        {
            name: '`13.` Readability',
            value: 'Fonts and typing quirks that spam channels and / or cause readability issues are not allowed.'
        },
        {
            name: '** **\n**By joining any server, you agree to the following guidelines**',
            value: '[Discord ToS](https://discord.com/terms)\n[Discord Community Guidelines](https://discord.com/guidelines)',
        },
    )
    .setImage('https://i.imgur.com/CBbbw0d.png'); // tiny image that ensures constant embed width

const notesReportEmbed = new EmbedBuilder()
    .setColor(0xDF585B)
    .setTitle('Notes / Report to staff')
    .setDescription('**Please be the bigger person**—if you see someone trying to start a fight, don\'t fight back; DM staff. Similarly, if you see anything that may cause issues or someone possibly willingly causing them, don’t try to argue them into submission. *Don’t feed the trolls, nor your own trauma responses*.\n\nIf you see something against the rules or something that makes you feel unsafe, let staff know. We want this space to be as inclusive and safe as possible. \n\n**To do this:**\n`Right-Click A Message > Apps > Flag Message`\n\n***This directly reports the message to our server staff for us to best handle the situation as fast as possible <3 ***\n\n> *This does not report the message to discord, just to our server staff.*')
    .setFooter({
        text: 'If you are ever unsure if something is allowed, feel free to ask.',
    });

const mentalHealthEmbed = new EmbedBuilder()
    .setColor(0xDF585B)
    .setTitle('🔴 IMPORTANT 🔴')
    .setDescription('We are not mental health professionals. As much as we would like to be able to render assistance in every way possible, we as staff do not have the capacity or the professional qualifications necessary to render proper assistance with mental health issues, nor are we able to give professional advice. Because of this, we do not have medical advice channels. We ask that you seek out appropriate help if you are experiencing a crisis and not depend on this server as an emotional crutch. Please avoid topics that are very heavy or emotionally loaded. Thank you for understanding ❤️')
    .setImage('https://i.imgur.com/CBbbw0d.png');

function buildWelcomeComponents(client, magicMessage) {
    const extra = [
        client.getButton('startVerification'),
    ];

    if (config.guilds[magicMessage.guild.id].roles.emojiVoid) {
        extra.push(client.getButton('addEmojiVoid'));
    }

    return [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setURL(
                        messageLink(
                            config.guilds[magicMessage.guild.id].channels.lobby,
                            magicMessage.id,
                            magicMessage.guild.id,
                        ),
                    )
                    .setLabel('Scroll To Rules!')
                    .setStyle(ButtonStyle.Link),
                ...extra,
            ),
    ];
}

const welcomeEmbeds = [
    rulesImgEmbed,
    rulesEmbed,
    notesReportEmbed,
    mentalHealthEmbed,
];

export {
    welcomeEmbeds,
    buildWelcomeComponents,
};
