var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var i = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${i} in line.`)
  }

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0) {
    var newLine = [];
    var line = "The line is currently: "
    for(let i =0 ; katzDeliLine.length > 0; i++) {
      newLine.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    var m = line + newLine.join(", ")
    return m
  } else return "The line is empty"
}
