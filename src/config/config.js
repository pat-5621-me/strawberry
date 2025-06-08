import 'dotenv/config';
import { ChannelType, ThreadAutoArchiveDuration } from 'discord.js';
import { FatalError } from '../bot/utils/errors.js';

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
 * @property {Object}    guild.roles.catagories   - Relevant role catagories
 * @property {Snowflake} guild.roles.catagories.isTrans       - Trans: role for trans people
 * @property {Snowflake} guild.roles.catagories.isQuestioning - Questioning: role for trans questioning people
 * @property {Snowflake} guild.roles.catagories.isCis         - Cis: role for cisgender people
 */
const config = {
    verboseOut: () => { },
    clientId: '',
    token: process.env.TOKEN,
    guilds: {
        '': {
            verifyTicketAutoArchiveDuration: 0,
            privateThread: ChannelType.PublicThread,
            channels: {
                lobby: '',
                verifyLogs: '',
                verifyLogsSecondary: '',
                theoSendLogs: '',
                welcome: '',
                general: '',
                introduce: '',
            },
            roles: {
                staffRoles: [],
                verifier: '',
                verified: '',
                member: '',
                greeter: '',
                catagories: {
                    isTrans: '',
                    isQuestioning: '',
                    isCis: '',
                },
            },
        },
    },
};

const development = {
    debugOut: console.debug,
    verboseOut: console.info,
    clientId: '999892254808350811', // elsie
    guilds: {
        '987229949041725520': {
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
            privateThread: ChannelType.PrivateThread,
            channels: {
                lobby: '987230161764225044', // test
                verifyLogs: '1023658079675498568', // test 2
                verifyLogsSecondary: '1024037750116204675', // test 3
                welcome: '1023658079675498568', // test 2
                general: '987230161764225044', // test
                introduce: '987230161764225044',
            },
            roles: {
                staffRoles: [
                    '1023671868609269811', // elise
                ],
                verifier: '1046271388782186590', // new role
                verified: '1016584910590459904', // test role
                greeter: '1023671868609269811', // elise
            },
        },
    },
};

const devs = {
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
                catagories: {},
            },
            links: {
                rules: 'https://google.com/1-rules',
                rule1: 'https://google.com/1-1',
                rule2: 'https://google.com/1-2',
                rule3: 'https://google.com/1-3',
                rule5: 'https://google.com/1-5',
                rule7: 'https://google.com/1-7',
                rule9: 'https://google.com/1-9',
                rule12: 'https://google.com/1-12',
            },
            invite: 'https://google.com',
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
                catagories: {
                    isTrans: '1255575077865525258',
                    isQuestioning: '1255575092847443988',
                    isCis: '1255575108601249815',
                },
            },
            links: {
                rules: 'https://google.com/2-rules',
                rule1: 'https://google.com/2-1',
                rule2: 'https://google.com/2-2',
                rule3: 'https://google.com/2-3',
                rule5: 'https://google.com/2-5',
                rule7: 'https://google.com/2-7',
                rule9: 'https://google.com/2-9',
                rule12: 'https://google.com/2-12',
            },
            invite: 'https://yahoo.com',
        },
    },
};

const production = {
    debugOut: () => { },
    verboseOut: () => { },
    clientId: '964615352489222225', // Theo
    guilds: {
        '1369082683183075328': {
            // SysPlace!
            verifyTicketAutoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
            privateThread: ChannelType.PrivateThread, // test server does not have server premium level for private threads
            channels: {
                lobby: '1369091080078757888',               // SysPlace:welcome-verify
                verifyLogs: '1369463582047080498',           // SysPlace:verify-logs
                verifyLogsSecondary: '1380336150425768016', // SysPlace:verify-kick-logs
                theoSendLogs: '1380336454584107079',        // SysPlace:theo-send-logs
                welcome: '1369084724525400104',              // SysPlace:welcome-wagon
                general: '1369082683183075331',              // SysPlace:rules-info
                introduce: '1369097202185539594',            // SysPlace:entrance-hall
            },
            roles: {
                staffRoles: [
                    // [Active]
                    '1369083003120128150',  // Admin
                    '1369083038809591899',  // Moderator
                    '1369083063400661002', // Trial Mod
                    '1369085908707708999',  // Verifier

                    // [On-Leave]
                    '1370254437179985951',  // Admin [On-Leave]
                    '1370254429478977667',  // Moderator [On-Leave]
                    '1370254431261560834', // Trial Mod [On-Leave]
                    '1370254435187691530', // verifier [On-Leave]
                ],
                verifier: '1370254435187691530',
                verified: '1369083911899971615',
                member: '1369083936470208694',
                greeter: '978861945253945394',
                inactivityPing: '1380338595788755024',
                catagories: {
                    isSinglet: '1369150890422042785',
                    isQuestioning: '1369150939868696576',
                    isSystem: '1369150708468940911',
                emojiVoid: '1380347311133298739',
                },
            },
            invite: 'https://discord.gg/WyxahUGjzy', // SysPlace permanent invite
        },
    },
};

if (process.env.NODE_ENV === 'development') {
    Object.assign(config, development);
} else if (process.env.NODE_ENV === 'devs') {
    Object.assign(config, devs);
} else if (process.env.NODE_ENV === 'production') {
    Object.assign(config, production);
} else {
    throw new FatalError(
        'Invalid value for environmental variable NODE_ENV: Must be either \'development\' or \'production\'',
    );
}

export default config;
