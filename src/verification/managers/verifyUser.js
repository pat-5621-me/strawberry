import { userMention } from 'discord.js';
import config from '../../config/config.js';
import { createVerifiedLog } from '../controllers/log.js';
import { assignRole, isVerifier } from '../controllers/member.js';
import { fetchApplicant, archiveTicket } from '../controllers/ticket.js';

/**
 * Closes a verification ticket
 * @param {ThreadChannel} ticket A verification ticket
 */
async function closeTicket(ticket) {
    await archiveTicket(ticket, 'Archived by verifier');
}

/**
 * Verifies a member
 * @param {GuildMember} member A guild member
 * @param {string} type The type of verification
 */
async function verify(member, type) {
    await assignRole(member, config.roles.verified);
    if (type === 'noImages' && config.roles.noImages) {
        await assignRole(member, config.roles.noImages);
    }
}

/**
 * If the user is a verifier and the ticket's applicant is in the server, verifies the ticket's
 * applicant, sends welcome message and log message, and closes the ticket
 * @param {ThreadChannel} ticket An open verification ticket
 * @param {GuildMember} verifier The guild member that initiated the verify user process
 * @param {function} resolve Success callback. Takes a single parameter - message
 * @param {function} reject Reject callback. Takes a two parameters - error, message
 * @param {string} type The type of verification
 */
async function verifyUser(ticket, verifier, resolve, reject, type) {
    // reject if conditions aren't met
    if (!isVerifier(verifier)) {
        await reject('You are not a verifier');
        return;
    }

    const applicant = await fetchApplicant(ticket);
    if (!applicant) {
        await reject('User is not in the server');
        return;
    }

    if (applicant.roles.cache.has(config.roles.verified)) {
        await reject('User has already been verified');
        return;
    }

    // verify user
    await verify(applicant, type);

    // send welcome message and create log for successful verification
    await Promise.all([
        createVerifiedLog(
            ticket.guild.channels.cache.get(config.channels.verifyLogs),
            verifier,
            applicant,
        ),
    ]);

    // success
    await resolve(`${userMention(applicant.id)} has been verified`);

    // close ticket (has to happen after resolution)
    await closeTicket(ticket);
}

export default verifyUser;
