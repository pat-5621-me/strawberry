import { SlashCommandBuilder } from 'discord.js';

import { buildWelcomeComponents, welcomeEmbeds } from '../../../../../content/welcome.js';
import InteractionHelper from '../../../../utils/InteractionHelper.js';
import SlashCommand from '../../SlashCommand.js';
import config from '../../../../../config/config.js';

/**
 * Handler for sendwelcome slash command. Sends the welcome/rules message
 */
class SendWelcome extends SlashCommand {
    /**
     * @param {string} name The name of this slash command
     */
    constructor(name = 'sendwelcome') {
        super(name);
    }

    /**
     * @returns {SlashCommandBuilder} The data that describes the command format to the Discord API
     */
    getData() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription('Sends the welcome/rules message in this channel')
            .setDefaultMemberPermissions(0)
            .setDMPermission(false)
            .addBooleanOption((option) => option
                .setName('preview')
                .setDescription('Whether to preview the message'));
    }

    /**
     * Method to run when this slash command is executed
     * @param {ChatInputCommandInteraction} interaction The interaction that was emitted when this
     *     slash command was executed
     */
    async run(interaction) {
        const preview = interaction.options.getBoolean('preview');

        const rulesEmbed = welcomeEmbeds[1];
        rulesEmbed.data.fields.forEach((field, index) => {
            const match = field.value.match(/{{(.*?)}}/);
            if (match) {
                const extractedText = match[1];
                const replacement = config.guilds[interaction.guild.id].links[extractedText]
                || extractedText;
                rulesEmbed.data.fields[index].value = field.value.replace(new RegExp(`{{${extractedText}}}`, 'g'), replacement);
            }
        });

        if (preview) {
            await InteractionHelper.reply(interaction, {
                embeds: [welcomeEmbeds[0], rulesEmbed],
            }, true);
        } else {
            await InteractionHelper.deferReply(interaction, true);

            // Sent as two embeds as it's over 6000 characters
            const msg = await interaction.channel.send({
                embeds: [welcomeEmbeds[0], welcomeEmbeds[1]],
            });

            await interaction.channel.send({
                embeds: [welcomeEmbeds[2], welcomeEmbeds[3]],
                components: buildWelcomeComponents(interaction.client, msg),
            });

            await InteractionHelper.reply(interaction, 'Sent!');
        }
    }
}

export default SendWelcome;
