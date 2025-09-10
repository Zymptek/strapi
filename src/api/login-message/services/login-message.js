'use strict';

/**
 * login-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::login-message.login-message');
