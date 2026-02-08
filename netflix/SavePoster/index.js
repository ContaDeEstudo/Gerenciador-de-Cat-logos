module.exports = async function (context, req) {
  const buffer = Buffer.from(req.body.poster, 'base64');
  context.bindings.outputBlob = buffer;
  context.res = { status: 200, body: "Poster salvo com sucesso" };
};