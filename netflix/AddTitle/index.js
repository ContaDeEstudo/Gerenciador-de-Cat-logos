module.exports = async function (context, req) {
  const { titulo, genero, ano } = req.body;
  const item = { id: Date.now().toString(), titulo, genero, ano };
  context.bindings.outputDocument = item;
  context.res = { status: 201, body: item };
};