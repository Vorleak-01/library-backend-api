const memberRepository = require('../repositories/member.repository');

async function getMember(req, res, next) {
  try {
    const member = await memberRepository.getMemberWithLoans(Number(req.params.id));
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    next(err);
  }
}

module.exports = { getMember };
