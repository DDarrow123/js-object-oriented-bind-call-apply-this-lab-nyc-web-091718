function justInvoke(fn){
  return fn()
}


function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)

}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
  // console.log(fn.apply(bob, [20, 'black']))
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
