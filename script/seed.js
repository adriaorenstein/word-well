const db = require('../server/db');
const { Characters } = require('../server/db/models/characters');
const { Char_Traits } = require('../server/db/models/char_traits');
const { First_Names } = require('../server/db/models/first_names');
const { Last_Names } = require('../server/db/models/last_names');
const { Likes_Dislikes } = require('../server/db/models/likes_dislikes');
const { Motivators } = require('../server/db/models/motivators');
const { Phys_Traits } = require('../server/db/models/phys_traits');
const { Skills } = require('../server/db/models/skills');
const { Wildcards } = require('../server/db/models/wildcards');

const characters_data = [
    {
        name: `Testy McTestPants`,
        age: 100,
        phys_descrip: `Ancient`,
        char_descrip: `Ancient-like`
    }
];

const char_traits_data = [
    { element: 'tough' },
    { element: 'strict' },
    { element: 'honest' },
    { element: 'kind' },
    { element: 'gentle' },
    { element: 'silly' },
    { element: 'abrasive' }
]

const first_names_data = [
    { element: 'cindy',
      gender: 'female' }
]

const last_names_data = [
    { element: 'lauper' }
]

const likes_dislikes_data = [
    { element: 'exercise' }
]

const motivators_data = [
    { element: 'physical fitness' }
]

const phys_traits_data = [
    { element: 'big hair',
      gender: 'unisex' }
]

const skills_data = [
    { element: 'inspiring others' }
]

const wildcards_data = [
    { element: 'owns 376 pairs of legwarmers' }
]

async function seed() {
    await db.sync({ force: true });
    console.log('db synced!');

    for (character of characters_data) {
        await Characters.create(character);
    }
    for (trait of char_traits_data) {
        await Char_Traits.create(trait);
    }
    for (first_name of first_names_data) {
        await First_Names.create(first_name);
    }
    for (last_name of last_names_data) {
        await Last_Names.create(last_name);
    }
    for (like_dislike of likes_dislikes_data) {
        await Likes_Dislikes.create(like_dislike);
    }
    for (motivator of motivators_data) {
        await Motivators.create(motivator);
    }
    for (phys_trait of phys_traits_data) {
        await Phys_Traits.create(phys_trait);
    }
    for (skill of skills_data) {
        await Skills.create(skill);
    }
    for (wildcard of wildcards_data) {
        await Wildcards.create(wildcard);
    }
}

async function runSeed() {
    console.log('seeding...');

    try {
        await seed();
    } catch (err) {
        console.log(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection');
        await db.close();

        console.log('db connection closed');
    }
}

if (module == require.main) {
    runSeed();
}