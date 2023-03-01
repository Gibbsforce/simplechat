import fs from "node:fs"
import { options } from "../../config.js"
class FileContainer {
  constructor(fileName) {
    this.fileName = `${options.file.path}/${fileName}`
  }
  save = async (data) => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      let newData = []
      if (fileRead === "" || fileRead === "[]") {
        data._id = 1
        data.timestamp = new Date().toLocaleString()
        newData = [data]
      } else {
        const readFileParse = JSON.parse(fileRead)
        data._id = readFileParse[readFileParse.length - 1]._id + 1
        data.timestamp = new Date().toLocaleString()
        newData = [...readFileParse, data]
      }
      await fs.promises.writeFile(path, JSON.stringify(newData, null, 2))
      return data._id
    } catch (error) {
      console.log(`Error at saving data: ${error}`)
    }
  }
  getAll = async () => {
    const path = `./${this.fileName}`
    try {
      const fileRead = await fs.promises.readFile(path, "utf8")
      const fileReadParsed = JSON.parse(fileRead)
      if (!fileReadParsed) return false
      return fileReadParsed
    } catch (error) {
      console.log(`Error at getting al data: ${error}`)
    }
  }
}
export default FileContainer
