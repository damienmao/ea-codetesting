let config
if(process.env.TEST——DOMAIN==='dev3'){
config={
  baseUrl: ''，
  tagExpression:'not @visual and not @local and not @skip',
  feature:'*',
  }
}
else {
 config ={
    baseUrl: 'http://localhost:3000'，
    tagExpression:'not @visual and not @local and not @skip',
    feature:'*',
 }
}
