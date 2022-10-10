/**
 * Calculate energy produced
 *
 * By:      Daniel
 * Version: 1.0
 * Since:   2022-10-09
 */
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()
const speed = 2.998 * 10 ** 8

// Getting user input
const inpString = prompt('Mass of object(kg): ')

// Process
try {
  const mass = parseFloat(inpString)
  if (isNaN(mass)) {
    console.log('Input invalid :(')
  } else if (mass <= 0) {
    console.log('Mass cannot be a negative')
  } else {
    // Calculations
    const energy = mass * speed ** 2

    // Output calculations
    console.log(`${mass} kg of mass would produce ${energy}J of energy`)
  }
} catch (e) {
  // Incase error occurs
  console.log('Input invalid :(')
}

// Done
console.log('\nDone')
