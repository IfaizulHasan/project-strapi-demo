'use strict';

/**
 * project-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-one.project-one');
