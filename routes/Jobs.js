const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.post('/newjob', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        console.error('Error:', "error");
        res.status(500).json({ error: 'error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const { role, sortBy, search, page } = req.query;

        const totalpage = 10;
        let query = {};

        if (role) {
            query.role = role;
        }

        if (search) {
            query.language = { $regex: search, $options: 'i' };
        }

        const total = await Job.countDocuments(query);
        const pages = Math.ceil(total / totalpage);

        let sortOptions = { postedAt: -1 };
        if (sortBy === 'dateAsc') {
            sortOptions = { postedAt: 1 };
        }

        const jobs = await Job.find(query)
            .sort(sortOptions)
            .skip((page - 1) * totalpage)
            .limit(totalpage);

        res.json({ jobs, pages });
    } catch (error) {
        res.status(500).json({ error: 'error' });
    }
});

module.exports = router;
