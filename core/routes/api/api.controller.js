const getStaticInfo = async (req, res) => {
    res.send({
        status: 200,
        msg: 'owi api page',
    })
};

const sayHi = async (req, res) => {
    res.send({ express: 'Hello From Express' });
};

module.exports = {
    getStaticInfo,
    sayHi
};
