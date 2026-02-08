module.exports = async function (context, req) {
  const genero = req.query.genero;
  const result = context.bindings.inputDocuments.filter(i => i.genero === genero);
  context.res = { status: 200, body: result };
};