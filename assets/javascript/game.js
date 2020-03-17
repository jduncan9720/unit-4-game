// Need an array that includes all of the available characters
// NOTE: Every object is hard coded into the HTML with a unique ID. Objects don't "move", they are only hidden and shown. 

// Characters (Have three versions of each)
    // Must have image of character
    // Must show name above image
        // Must have a damage points (DP) amount (background)
        // Must have a hit point (HP) amount
    //Must show hp amount below image (In order to find the ID to change, google how to find id of html object. Use same code as hangman game to change hp when it is lost)
    
    // Click on a character
        // When you click on the character, that character "moves" into the "Your Hero" area and out of the "Character Selection" area (All other characters are hidden)
        // Upon that same click all remaining characters move into the "your Enemies" area and out of the "Character Selection" area (All other characters show in enemies area)

    //Click on an enemy to select first battle
        // On click that Enemy moves into the "Current Attacker" area (Enemy in enemy select dissapears, enemy in battle appears)
        // Enemy background turns black
        // Attack button appears in the "Attack Button" section (Button is shown)

    //Click on "Attack" button to begin fight
        // On click, Hero DP is compared to Enemy DP:
            // Hero HP must adjust based on enemy damage
             // Display adjusted hp below image
            // Enemy HP must adjust based on hero damage
             // Display adjusted hp below image
        // On click, results of the attack must display in the "About attack" area
            // results must change on each click of attack button, replacing previous information if any there
        // If after attack, both HP results are greater than zero:
            // Add small amount to Hero DP and continue game
        // If after attack, Hero HP is equal to or less than zero:
            //If Villain's HP is also less than zero:
                //A tie has occured, display "You have killed each other" and ask to retart game
                // Show "Restart Battle" button and on click restart game
            // Else:
                // Display "Battle Lost" and show restart button in "Restart Button" area
        // If after attack, Enemy HP is equal to or less than zero:
            //Remove Enemy from "Current Attacker" area and move next enemy into "Current Attacker" area.
                // Hero HP and DP contiues into next round 
                // Enemy HP and DP begins with full original amount for that character.
                // Begin the "Attack" function again.
            // If there are no more attackers:
                //Display "Battle Won" and ask to "Restart Game?"
                // Show "Restart Battle" button
                    // On click, restart game

    
