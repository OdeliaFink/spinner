let timing = 100
const circleSteps = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
for (const steps of circleSteps) {
  setTimeout(function() {
    process.stdout.write("\r" + steps) // \r overwrites 
  }, timing)
  timing += 50
}
setTimeout(function() {
  console.log(" ")
}, timing)
