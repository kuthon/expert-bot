import { bot, start } from "./bot.js";
import { check_command } from "./commands/check.js";
import { check_c3po_command } from "./commands/check_c3po.js";
import { stat_command } from "./commands/get_stat.js";
import { help_command } from "./commands/help.js";
import { ping_command } from "./commands/ping.js";
import { setup_hear_middleware } from "./middlewares/hear.js";
import { setup_message_logger } from "./middlewares/message_logger.js";

// middlewares
setup_message_logger(bot);
setup_hear_middleware(bot);

// commands
ping_command();
help_command();
check_command();
check_c3po_command();
stat_command();

start();