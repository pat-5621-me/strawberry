import config from '../../config/config.js';
import { isBelongsToMember, sendPrompt } from './ticket.js';

/**
 * Creates the thread for a verification ticket for a member
 * @param {GuildTextThreadManager} threads The thread manager for verification tickets
 * @param {GuildMember} member A guild member
 * @returns {Promise<ThreadChannel>} The thread that was created
 */
function createThread(threads, member) {
    return threads.create({
        invitable: false,
        name: `${member.user.tag} | ${member.user.id}`,
        autoArchiveDuration: config.verifyTicketAutoArchiveDuration,
        reason: 'Thread for verifying a user',
        type: config.privateThread,
    });
}

/**
 * Creates a verification ticket for a member.
 * @param {GuildTextThreadManager} threads The thread manager for verification tickets
 * @param {GuildMember} applicant A guild member
 * @param {String} promptCategory The category of prompt to give
 * @returns {Promise<ThreadChannel} The ticket that was created
 */
async function createTicket(threads, applicant, promptCategory) {
    const thread = await createThread(threads, applicant);
    await sendPrompt(thread, applicant, promptCategory);

    const webhooks = await thread.parent.fetchWebhooks();

    if (!webhooks.size) {
        await thread.parent.createWebhook({
            name: 'Verification Kyle Proxy',
        });
    } 

    const webhook = (await thread.parent.fetchWebhooks()).first();

    // wait 30 seconds to send the message
    setTimeout(async () => {
        await webhook.send({
            content: `Welcome ${applicant} <a:TPF_GawrGura_Wave:968391057828093952>,\nPlease try to answer all the questions within 3 hours to avoid being kicked due to inactivity.\When you’ve finished answering, or if you need any help, just click the buttons above to add the verifiers to your thread ^^\nThankies <a:TPA_Trans_Heart:960885444285968395>`,
            username: 'Kyle ♡ [Any Pronouns]',
            avatarURL: 'https://i.imgur.com/fOJFzGz.png',
            threadId: thread.id,
        });
    }, 5000);

    return thread;
}

// /**
//  * Finds any existing tickets of a member, if any
// eslint-disable-next-line max-len
//  * @param {GuildTextThreadManager} threads A GuildTextThreadManager that contains possible tickets
//  *     for the member
//  * @param {GuildMember} member A guild member
//  * @returns {Promise<?Collection<ThreadChannel>>} Threads belonging to the member
//  */
// function fetchMemberTickets(threads, member) {
//     // TODO
// }

/**
 * Finds the most recent existing ticket of a member, if any
 * @param {GuildTextThreadManager} threads A GuildTextThreadManager that contains possible tickets
 *     for the member
 * @param {GuildMember} member A guild member
 * @returns {?ThreadChannel} A ticket that is the most recent existing one belonging to the member
 */
async function fetchMostRecentTicket(threads, member) {
    return threads.cache.find((thread) => isBelongsToMember(thread, member));
}

export {
    createTicket,
    // fetchMemberTickets,
    fetchMostRecentTicket,
};
