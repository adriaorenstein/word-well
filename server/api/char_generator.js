const express = require('express');
const router = express.Router();
const { Char_Traits } = require('../db/models/char_traits');
const { First_Names } = require('../db/models/first_names');
const { Last_Names } = require('../db/models/last_names');
const { Likes_Dislikes } = require('../db/models/likes_dislikes');
const { Motivators } = require('../db/models/motivators');
const { Phys_Traits } = require('../db/models/phys_traits');
const { Skills } = require('../db/models/skills');
const { Wildcards } = require('../db/models/wildcards');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

function getAge() {
    return (Math.floor(Math.random() * 101));
}

router.get('/get-char-trait', async function(req, res, next) {
    try {
        const trait = await Char_Traits.findAll({
            order: db.random(),
            limit: 1
        });
        res.json(trait[0]);
    } catch (err) {
        next(err);
    }
});

router.post('/set-char-trait', async function(req, res, next) {
    try {
        await Char_Traits.create({ 
            trait: req.body.trait
        });
        // res.json(added_trait);
    } catch (err) {
        if (err.name != 'SequelizeUniqueConstraintError') {
            next(err);
        }
    }
})

function extract_data_vals (data_arr) {
    let extracted_data = [];
    for (let i = 0; i < data_arr.length; i++) {
        extracted_data.push(data_arr[i].dataValues.element);
    }
    return extracted_data;
}

router.get('/get-new-character', async function(req, res, next) {
    try {
        // Char Traits
        const char_traits = await Char_Traits.findAll({
            order: db.random(),
            limit: 3
        });

        // First Name
        const first_name = await First_Names.findAll({
            order: db.random(),
            limit: 1
        });

        let selected_gender = first_name[0].dataValues.gender;

        // Last Name
        const last_name = await Last_Names.findAll({
            order: db.random(),
            limit: 1
        });

        // Likes/Dislikes
        const likes_dislikes = await Likes_Dislikes.findAll({
            order: db.random(),
            limit: 6
        });

        // Motivators
        const motivator = await Motivators.findAll({
            order: db.random(),
            limit: 1
        });

        // Phys Traits
        const phys_traits = await Phys_Traits.findAll({
            where: {
                gender: {
                    [Op.or]: [selected_gender, 'unisex']
                }
            },
            order: db.random(),
            limit: 3,
        });

        // Skills
        const skills = await Skills.findAll({
            order: db.random(),
            limit: 2
        });

        // Wildcard
        const wildcard = await Wildcards.findAll({
            order: db.random(),
            limit: 1
        });

        // console.log(phys_traits[0].dataValues.element);

        let likes_dislikes_extracted = extract_data_vals(likes_dislikes);
        let likes = likes_dislikes_extracted.slice(0, likes_dislikes_extracted.length/2);
        let dislikes = likes_dislikes_extracted.slice(likes_dislikes_extracted.length/2);

        res.json({
            type: 'char',
            gender: [selected_gender],
            age: getAge(),
            char_traits: extract_data_vals(char_traits),
            first_name: extract_data_vals(first_name),  
            last_name: extract_data_vals(last_name), 
            likes: likes,
            dislikes: dislikes, 
            motivator: extract_data_vals(motivator), 
            phys_traits: extract_data_vals(phys_traits), 
            skills: extract_data_vals(skills), 
            wildcard: extract_data_vals(wildcard)
        })
    } catch (err) {
        next(err);
    }
})

router.post('/set-char-entry', async function(req, res, next) {
    try {
        let entry = req.body.entry;
        let db_name = req.body.db_name;

        switch(db_name) {
            case 'Char_Traits':
                await Char_Traits.create({ 
                    element: entry
                });
                break;
            case 'First_Names':
                await First_Names.create({ 
                    element: entry,
                    gender: req.body.gender
                });
                break;
            case 'Last_Names':
                await Last_Names.create({ 
                    element: entry
                })
                break;
            case 'Likes_Dislikes':
                await Likes_Dislikes.create({ 
                    element: entry
                });
                break;
            case 'Motivators':
                await Motivators.create({ 
                    element: entry
                });
                break;
            case 'Phys_Traits':
                await Phys_Traits.create({ 
                    element: entry,
                    gender: req.body.gender
                });
                break;
            case 'Skills':
                await Skills.create({ 
                    element: entry
                });
                break;
            case 'Wildcards':
                await Wildcards.create({ 
                    element: entry
                });
                break;
        }
        // res.json(added_trait);
    } catch (err) {
        if (err.name != 'SequelizeUniqueConstraintError') {
            next(err);
        }
    }
})

module.exports = router;