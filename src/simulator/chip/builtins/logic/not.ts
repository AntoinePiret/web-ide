import { Chip, HIGH, LOW, Voltage } from "../../chip.js";

export function not(inn: Voltage): [Voltage] {
  return [inn === LOW ? HIGH : LOW];
}

export function not16(inn: number): number {
  return ~inn & 0xffff;
}

export class Not extends Chip {
  constructor() {
    super(["in"], ["out"]);
  }

  eval() {
    const a = this.in("in").voltage();
    const [out] = not(a);
    this.out().pull(out);
  }
}

export class Not16 extends Chip {
  constructor() {
    super(["in[16]"], ["out[16]"]);
  }

  eval() {
    this.out().busVoltage = not16(this.in().busVoltage);
  }
}
