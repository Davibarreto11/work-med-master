import Role from '../models/Role';

class RoleController {
  async store(req, res) {
    const { name, slug } = await Role.create(req.body);

    return res.json({
      name,
      slug,
    });
  }
}

export default new RoleController();
