'use strict';

/**
 * user-profiles service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-profiles.user-profiles');
