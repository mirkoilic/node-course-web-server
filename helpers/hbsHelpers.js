const hbs = require('hbs');

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamtIt', (text) => {
    return text.toUpperCase();
});