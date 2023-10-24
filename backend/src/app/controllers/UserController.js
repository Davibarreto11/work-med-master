import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll({
      attributes: [
        'id',
        'name',
        'email',
      ],
    });

    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const {
      id, name, email,
    } = await User.create(
      req.body,
    );

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6).nullable().notRequired(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', {
          is: (oldPassword) => oldPassword,
          then: () => Yup.string().required(),
        }),
      confirmPassword: Yup.string()
        .when('password', {
          is: (password) => password,
          then: () => Yup.string().required().oneOf([Yup.ref('password')]),
        }),
    });

    if (!(await schema.isValid(req.body, { abortEarly: false }))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
