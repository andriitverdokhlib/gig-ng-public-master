import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  code: string = null;

  grid = [...Array(10)].map(() => Array(10)); // empty 10x10 array

  weightChar: string = null;

  constructor() {
    setInterval(() => this.getCode(this.weightChar), 2000);
  }

  getCode(weightChar?: string): string {
    this.weightChar = weightChar;
    this.populateGrid(weightChar);
    let seconds = new Date().getSeconds().toString();

    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }

    const firstChar = this.grid[seconds[0]][seconds[1]];
    const secondChar = this.grid[seconds[1]][seconds[0]];

    this.code = `${this.countChar(firstChar)}${this.countChar(secondChar)}`;

    return this.code;
  }

  private populateGrid(weightChar?: string): void {
    this.grid = [...Array(10)].map(() => Array(10));

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    const threshold = 20; // 20% of 10x10
    let filledCount = 0;

    if (weightChar) {
      while (filledCount < threshold) {
        const i = Math.floor(Math.random() * Math.floor(10));
        const j = Math.floor(Math.random() * Math.floor(10));
        if (!this.grid[i][j]) {
          this.grid[i][j] = weightChar.toLowerCase();
          filledCount++;
        }
      }
    }

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (!this.grid[i][j]) {
          this.grid[i][j] = characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      }
    }
  }

  private countChar(char: string): number {
    let count: number = 0;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === char) {
          count++;
        }
      }
    }

    return count % 10; // not bigger than 9
  }
}
