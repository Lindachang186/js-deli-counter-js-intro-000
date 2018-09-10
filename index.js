var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var i = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${i} in line.`)
  }

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else return "There is nobody waiting to be served!"
}
