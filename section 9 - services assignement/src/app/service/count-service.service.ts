export class CountService {
activeToInactiveCounter = 0
inactiveToActiveCounter = 0

  incrementActiveToInactive() {
this.activeToInactiveCounter += 1
console.log('active to inactive counter: ' +this.activeToInactiveCounter)
  }

  incrementInactiveToActive() {
this.inactiveToActiveCounter += 1
console.log('inactive to active counter: ' +this.inactiveToActiveCounter)

  }
}
