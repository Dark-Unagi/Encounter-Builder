// monsters.js - Monster Library
// Pre-built monsters (updated with 10% threshold increase and tier-appropriate damage dice)
const defaultMonsters = [
    {
        name: "Goblin",
        tier: 1,
        hp: 2,
        stress: 2,
        evasion: 12,
        thresholdLow: 6,
        thresholdHigh: 12,
        damageDice: "1d6",
        attackMod: 2,
        features: "1 Stress: Nimble Escape - Reduce hits by 1."
    },
    {
        name: "Orc Warrior",
        tier: 2,
        hp: 4,
        stress: 3,
        evasion: 13,
        thresholdLow: 11,
        thresholdHigh: 20,
        damageDice: "2d8",
        attackMod: 3,
        features: "1 Stress: Brutal Strike - +1d4 damage."
    },
    {
        name: "Dire Wolf",
        tier: 2,
        hp: 5,
        stress: 2,
        evasion: 14,
        thresholdLow: 10,
        thresholdHigh: 19,
        damageDice: "2d4",
        attackMod: 4,
        features: "1 Stress: Pack Tactics - Advantage on next attack."
    },
    {
        name: "Ogre",
        tier: 3,
        hp: 8,
        stress: 4,
        evasion: 14,
        thresholdLow: 20,
        thresholdHigh: 31,
        damageDice: "3d6",
        attackMod: 5,
        features: "2 Stress: Smash - Hit all adjacent targets."
    },
    {
        name: "Troll",
        tier: 4,
        hp: 12,
        stress: 6,
        evasion: 15,
        thresholdLow: 24,
        thresholdHigh: 35,
        damageDice: "4d8",
        attackMod: 6,
        features: "1 Stress: Regenerate 1 HP. 2 Stress: Multi-attack."
    },
    {
        name: "Young Dragon",
        tier: 5,
        hp: 20,
        stress: 10,
        evasion: 17,
        thresholdLow: 29,
        thresholdHigh: 44,
        damageDice: "5d8",
        attackMod: 8,
        features: "3 Stress: Breath weapon (area). 2 Stress: Flight."
    },
    
    // You can easily add more monsters here:
    {
        name: "Skeleton Warrior",
        tier: 1,
        hp: 1,
        stress: 1,
        evasion: 11,
        thresholdLow: 5,
        thresholdHigh: 11,
        damageDice: "1d4",
        attackMod: 2,
        features: "1 Stress: Bone shield - Reduce next attack by 2."
    },
    {
        name: "Owlbear",
        tier: 3,
        hp: 10,
        stress: 3,
        evasion: 13,
        thresholdLow: 18,
        thresholdHigh: 30,
        damageDice: "3d8",
        attackMod: 6,
        features: "2 Stress: Rending claws - Extra 1d6 damage."
    }
];

// Make the monsters available globally
window.defaultMonsters = defaultMonsters;