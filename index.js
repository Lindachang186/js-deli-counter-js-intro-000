var katzDeli = [];

function takeANumber(katzDeliLine, number) {
  katzDeliLine.push(number);
  return (`You are number ${number + 1}.`)
}

console.log(takeANumber(katzDeli, next))
console.log(takeANumber(katzDeli, next))
console.log(takeANumber(katzDeli, next))

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
