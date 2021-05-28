const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

  console.log(req.body)
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.stringify(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
