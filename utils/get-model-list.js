const readdir = require("./readdir-async");
const path = require("path");
const shallowFlatten = require("./shallow-flatten");
const CORE_PATH = "./core/";

const getFullPath = path => `${CORE_PATH}/${path}`;

const getDirs = () => {
	const files = readdir(path.resolve(CORE_PATH));
	const dirPath = path.resolve(CORE_PATH);

	return files.map(fileName => `${dirPath}/${fileName}`)
};

const getFileNamesByDirNames = dirNames => {
	const nameListPromises = dirNames.map(dir => {
		const files = readdir(path.resolve(dir));
		return files.map(file => `${dir}/${file}`);
	});
	return shallowFlatten(nameListPromises);
};

const getModelFiles = files => {
	return files.filter(file => file.includes("model"));
};

const getModelList = () => {
	const dirs = getDirs();
	const files = getFileNamesByDirNames(dirs);

	return getModelFiles(files);
};



module.exports = getModelList;
