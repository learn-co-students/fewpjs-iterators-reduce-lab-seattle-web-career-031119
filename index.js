const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const cb = (elem, total) => {
  return elem + total
}

// (elem, total) => elem + total

const totalBatteries = batteryBatches.reduce(cb)
