const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../../utils/');

//GET all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at']
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST new comments
router.post('/',
// withAuth,
(req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE comments
router.delete('/:id',
// withAuth,
(req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(400).json({ message: 'No comment found with this id!' });
            return
        }
        res.json(dbCommentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router 