class Hero {
  constructor(name, health, attackPower, healPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.healPower = healPower;
  }

  attack(enemy) {
    enemy.takeDamage(this.attackPower);
  }

  heal() {
    this.health += this.healPower;
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}
