const fs = require("fs");
const Picture = require("../models/Picture");

export class PictureController {
  static async create(req, res): Promise<void> {
    try {
      const { originalname: name, buffer } = req.file;
      const src = `uploads/${name}`;
      fs.writeFileSync(src, buffer);

      const picture = new Picture({
        name,
        src,
      });

      await picture.save();
      res.json(picture);
    } catch (err) {
      res.status(500).json({ message: "Erro ao salvar a imagem." });
    }
  }

  static async update(req, res): Promise<any> {
    try {
      const picture = await Picture.findById(req.params.id);
      if (!picture) {
        return res.status(404).json({ message: "Imagem não encontrada" });
      }

      // aqui você pode atualizar os campos da imagem, como o nome
      picture.name = req.body.name;

      // caso haja um arquivo de imagem enviado na requisição, você deve remover o antigo e atualizar o caminho para o novo arquivo
      if (req.file) {
        fs.unlinkSync(picture.src);
        picture.src = req.file.path;
      }

      await picture.save();
      res.json(picture);
    } catch (err) {
      res.status(500).json({ message: "Erro ao atualizar a imagem" });
    }
  }

  static async remove(req, res): Promise<any> {
    try {
      const picture = await Picture.findById(req.params.id);
      if (!picture) {
        return res.status(404).json({ message: "Imagem não encontrada" });
      }
      fs.unlinkSync(`uploads/${picture.name}`);
      await picture.remove();
      res.json({ message: "Imagem removida com sucesso" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao remover a imagem" });
    }
  }

  static async findAll(req, res): Promise<void> {
    try {
      const pictures = await Picture.find();
      res.json(pictures);
    } catch (err) {
      res.status(500).json({ message: "Erro ao buscar as imagens." });
    }
  }
}
