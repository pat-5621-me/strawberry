import { ChannelType, ThreadAutoArchiveDuration } from 'discord.js';
import 'dotenv/config';
import { FatalError } from '../bot/utils/errors.js';
import {
    TMPRulesMessages,
    MADRulesMessages,
    TFPRulesMessages,
    SYSPRulesMessages,
} from './messages.js';

// for easier reading
/* eslint-disable max-len */
/**
 * @property {boolean}   debug      - Whether debug mode is enabled
 * @property {boolean}   verbose    - Whether verbose output is enabled
 * @property {function}  debugOut   - Function to be called for debug output
 * @property {function}  verboseOut - Function to be called for verbose output
 * @property {Snowflake} clientId   - The id of the bot to which application commands are registered, in the form of a Discord Snowflake
 * @property {string}    token      - The token of the bot
 * @property {Snowflake} guild      - Id of a guild to register commands in
 * @property {Object}    guild.channels   - Relevant channels
 * @property {Snowflake} guild.channels.lobby               - The channel unverified users start verification from
 * @property {Snowflake} guild.channels.verifyLogs          - Main log channel for verification logs
 * @property {Snowflake} guild.channels.theoSendLogs      - Log channel for staff anonymized messages
 * @property {Snowflake} guild.channels.verifyLogsSecondary - Secondary log channel for verification logs. Currently used for verify kick logs
 * @property {Snowflake} guild.channels.welcome             - Secondary log channel for verification logs. Currently used for verify kick logs
 * @property {Snowflake} guild.channels.general             - General channel
 * @property {Snowflake} guild.channels.introduce           - Channel for self-introductions
 * @property {Object}    guild.roles   - Relevant roles
 * @property {Snowflake} guild.roles.verifier - Verifier: the chief agents of the verification process
 * @property {Snowflake} guild.roles.verified - Verified: the role that is awarded to people who get verified
 * @property {Snowflake} guild.roles.greeter  - Greeter: role to be notified of new members
 * @property {any[]}     guild.questions      - Question categories
 * @property {Object}    guild.links   - Links for templating the rules embeds
 * @property {Object}    guild.invite  - The guild's invite link
 * @property {Object}    guild.proxy   - Configuration for the proxy that sends reminders/follow-up messages
 * @property {string}    guild.proxy.name     - The name of the webhook
 * @property {string}    guild.proxy.displayName  - The display name of the webhook
 * @property {string}    guild.proxy.avatarURL    - The avatar URL
 * @property {string}    guild.proxy.heartEmoji   - The string form of the heart emoji in the "verifiers have been pinged" message
 * @property {string}    guild.proxy.welcomeEmoji - The string form of the emoji in the "welcome, {applicant}" message
 * @property {string}    guild.proxy.thanksEmoji  - The string form of the emoji in the "answer within 3 hours, thanks" message
 * @property {string}    guild.proxy.bumpEmoji    - The string form of the emoji in the "hi there, it's been 3 hours" message
 * @property {any[]}     guild.rulesMessages  - An array of messages (each being an embed array) for the rules
 */
const config = {
    verboseOut: () => {},
    clientId: '',
    token: process.env.TOKEN,
    guilds: {},
};

const TMPProxy = {
    name: 'Verification [Basil] Proxy',
    displayName: '[Basil] ♡ [Any Pronouns]',
    avatarURL: 'https://github.com/pat-5621-me/pc-assets/blob/main/proxy-avatar-basil.png?raw=true',
    heartEmoji: '<:MP_transgalaxy:1270027513334337641>',
    welcomeEmoji: '<a:MPA_Wave_GawrGura:1532941166654259392>',
    thanksEmoji: '<a:MP_transgender_shiny_heart_flag:1253876152850976919>',
    bumpEmoji: '<a:MPA_Bounceline:1256702957093781664>',
};

const MADProxy = {
    name: 'Verification [Ruby] Proxy',
    displayName: '[Ruby] ♡ [She / Her / Hers]',
    avatarURL: 'https://github.com/pat-5621-me/pc-assets/blob/main/proxy-avatar-ruby.jpg?raw=true',
    heartEmoji: '<:MP_transgalaxy:1270027513334337641>',
    welcomeEmoji: '<a:MPA_Wave_GawrGura:1532941166654259392>',
    thanksEmoji: '<a:MP_transgender_shiny_heart_flag:1253876152850976919>',
    bumpEmoji: '<a:MPA_Bounceline:1256702957093781664>',
};

const SYSPProxy = {
    name: 'Verification [Cypher] Proxy',
    displayName: '[Cypher] ♡ [They / Them / Theirs]',
    avatarURL: 'https://github.com/pat-5621-me/pc-assets/blob/main/proxy-avatar-cypher.jpg?raw=true',
    heartEmoji: '<:MP_transgalaxy:1270027513334337641>',
    welcomeEmoji: '<a:MPA_Wave_GawrGura:1532941166654259392>',
    thanksEmoji: '<a:MP_transgender_shiny_heart_flag:1253876152850976919>',
    bumpEmoji: '<a:MPA_Bounceline:1256702957093781664>',
};

const defaultQuestions = [
    {
        id: 'trans',
        title: 'Transgender / Genderfluid / Nonbinary',
        description: 'If you identify as part of the transgender/genderfluid/nonbinary umbrella',
        questions: [
            'What is your favorite rule from our server rules?',
            'What do E and T mean in trans contexts?',
            'What does the word Transgender mean to you?',
            'How did you figure out your gender identity?',
        ],
    },
    {
        id: 'questioning',
        title: 'Transgender Questioning',
        description: 'If you are questioning whether you are transgender/genderfluid/nonbinary',
        questions: [
            'What is your favorite rule from our server rules?',
            'If you could change three things about yourself right now, what would they be?',
            'What does the word Transgender mean to you?',
            'What made you begin questioning your gender identity?',
        ],
    },
    {
        id: 'cis',
        title: 'Cisgender / Other LGBTQ+',
        description: 'If you are cisgender, regardless of whether you are otherwise LGBTQ+',
        questions: [
            'What is your favorite rule from our server rules?',
            'What about this server being trans-focused made you want to join?',
            'What would you do as/being an ally in this server?',
            'What does the word Transgender mean to you?',
        ],
    },
];

const tmpQuestions = [
    {
        id: 'trans',
        title: 'Transgender / Genderfluid / Nonbinary',
        description: 'Select this role if you are one of these and not questioning your identity.',
        questions: [
            'What is your favourite rule from our server rules?',
            'What do E and T mean in trans contexts?',
            'How did you figure out your gender identity?',
            'What does the word Transgender mean to you?',
            'How did you hear about our server?',
        ],
    },
    {
        id: 'cis',
        title: 'Cisgender / Other LGBTQ',
        description: 'Select this role if you are cisgender, regardless of if you are otherwise LGBTQ+.',
        questions: [
            'What is your favourite rule from our server rules?',
            'How do you intend to be an ally on our server?',
            'Of the many trans-specific servers on Discord, why join this one in particular?',
            'What are three things you would change about the LGBTQ community?',
        ],
    },
    {
        id: 'questioning',
        title: 'LGBTQ+ Questioning',
        description: 'Select this role if you\'re questioning your potential LGBTQ identity.',
        questions: [
            'What is your favourite rule from our server rules?',
            'If you could change three things about yourself right now, what would they be and why?',
            'What do E and T mean in trans contexts?',
            'How did you hear about our server?',
        ],
    },
];

const tfpQuestions = [
    {
        id: 'member',
        title: 'Member',
        description: 'Select this role to join the server!',
        questions: [
            'What is your favourite rule from our server rules?',
            'How did you hear about our server?',
            'What are three things that are unwelcome to do in an NSFW server such as this one?',
            'Please send us a photo of your government ID - passport preferred - that clearly shows your date of birth and all four corners of the document. You may block out your name / necronym and the document number if desired. We do not store this data, and it is deleted from the thread after we verify you.',
        ],
    },
];

const madQuestions = [
    {
        id: 'member',
        title: 'Member',
        description: 'Select this role to join the server!',
        questions: [
            'How did you hear about this server?',
            'Why do you want access to post?',
            'What are you doing to fight capitalism?',
            'Do you have anything else you\'d like to add?',
        ],
    },
];

const syspQuestions = [
    {
        id: 'singlet',
        title: 'Singlet',
        description: 'Click this role if you\'re not a system.',
        questions: [
            'What is your favourite rule from our server rules?',
            'What brings you to our server, out of the many other servers that exist on Discord?',
            'What do terms like System and Plural mean?',
            'How do you intend on being an ally to the plural community?',
        ],
    },
    {
        id: 'system',
        title: 'System',
        description: 'Click this role if you\'re a system.',
        questions: [
            'What is your favourite rule from our server rules?',
            'What do terms like System and Plural mean?',
            'What is your opinion on Endogenic Systems?',
            'How did you discover your systemhood? You can answer this question as thoroughly or as vaguely as you\'d like.',
        ],
    },
    {
        id: 'system-questioning',
        title: 'System Questioning',
        description: 'Click this role if you\'re unsure about whether you are plural.',
        questions: [
            'What is your favourite rule from our server rules?',
            'What do terms like System and Plural mean?',
            'Of the many servers on Discord, why join this one in particular?',
            'What made you begin questioning your systemhood?',
        ],
    },
];

const development = {
    debugOut: console.debug,
    verboseOut: console.info,
    clientId: '1255572601590382725',
    guilds: {
        '985931648094834798': {
            // TPDevs
            sync: [
                '981615050664075404', // TPSupporters
            ],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread,
            channels: {
                lobby: '1097203594631073933',
                verifyLogs: '1097203635689107516',
                verifyLogsSecondary: '1097203656551583865',
                theoSendLogs: '1364027965847109662',
                welcome: '1105354623243538462',
                general: '1097203694539387111',
                introduce: '1097203721802354868',
            },
            roles: {
                staffRoles: ['986220638958137355'],
                verifier: '1046271388782186590',
                verified: '1092270181012742144',
                newbie: '1121688453566959697',
                noImages: '1121664177333878844',
                place: '1121666104390058115',
                member: '1105354354501881866',
                greeter: '1097204070252548097',
            },
            questions: defaultQuestions,
            links: {
                rules: 'https://google.com/1-rules',
                rule1: 'https://google.com/1-1',
                rule2: 'https://google.com/1-2',
                rule3: 'https://google.com/1-3',
                rule5: 'https://google.com/1-5',
                rule7: 'https://google.com/1-7',
                rule9: 'https://google.com/1-9',
                rule12: 'https://google.com/1-12',
                banAppealForm: 'https://example.com',
            },
            invite: 'https://google.com',
            proxy: TMPProxy,
            rulesMessages: TMPRulesMessages,
        },
        '981615050664075404': {
            // TPSupporters
            sync: [
                '985931648094834798', // TPDevs
            ],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread,
            channels: {
                lobby: '1255574457800720514',
                verifyLogs: '1255574478264467597',
                verifyLogsSecondary: '1255574493594914826',
                theoSendLogs: '1364028107920642078',
                welcome: '1255574514687803575',
                general: '1255574526171938866',
                introduce: '1255574539891376189',
            },
            roles: {
                staffRoles: ['981615050743758902'],
                verifier: '1085626093014364272',
                verified: '1085625471972159539',
                noImages: '1135756628390588456',
                member: '1255574835166449764',
                newbie: '1085625477001125950',
                greeter: '1085625570144043039',
                inactivityPing: '1101453059860746270',
                emojiVoid: '1101452907490062358',
            },
            questions: defaultQuestions,
            links: {
                rules: 'https://google.com/2-rules',
                rule1: 'https://google.com/2-1',
                rule2: 'https://google.com/2-2',
                rule3: 'https://google.com/2-3',
                rule5: 'https://google.com/2-5',
                rule7: 'https://google.com/2-7',
                rule9: 'https://google.com/2-9',
                rule12: 'https://google.com/2-12',
                banAppealForm: 'https://example.com',
            },
            invite: 'https://yahoo.com',
            proxy: TMPProxy,
            rulesMessages: TMPRulesMessages,
        },
    },
};

const production = {
    debugOut: () => { },
    verboseOut: () => { },
    clientId: '1532968344313925813', // [PC] Theo
    guilds: {
        '1211371062273777714': {
            // The Melting Pot
            sync: [
                '1345228507407450132', // The F***ing Pot [outbound [TFP -> TMP] only!]
            ],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread, // test server does not have server premium level for private threads
            channels: {
                lobby: '1523581981852569650',                // TMP:welcome-verify-TMP
                verifyLogs: '1532972668133965917',           // TMP:verify-logs
                verifyLogsSecondary: '1532972906085351535',  // TMP:verify-kick-logs
                theoSendLogs: '1532973083378323717',         // TMP:theo-send-logs
                welcome: '1512914648188321923',              // TMP:entrance-hall
                general: '1211371064370663482',              // TMP:generally-silly
                introduce: '1211371064370663481',            // TMP:introductions
            },
            roles: {
                staffRoles: [
                    // [Active]
                    '1211371062806315016',  // TMP: Admin
                    '1270943987813056666',  // TMP: Developer
                    '1256252825155932191',  // TMP: Moderator
                    '1298014691142139924',  // TMP: Trial Moderator
                    '1270939584653561927',  // TMP: Verifier
                ],
                verifier: '1270939584653561927',
                verified: '1253860508767883335',
                noImages: '1532951265552629940',
                member: '1532944488513798304',
                newbie: '1532974886958403775',
                greeter: '1512915152935321723',
                inactivityPing: '1532975240639025253',
                emojiVoid: '1532975122342875277',
            },
            questions: tmpQuestions,
            links: {
                banAppealForm: 'https://docs.google.com/forms/d/e/1FAIpQLScRut4v6JpyDXV2GVAk2OeN2tmj_HVNQTgb9s8bEP07FLuf8g/viewform?usp=dialog',
                rules: 'https://discord.com/channels/1211371062273777714/1269460269130842243/1535804967565393962',
            },
            invite: 'https://discord.gg/wu52YV5mvF',
            proxy: TMPProxy,
            rulesMessages: TMPRulesMessages,
        },
        '1345228507407450132': {
            // The F***ing Pot
            sync: [],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread,
            channels: {
                lobby: '1345231424177045587',               // TFP:verification
                verifyLogs: '1533294698347630693',          // TFP:verify-logs
                verifyLogsSecondary: '1533294889486516255', // TFP:verify-kick-logs
                theoSendLogs: '1533295070915072210',        // TFP:theo-send-logs
                general: '1345240559186350202',             // TFP:general
                introduce: '1347745886318366840',           // TFP:introductions
            },
            roles: {
                staffRoles: [
                    // [Active]
                    '1345240530124017664', // Admin
                    '1345240532602851338', // Team [Verifier]
                ],
                verifier: '1345240532602851338',
                verified: '1346291818274230282',
                member: '1533286921290121347',
                inactivityPing: '1535459082537013248',
            },
            questions: tfpQuestions,
            links: {
                banAppealForm: 'https://docs.google.com/forms/d/e/1FAIpQLScRut4v6JpyDXV2GVAk2OeN2tmj_HVNQTgb9s8bEP07FLuf8g/viewform?usp=dialog',
                rules: 'https://discord.com/channels/1345228507407450132/1345231424177045587/1535805456671449100',
            },
            invite: 'https://discord.gg/fs4VZU7xzz',
            proxy: TMPProxy,
            rulesMessages: TFPRulesMessages,
        },
        '1177552729682477128': {
            // Mutual Aid Database [MAD]
            sync: [],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread, // test server does not have server premium level for private threads
            channels: {
                lobby: '1261800625424044053',                // MAD:verification-tickets
                verifyLogs: '1535445664563990688',           // MAD:verify-logs
                verifyLogsSecondary: '1535445863672053930',  // MAD:verify-kick-logs
                theoSendLogs: '1535445999147946015',         // MAD:theo-send-logs
                general: '1177556190562099281',              // MAD:general
                introduce: '1177552729682477131',            // MAD:introductions
            },
            roles: {
                staffRoles: [
                    // [Active]
                    '1231451788889296986',  // MAD: Server Admin
                    '1265148655552434186',  // MAD: Developer
                    '1261874269445685380',  // MAD: Server Moderator
                    '1190213531711320116',  // MAD: Resource Editor
                    '1253932716290740255',  // MAD: Verifier
                    '1261888257130627083',  // MAD: Ticket Support
                ],
                verifier: '1253932716290740255',
                verified: '1211480701346517042',
                member: '1535438729563340840',
                inactivityPing: '1535458911723982848',
            },
            questions: madQuestions,
            links: {
                banAppealForm: 'https://docs.google.com/forms/d/e/1FAIpQLScRut4v6JpyDXV2GVAk2OeN2tmj_HVNQTgb9s8bEP07FLuf8g/viewform?usp=dialog',
                rules: 'https://canary.discord.com/channels/1177552729682477128/1261800625424044053/1535806091999313922',
            },
            invite: 'https://discord.gg/3JdhPC9KJP',
            proxy: MADProxy,
            rulesMessages: MADRulesMessages,
        },
        '1369082683183075328': {
            // SystemPlace! [SYSP]
            sync: [],
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread, // test server does not have server premium level for private threads
            channels: {
                lobby: '1369091080078757888',                // SYSP:welcome-verify-sysp
                verifyLogs: '1369463582047080498',           // SYSP:verification-logs
                verifyLogsSecondary: '1380336150425768016',  // SYSP:verify-kick-logs
                theoSendLogs: '1380336454584107079',         // SYSP:theo-send-logs
                welcome: '1369084724525400104',              // SYSP:welcome
                general: '1369082683183075331',              // SYSP:general
                introduce: '1369097202185539594',            // SYSP:intros
            },
            roles: {
                staffRoles: [
                    // [Active]
                    '1369083003120128150',  // SYSP: Administrator
                    '1404631501865484288',  // SYSP: Sys-Admin
                    '1369083038809591899',  // SYSP: Moderator
                    '1369083063400661002',  // SYSP: Trial Moderator
                    '1369085908707708999',  // SYSP: Verifier
                    '1369085790273146951',  // SYSP: Developer
                ],
                verifier: '1369085908707708999',
                verified: '1369083911899971615',
                noImages: '1380337590292709376',
                member: '1369083936470208694',
                inactivityPing: '1535456027871289364',
                emojiVoid: '1380347311133298739',
                greeter: '1380338258676027543',
            },
            questions: syspQuestions,
            links: {
                rules: 'https://discord.com/channels/1369082683183075328/1369084398049165402/1535805911942037566',
            },
            invite: 'https://discord.gg/hR7TFHkDYx',
            proxy: SYSPProxy,
            rulesMessages: SYSPRulesMessages,
        },
    },
};

if (process.env.NODE_ENV === 'development') {
    Object.assign(config, development);
} else if (process.env.NODE_ENV === 'production') {
    Object.assign(config, production);
} else {
    throw new FatalError(
        'Invalid value for environmental variable NODE_ENV: Must be either \'development\' or \'production\'',
    );
}

export default config;
